import { supabase } from '$lib/data/supabaseClient.js'

export const getDetails = async (table_name) => {
  try {
    const user = supabase.auth.user()
    
    let { data, error, status } = await supabase
      .from(table_name)
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