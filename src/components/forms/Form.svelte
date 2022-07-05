<script>
  import { onMount } from 'svelte';
  import { getDetails } from '$lib/getDetails.js'
  import { postDetails } from '$lib/postDetails.js'
  import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'

  export let details;
  let columnNames = Object.keys(details);
  export let table_name
  let saveMessage = ""

  onMount(async () => {
    let remoteDetails = await getDetails(table_name)

    if (Object.keys(remoteDetails).length == 0 && eval('localStorage.'+ table_name)) {
      details = JSON.parse(eval('localStorage.' + table_name));
    } else if(Object.keys(remoteDetails).length > 0) {
      details = remoteDetails;
    }
    else {
      return
    }
  });

  let updateForm  = async () => {    
    const message = await postDetails(details)
    localStorage.personalDetails = JSON.stringify(details)
    saveMessage = message
  }
</script>

<section class="personalInfoForm_container">
  <h2 class="personalInfoForm_header">Enter Your Details</h2>
  <form id="form-personalDetails" class="form-personalDetails">
    {#each columnNames as columnName}
    <input type="text" name={columnName} id={columnName} bind:value={details.columnName} placeholder={transformColumnNameToLabel(columnName)}>
    {/each}
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
  
  <p>{saveMessage}</p>
</section>

<style lang="scss">
  @import '../../styles/personalDetailsForm.scss';
</style>