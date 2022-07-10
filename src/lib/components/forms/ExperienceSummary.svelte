<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'
  import {sanitiseDetails} from '$lib/utils/sanitiseDetails.js'
  import Form from "./form.svelte"

  let details = {}
  let detailsArray = []
  let newRow = false

  onMount(async () => {
    details = await getDetails("experience_summary") 

    if (Object.entries(details).length == 0) {
      details = {
        license_number: "",
        medical_license: "",
        total_hours: "",
        pic_hours: "",
        instructor_hours: "",
        a320_hours: "",
      }

      newRow = true
    } 
    let sanitisedDetails = sanitiseDetails(details)
    detailsArray = Object.entries(sanitisedDetails)
    console.log(newRow)
  })

</script>

<Form
  details = {details}
  detailsArray = {detailsArray}
  table_name = "experience_summary"
  newRow = {newRow}
/>