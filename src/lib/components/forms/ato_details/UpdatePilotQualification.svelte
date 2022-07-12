<script>
  import { updateDetails } from '$lib/data/upateDetails.js';
  import clearMessage from '$lib/utils/clearMessage.js'
  import Input from '$lib/components/Input.svelte'

  let ato_name = ""
  let qualification = ""
  let date = ""
  let hiddenClass = " hidden"
  let saveMessage = ""

  const updateForm = async () => {
    const details = {
      ato_name,
      qualification,
      date
    }

    await updateDetails(details, "ato_details")
    ato_name = ""
    qualification = ""
    date = ""

    saveMessage = "Posted"
    hiddenClass = ""
    const myTimeout = setTimeout(clearMessage, 3000);
  }
</script>
<Input
  label={"ATO_name"}
  value={ato_name}
/>
<Input 
  label={"qualification"}
  value={qualification}
/>
<Input
label={"date"}
value={date}
type="text"
/>
<button class="submitButton" type="button" id="update" on:click={updateForm}>Add Qualification</button>

<style lang="scss">
  @import '../../../../styles/addQualifications.scss';
</style>