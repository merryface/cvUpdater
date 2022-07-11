<script>
  import supabase from'$lib/data/db'
  import FormsTop from '$lib/components/FormsTop.svelte'
  import AddPilotQualification from '$lib/components/forms/ato_details/AddPilotQualification.svelte'
  
  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<div class="AllForms">
  <FormsTop />
  <AddPilotQualification />
</div>
<button class="signOut" on:click={signOut}>Sign Out</button>

<style lang="scss">
  @import '../styles/index.scss';
</style>
