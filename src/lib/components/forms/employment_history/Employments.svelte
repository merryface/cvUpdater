<script>
  import { onMount } from 'svelte'
  import { getDetails } from '$lib/data/getDetails.js'

  import EditEmployment from '$lib/components/forms/employment_history/EditEmployment.svelte'

  let details = []
  let idArray = []

  const onLoad = async () => {
    details = await getDetails('employment_history')
    sanitisedDetails = details.map(row => {
      idArray.push(row.id)
    })
  }

  onMount(async () => {
    await onLoad()
  })

</script>


<section class="form_container employments employments_edit">
  <h2 class="form_header">Edit Employment Histories</h2>
    {#each details as employment}
    <EditEmployment /> 
    dates ={employment.dates}
    company_name ={employment.company_name}
    role_name ={employment.role_name}
    duties ={employment.duties}
    id ={employment.id}
    />
    {/each}
</section>

<style lang="scss">
  @import 'src/styles/employment.scss';
</style>