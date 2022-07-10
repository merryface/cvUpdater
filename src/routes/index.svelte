<script>
  import supabase from'$lib/data/db'
  import PersonalDetails from '$lib/components/forms/PersonalDetails.svelte'
  import ExperienceSummary from '$lib/components/forms/ExperienceSummary.svelte'
  import BlurbBody from '$lib/components/forms/BlurbBody.svelte'
  
  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<PersonalDetails />
<ExperienceSummary />
<BlurbBody />
<button class="signOut" on:click={signOut}>Sign Out</button>

<style lang="scss">
  @import '../styles/index.scss';
</style>
