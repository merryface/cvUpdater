<script>
  import supabase from'$lib/db'
  import Form from '../components/forms/Form.svelte'
  import PersonalDetails from '../components/forms/PersonalDetails.svelte'

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<PersonalDetails />
<!-- <Form
table_name="personal_details"
details = {{

}} -->
/>
