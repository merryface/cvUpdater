<script>
  import { putDetails } from '$lib/data/putDetails.js';
  import SubmitButton from '$lib/components/SubmitButton.svelte'

  export let ato_name = ""
  export let qualification = ""
  export let date = ""
  export let id = ""
  let hiddenClass = " hidden"
  let saveMessage = ""

  const clearMessage = () => {
    saveMessage = ""
    hiddenClass = " hidden"
  }

  const updateForm = async () => {
    const data = {
      ato_name,
      qualification,
      date,
      id
    }

    await putDetails(data, "ato_details")

    saveMessage = "Posted"
    hiddenClass = ""
    const myTimeout = setTimeout(() => clearMessage(), 3000);
  }
</script>
<form class="form-details">

  <input type="text"
  name="ato_name"
  bind:value={ato_name}
  placeholder="ATO Name"
  />
  <input type="text"
  name="qualification"
  bind:value={qualification}
  placeholder="Rating or License"
  />
  <input type="text"
  name="date"
  bind:value={date}
  placeholder="Date"
  />
  <SubmitButton
  label={"Add Qualification"}
  updateForm={updateForm}
  className=" edit-button"
  />
  <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
</form>

<style lang="scss">
  @import '../../../../styles/qualification.scss';
</style>