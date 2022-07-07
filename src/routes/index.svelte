<script>
  import supabase from'$lib/db'

  import TrainingQualifications from '../components/TrainingQualifications.svelte'
  import SummaryForms from '../components/summaryForms.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>


<SummaryForms />
<TrainingQualifications />
