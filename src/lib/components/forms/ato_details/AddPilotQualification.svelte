<script>
  import { postDetails } from '$lib/data/postDetails.js';
  import Input from '$lib/components/Input.svelte'
  import SubmitButton from '$lib/components/SubmitButton.svelte'

  let ato_name = ""
  let qualification = ""
  let date = ""
  let hiddenClass = " hidden"
  let saveMessage = ""

  const clearMessage = () => {
    saveMessage = ""
    hiddenClass = " hidden"
  }

  const updateForm = async () => {
    const details = {
      ato_name,
      qualification,
      date
    }

    await postDetails(details, "ato_details")
    ato_name = ""
    qualification = ""
    date = ""

    saveMessage = "Posted"
    hiddenClass = ""
    const myTimeout = setTimeout(() => clearMessage(), 3000);
  }
</script>
<section class="form_container add_qualifications">
  <h2 class="form_header">Enter New Qualification</h2>
  <form class="form-Details">
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
    />
    <SubmitButton
      label={"Add Qualification"}
      updateForm={updateForm}
    />
    <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
  </form>
</section>

<style lang="scss">
  @import '../../../../styles/addQualifications.scss';
</style>