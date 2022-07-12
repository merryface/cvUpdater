<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'
  import {sanitiseDetails} from '$lib/utils/sanitiseDetails.js'
  import Form from "./Form.svelte"

  let details = {}
  let detailsArray = []
  let newRow = false


  onMount(async () => {
    details = await getDetails("personal_details")
    details = details[0]
    

    if (Object.entries(details).length == 0) {
      details = {
        full_name: "",
        address_street: "",
        address_town: "",
        address_postcode: "",
        telephone_number: "",
        email_address: "",
      }
      newRow = true
    }

    let sanitisedDetails = sanitiseDetails(details)
    detailsArray = Object.entries(sanitisedDetails)
  })

</script>

<Form
  details = {details}
  detailsArray = {detailsArray}
  table_name = "personal_details"
  newRow = {newRow}
/>