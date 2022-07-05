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
  details
  table_name = "summary_details"
/>