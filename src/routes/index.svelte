<script>
  import PersonalDetails from "../components/forms/PersonalDetails.svelte";
  import supabase from'$lib/db'
import Form from "../components/forms/Form.svelte";

  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }

  let personalDetails = {
    name: "",
    street: "",
    postcode: "",
    city: "",
    tel: "",
    email: "",
  }
</script>



<!-- <PersonalDetails /> -->
<Form
  details = {personalDetails}
table_name = "personal_details"
/>
<button on:click={signOut}>Sign Out</button>
<style lang="scss">
  
</style>
