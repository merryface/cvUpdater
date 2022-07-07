<script>
import { transformColumnNameToLabel } from '$lib/transformColumnNameToLabel.js';
import updateLocalStorage from '$lib/updateLocalStorage.js';
  export let details = {};
  export let table_name
  let detailsArray = Object.entries(details)

  const updateDetails = (details, detailsArray) => {
    for (const [column_name, value] of detailsArray) {
      details[column_name] = value
    }
  }

  const updateForm = async () => {
    updateDetails(details, detailsArray)
    updateLocalStorage(table_name, details)

  }
</script>

<section class="form_container">
  <h2 class="form_header">Enter Your {transformColumnNameToLabel(table_name)}</h2>
  <form class="form-Details">
    {#each detailsArray as [label, value]}
      {#if label != "id"}
        <input type="text"
          name={label}
          bind:value={value}
          placeholder={label}
        />
      {/if}
    {/each}
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
</section>