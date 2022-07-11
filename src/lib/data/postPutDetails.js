import { supabase } from '$lib/data/supabaseClient.js'

export const postPutDetails = async (details, table_name, newRow) => {  
  try {
    const user = supabase.auth.user()
    details.user_id = user.id

    if (newRow) {
      const { data, error } = await supabase
      .from(table_name)
      .insert([details])
      .eq('user_id', user.id)
    } else {
      const { data, error } = await supabase
      .from(table_name)
      .update(details)
      .eq('user_id', user.id)
    }
  } catch (error) {
    alert(error.message)
  }
}