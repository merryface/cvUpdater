<script>
  import { putDetails } from '$lib/data/putDetails.js';
  import SubmitButton from '$lib/components/SubmitButton.svelte'

  export let dates = ""
  export let company_name = ""
  export let role_name = ""
  export let duties = []
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
  name="dates"
  bind:value={dates}
  placeholder="Employment Dates"
  />
  <input type="text"
  name="company_name"
  bind:value={company_name}
  placeholder="Employer Name"
  />
  <input type="text"
  name="role_name"
  bind:value={role_name}
  placeholder="Job Title"
  />
  <!-- DUTIES -->
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