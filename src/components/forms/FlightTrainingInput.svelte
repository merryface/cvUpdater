<script>
  import Form from "./Form.svelte";
  import { postATODetails } from "$lib/postATODetails.js";
  let details = {
    ato_name: "",
    qualification: "",
    training_date: "",
  }
</script>

<Form
  details = {details}
  table_name = "training_details"
  postFunction = {postATODetails},
/>