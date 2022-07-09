<script>
  import { transformColumnNameToLabel } from '$lib/utils/transformColumnNameToLabel.js';
  import updateLocalStorage from '$lib/utils/updateLocalStorage.js';

  export let details = {}
  export let detailsArray = []
  export let table_name
  let loading = false

  const updateLocalDetails = (details, detailsArray) => {
    for (const [column_name, value] of detailsArray) {
      details[column_name] = value
    }
  }

  const updateForm = async () => {
    updateLocalDetails(details, detailsArray)
    updateLocalStorage(table_name, details)
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
  </form>
</section>

<style lang="scss">
  @import '../../../styles/detailsForm.scss';
</style>