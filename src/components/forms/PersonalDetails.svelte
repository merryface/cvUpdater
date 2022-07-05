<script>
  import Form from "./Form.svelte";
  let details = {
    name: "",
    street: "",
    postcode: "",
    city: "",
    tel: "",
    email: "",
  }
</script>

<Form
  details = {details}
  table_name = "personal_details"
/>