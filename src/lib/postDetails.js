import { supabase } from '$lib/supabaseClient.js'
import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'


export const postDetails = async (details, table_name) => {
  let postSuccess = false
  let localAndRemoteSame = false
  try {
    const user = supabase.auth.user()
    details.user_id = user.id

    // check if details table contains any data for this user
    let { data, error, status } = await supabase
      .from(table_name)
      .select()
      .eq('user_id', user.id)

      if (data.length > 0) {
        // Check local storage to see if user has already submitted details
        let localStorageDetails = JSON.parse(localStorage.getItem(table_name))
        let dataComparator = data[0]
        delete dataComparator.id
        delete dataComparator.user_id
        delete dataComparator.created_at
        localAndRemoteSame = 
          localStorageDetails.name === dataComparator.name 
          && localStorageDetails.street === dataComparator.street 
          && localStorageDetails.postcode === dataComparator.postcode 
          && localStorageDetails.city === dataComparator.city
          && localStorageDetails.phone === dataComparator.phone
          && localStorageDetails.email === dataComparator.email

        if (localAndRemoteSame) {
          postSuccess = true
        } else {
          // update existing details
          const { data, error } = await supabase
          .from(table_name)
          .update([details])
          .eq('user_id', user.id)
          .then(() => postSuccess = true)
        }
      }

      if (data.length === 0) {
        // insert new details
        details.user_id = user.id
        console.log(details)
        const { data, error } = await supabase
          .from(table_name)
          .insert([details])
          .then(() => postSuccess = true)
      }

    if (error && status !== 406) throw error

    if (data) {
      if(data.length > 0 && postSuccess && !localAndRemoteSame) return `${transformColumnNameToLabel(table_name)} updated`
      if(data.length === 0 && postSuccess) return `${transformColumnNameToLabel(table_name)} updated`
      if(!postSuccess && !localAndRemoteSame) return `${transformColumnNameToLabel(table_name)} not updated`
      if(localAndRemoteSame) return 'No changes detected to update'
    }
  } catch (error) {
    alert(error.message)
  }
}