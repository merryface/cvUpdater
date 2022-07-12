<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'
  import { sanitiseDetails } from '$lib/utils/sanitiseDetails.js'

  import EditPilotQualification from '$lib/components/forms/ato_details/EditPilotQualification.svelte'

  let details = []
  let sanitisedDetails = []
  let idArray = []

  onMount(async () => {
    details = await getDetails('ato_details')
    sanitisedDetails = details.map(row => {
      idArray.push(row.id)
    })
  })

</script>



<form class="PilotQualifications">
  {#each details as qualification}
    <EditPilotQualification 
    ato_name ={qualification.ato_name}
    qualification ={qualification.qualification}
    date ={qualification.date}
    id ={qualification.id}
    />
  {/each}
</form>