<script>
  import supabase from'$lib/db'
  import PersonalDetails from '../components/forms/PersonalDetails.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>



<PersonalDetails />
