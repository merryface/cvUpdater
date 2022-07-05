<script>
  import Form from "./Form.svelte";
  let personalDetails = {
    name: "",
    street: "",
    postcode: "",
    city: "",
    tel: "",
    email: "",
  }
</script>

<Form
  details = {personalDetails}
  table_name = "personal_details"
/>