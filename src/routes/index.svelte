<script>
  import PersonalDetails from "../components/forms/PersonalDetails.svelte";
  import supabase from'$lib/db'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<PersonalDetails />
<button on:click={signOut}>Sign Out</button>
<style lang="scss">
  
</style>
