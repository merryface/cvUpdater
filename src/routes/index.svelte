<script>
  import supabase from'$lib/db'

  import FlightTraining from '../components/forms/FlightTrainingInput.svelte'
  import SummaryForms from '../components/summaryForms.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>


<SummaryForms />

<div class="flightTraining">
  <FlightTraining />
  
</div>

<style lang="scss">
  @import '../styles/flightTraining.scss';
</style>
