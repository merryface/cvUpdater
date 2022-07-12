<script>
  import { transformColumnNameToLabel } from '$lib/utils/transformColumnNameToLabel.js'
  import { postPutDetails } from '$lib/data/postPutDetails.js'
  import updateLocalStorage from '$lib/utils/updateLocalStorage.js'
  import SubmitButton from '$lib/components/SubmitButton.svelte'

  import Input from '$lib/components/Input.svelte'

  export let details = {}
  export let detailsArray = []
  export let table_name
  let saveMessage = ""
  let hiddenClass = " hidden"
  export let newRow = true

  const updateLocalDetails = (details, detailsArray) => {
    for (const [column_name, value] of detailsArray) {
      details[column_name] = value
    }
  }

  const clearMessage = () => {
    saveMessage = ""
    hiddenClass = " hidden"
  }

  const updateForm = async () => {
    updateLocalDetails(details, detailsArray)
    updateLocalStorage(table_name, details)
    
    await postPutDetails(details, table_name, newRow)
    console.log('posted')
    saveMessage = "Details saved"
    hiddenClass = ""
    const myTimeout = setTimeout( clearMessage(), 3000);
  }
</script>

<section class="form_container">
  <h2 class="form_header">Enter Your {transformColumnNameToLabel(table_name)}</h2>
  <form class="form-Details">
    {#each detailsArray as [label, value]}
      <Input
        label={label}
        value={value}
      />
    {/each}

    <SubmitButton
      label={"Update Details"}
      updateForm={updateForm}
    />
    
    <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
  </form>
</section>

<style lang="scss">
  @import '../../../styles/detailsForm.scss';
</style>