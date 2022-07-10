<script>
  import supabase from'$lib/data/db'
  import PersonalDetails from '$lib/components/forms/PersonalDetails.svelte'
  import ExperienceSummary from '$lib/components/forms/ExperienceSummary.svelte'
  

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<PersonalDetails />
<ExperienceSummary />
<button on:click={signOut}>Sign Out</button>
/>
