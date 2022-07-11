<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'
  import {sanitiseDetails} from '$lib/utils/sanitiseDetails.js'
  import TextAreaForm from "./TextAreaForm.svelte"

  let details = {}
  let detailsArray = []
  let newRow = false

  onMount(async () => {
    details = await getDetails("blurb_body") 

    if (Object.entries(details).length == 0) {
      details = {
        text_body: ""
      }

      newRow = true
    } 
    let sanitisedDetails = sanitiseDetails(details)
    detailsArray = Object.entries(sanitisedDetails)
  })

</script>

<TextAreaForm
  details = {details}
  detailsArray = {detailsArray}
  table_name = "blurb_body"
  newRow = {newRow}
/>