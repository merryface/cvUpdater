<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'
  import { sanitiseDetails } from '$lib/utils/sanitiseDetails.js'

  import EditPilotQualification from '$lib/components/forms/ato_details/EditPilotQualification.svelte'

  let details = []
  let sanitisedDetails = []
  let idArray = []

  const onLoad = async () => {
    details = await getDetails('ato_details')
    sanitisedDetails = details.map(row => {
      idArray.push(row.id)
    })
  }

  onMount(async () => {
    await onLoad()
  })

</script>


<section class="form_container qualifications qualifications_edit">
  <h2 class="form_header">Edit Ratings or Licenses</h2>
    {#each details as qualification}
    <EditPilotQualification 
    ato_name ={qualification.ato_name}
    qualification ={qualification.qualification}
    date ={qualification.date}
    id ={qualification.id}
    />
    {/each}
</section>

<style lang="scss">
  @import '../../../../styles/qualification.scss';
</style>