import { supabase } from '$lib/supabaseClient.js'

export const getPersonalDetails = async () => {
  try {
    const user = supabase.auth.user()
    
    let { data, error, status } = await supabase
      .from('personal_details')
      .select()
      .eq('user_id', user.id)

    if (error && status !== 406) throw error

    if (data) {
      if(data.length > 0) return data[0]
      if(data.length === 0) return {}
    }
  } catch (error) {
    alert(error.message)
  }
}