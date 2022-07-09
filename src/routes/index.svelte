<script>
  import supabase from'$lib/data/db'
  import PersonalDetails from '$lib/components/forms/PersonalDetails.svelte'

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
