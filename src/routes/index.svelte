<script>
  import supabase from'$lib/db'

  import TrainingQualifications from '../components/TrainingQualifications.svelte'
  import SummaryForms from '../components/summaryForms.svelte'
  import FormV2 from '../components/forms/FormV2.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<FormV2
table_name="Test_table"
details = {{
  testItemOne: "",
  testItemTwo: "",
  testItemThree: "",
  id: 1
}}
/>
<!-- <SummaryForms />
<TrainingQualifications /> -->
