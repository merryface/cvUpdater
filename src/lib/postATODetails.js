import { supabase } from '$lib/supabaseClient.js'
import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'


export const postATODetails = async (details) => {
  let postSuccess = false
  let localAndRemoteSame = false
  try {
    const user = supabase.auth.user()
    details.user_id = user.id

    // check if details table contains any data for this user
    let { data, error, status } = await supabase
      .from('training_details')
      .select()
      .eq('user_id', user.id)

      if (data.length > 0) {
        // update existing details
        const { data, error } = await supabase
        .from('training_details')
        .update([details])
        .eq('user_id', user.id)
        .eq('ato_name', details.ato_name)
        .then(() => postSuccess = true)
      }

      if (data.length === 0) {
        // insert new details
        details.user_id = user.id
        const { data, error } = await supabase
          .from('training_details')
          .insert([details])
          .then(() => postSuccess = true)
      }

    if (error && status !== 406) throw error

    if (data) {
      if(data.length > 0 && postSuccess && !localAndRemoteSame) return `${transformColumnNameToLabel('training_details')} updated`
      if(data.length === 0 && postSuccess) return `${transformColumnNameToLabel('training_details')} updated`
      if(!postSuccess) return `${transformColumnNameToLabel('training_details')} not updated`
    }
  } catch (error) {
    alert(error.message)
  }
}