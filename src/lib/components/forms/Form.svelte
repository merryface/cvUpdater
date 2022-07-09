<script>
  import { transformColumnNameToLabel } from '$lib/utils/transformColumnNameToLabel.js'
  import { postDetails } from '$lib/data/postDetails.js'
  import updateLocalStorage from '$lib/utils/updateLocalStorage.js'

  export let details = {}
  export let detailsArray = []
  export let table_name
  let saveMessage = ""
  let hiddenClass = " hidden"

  const updateLocalDetails = (details, detailsArray) => {
    for (const [column_name, value] of detailsArray) {
      details[column_name] = value
    }
  }

  function clearMessage() {
    saveMessage = ""
    hiddenClass = " hidden"
  }

  const updateForm = async () => {
    updateLocalDetails(details, detailsArray)
    updateLocalStorage(table_name, details)
    await postDetails(details, table_name)
    saveMessage = "Details saved"
    hiddenClass = ""
    const myTimeout = setTimeout(clearMessage, 3000);
  }
</script>

<section class="form_container">
  <h2 class="form_header">Enter Your {transformColumnNameToLabel(table_name)}</h2>
  <form class="form-Details">
    {#each detailsArray as [label, value]}
      <input type="text"
        name={label}
        bind:value={value}
        placeholder={transformColumnNameToLabel(label)}
      />
    {/each}
    <button type="button" id="update" on:click={updateForm}>Update</button>
    <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
  </form>
</section>

<style lang="scss">
  @import '../../../styles/detailsForm.scss';
</style>