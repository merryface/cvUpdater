<script>
  import supabase from'$lib/db'
  import PersonalDetails from '../components/forms/PersonalDetails.svelte'
  import SummaryDetails from '../components/forms/SummaryDetails.svelte'
  import Blurb from '../components/forms/Blurb.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>


<div class="summaryForms">
  <PersonalDetails />
  <SummaryDetails />
  <Blurb />
</div>

<style lang="scss">
  @import '../styles/summaryForms.scss';
</style>
