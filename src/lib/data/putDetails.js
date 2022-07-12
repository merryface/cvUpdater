import { supabase } from '$lib/data/supabaseClient.js'

export const putDetails = async (details, table_name) => {
  console.log(details);
  
  try {
    const user = supabase.auth.user()
    details.user_id = user.id

    const { data, error } = await supabase
    .from(table_name)
    .update([details])
    .eq('id', details.id)
  } catch (error) {
    alert(error.message)
  }
}