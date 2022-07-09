<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/utils/getDetails.js'
  import {sanitiseDetails} from '$lib/utils/sanitiseDetails.js'
  import Form from "./Form.svelte"

  let details = {}
  let detailsArray = []

  onMount(async () => {
    details = await getDetails("personal_details") || {}
    let sanitisedDetails = sanitiseDetails(details)
    detailsArray = Object.entries(sanitisedDetails)
  })

</script>

<Form
  details = {details}
  detailsArray = {detailsArray}
  table_name = "personal_details"
/>