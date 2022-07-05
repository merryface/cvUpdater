<script>
  import { onMount } from 'svelte';
  import { getDetails } from '$lib/getDetails.js'
  import { postDetails } from '$lib/postDetails.js'
  import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'

  export let details
  export let table_name
  let saveMessage = ""
  let remoteDetails = getDetails(table_name)
  let detailsArray = []

  onMount(async () => {
    if (Object.keys(remoteDetails).length == 0 && eval('localStorage.'+ table_name)) {
      details = JSON.parse(eval('localStorage.' + table_name));
    } else if(Object.keys(remoteDetails).length > 0) {
      details = await remoteDetails;
    }
    else {
      details
    }

    delete details.id
    delete details.user_id
    delete details.created_at
    // turn details into an array of single key value pairs
    for (const [column_name, value] of Object.entries(details)) {
      const pair = JSON.parse(`{"${column_name}": "${value}"}`)
      if(column_name != "user_id" || column_name != "id" || column_name != "created_at" ) detailsArray.push(pair);
    }
  });

  function clearMessage() {
    saveMessage = ""
  }
  
  let updateForm  = async () => {
    saveMessage = "Updating..."    
    const message = await postDetails(details, table_name)
    localStorage[table_name] = JSON.stringify(details)
    saveMessage = message
    const myTimeout = setTimeout(clearMessage, 5000);
  }
</script>

<section class="form_container">
  <h2 class="form_header">Enter Your {transformColumnNameToLabel(table_name)}</h2>
  <form id="form-Details" class="form-Details">
    {#await remoteDetails}
      <p>...Loading Form</p>
      {:then}
        {#each detailsArray as column}
        <input type="text"
          name={Object.keys(column)[0]}
          id={Object.keys(column)[0]}
          bind:value={details[Object.keys(column)[0]]}
          placeholder={transformColumnNameToLabel(Object.keys(column)[0])}
        />
        {/each}
    {/await}
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
  
  <p class="saveMessage">{saveMessage}</p>
</section>

<style lang="scss">
  @import '../../styles/detailsForm.scss';
</style>