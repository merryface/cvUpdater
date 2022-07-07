<script>
  import { onMount } from 'svelte';
  import { getDetails } from '$lib/getDetails.js'
  import { postDetails } from '$lib/postDetails.js'
  import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js'

  export let details
  export let table_name
  export let postFunction = postDetails
  export let getFunction = getDetails
  export let remoteID;
  let saveMessage = ""
  let remoteDetails
  let detailsArray = []
  let hiddenClass = " hidden"

  onMount(async () => {
    remoteDetails = await getFunction(table_name)
    remoteID = remoteDetails.id
    if (Object.keys(remoteDetails).length == 0 && eval('localStorage.'+ table_name + '_' + remoteID)) {
      details = JSON.parse(eval('localStorage.'+ table_name + '_' + remoteDetails.id));
    } else if(Object.keys(remoteDetails).length > 0) {
      details = remoteDetails;
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
    hiddenClass = " hidden"
  }
  
  let updateForm  = async () => {
    saveMessage = "Updating..."    
    hiddenClass = ""
    const message = await postFunction(details, table_name)
    localStorage.setItem(table_name + '_' + `${remoteID}`, JSON.stringify(details))
    saveMessage = message
    const myTimeout = setTimeout(clearMessage, 5000);
  }
</script>

<section class="form_container" id={table_name + "_container"}>
  <h2 class="form_header">Enter Your {transformColumnNameToLabel(table_name)}</h2>
  <form class="form-Details">
    {#await remoteDetails}
      <p>...Loading Form</p>
      {:then}
        {#each detailsArray as column}
          {#if Object.keys(column)[0] == "text_body"}
          <textarea
            name={Object.keys(column)[0]}
            id={Object.keys(column)[0]+"_"+table_name}
            bind:value={details[Object.keys(column)[0]]}
            placeholder={transformColumnNameToLabel(Object.keys(column)[0])}
            class="text_area"
          />
          {:else}
            <input type="text"
            name={Object.keys(column)[0]}
            id={Object.keys(column)[0]+"_"+table_name}
            bind:value={details[Object.keys(column)[0]]}
            placeholder={transformColumnNameToLabel(Object.keys(column)[0])}
            />
          {/if}
        {/each}
    {/await}
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
  
  <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
</section>

<style lang="scss">
  @import '../../styles/detailsForm.scss';
</style>