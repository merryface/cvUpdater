import { supabase } from '$lib/data/supabaseClient.js'

export const postDetails = async (details, table_name) => {
  try {
    const user = supabase.auth.user()
    details.user_id = user.id
    console.log(details);
    
    const { data, error } = await supabase
    .from(table_name)
    .insert([details])
  } catch (error) {
    alert(error.message)
  }
}