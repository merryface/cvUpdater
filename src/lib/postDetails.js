import { supabase } from '$lib/supabaseClient.js'
import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'


export const postDetails = async (details, table_name) => {
  try {
    const user = supabase.auth.user()

    // update existing details
    const { data, error } = await supabase
    .from(table_name)
    .update([details])
    .eq('user_id', user.id)
  } catch (error) {
    alert(error.message)
  }
}