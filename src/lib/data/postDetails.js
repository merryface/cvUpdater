import { supabase } from '$lib/data/supabaseClient.js'

export const postDetails = async (details, table_name) => {
  console.log("Start posting");
  
  try {
    console.log("Start try");
    
    const user = supabase.auth.user()
    details.user_id = user.id
    console.log([details]);

    const { data, error } = await supabase
    .from(table_name)
    .insert([details])
    .eq('user_id', user.id)
  } catch (error) {
    alert(error.message)
  }

  console.log("End posting");
}