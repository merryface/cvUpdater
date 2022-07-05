<script>
  import Form from "./Form.svelte";
  let details = {
    license_number: "",
    medical_class: "",
    total_hours: "",
    pic_hours: "",
    instructor_hours: "",
    a320_hours: ""
  }
</script>

<Form
  details = {details}
  table_name = "summary_details"
/>