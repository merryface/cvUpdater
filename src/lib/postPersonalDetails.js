import { supabase } from '$lib/supabaseClient.js'

export const postPersonalDetails = async (personalDetails) => {
  let postSuccess = false
  try {
    const user = supabase.auth.user()
    personalDetails.user_id = user.id

    // check if personal_details table contains any data for this user
    let { data, error, status } = await supabase
      .from('personal_details')
      .select()
      .eq('user_id', user.id)

      if (data.length > 0) {
        // update existing personal details
        await supabase
          .from('personal_details')
          .update([personalDetails])
          .eq('user_id', user.id)
          .then(() => postSuccess = true)
      }

      if (data.length === 0) {
        // insert new personal details
        await supabase
          .from('personal_details')
          .insert([personalDetails])
          .eq('user_id', user.id)
          .then(() => postSuccess = true)
      }

    if (error && status !== 406) throw error

    if (data) {
      if(data.length > 0 && postSuccess) return "Personal details updated"
      if(data.length === 0 && postSuccess) return "Personal details inserted"
      if(!postSuccess) return "Personal details not updated"
    }
  } catch (error) {
    alert(error.message)
  }
}