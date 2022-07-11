import { supabase } from '$lib/data/supabaseClient.js'

export const postDetails = async (details, table_name) => {
  try {
    const user = supabase.auth.user()
    details.user_id = user.id
    const { data, error } = await supabase
    .from(table_name)
    .update([details])
    .eq('user_id', user.id)
  } catch (error) {
    alert(error.message)
  }
}