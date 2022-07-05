import { supabase } from '$lib/supabaseClient.js'
import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'
import { haveSameData } from '$lib/haveSameData.js'


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
        // update existing details
        const { data, error } = await supabase
        .from(table_name)
        .update([details])
        .eq('user_id', user.id)
        .then(() => postSuccess = true)
      }

      if (data.length === 0) {
        // insert new details
        details.user_id = user.id
        const { data, error } = await supabase
          .from(table_name)
          .insert([details])
          .then(() => postSuccess = true)
      }

    if (error && status !== 406) throw error

    if (data) {
      if(data.length > 0 && postSuccess && !localAndRemoteSame) return `${transformColumnNameToLabel(table_name)} updated`
      if(data.length === 0 && postSuccess) return `${transformColumnNameToLabel(table_name)} updated`
      if(!postSuccess) return `${transformColumnNameToLabel(table_name)} not updated`
    }
  } catch (error) {
    alert(error.message)
  }
}