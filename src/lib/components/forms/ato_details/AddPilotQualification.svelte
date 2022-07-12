<script>
  import { postDetails } from '$lib/data/postDetails.js';
  import SubmitButton from '$lib/components/SubmitButton.svelte'
  import Input from '$lib/components/Input.svelte'

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
    console.log(ato_name)
    const data = {
      ato_name,
      qualification,
      date
    }

    await postDetails(data, "ato_details")
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
      <input type="text"
        name="ato_name"
        bind:value={ato_name}
        placeholder="ATO Name"
      />
      <input type="text"
        name="qualification"
        bind:value={qualification}
        placeholder="Qualification"
      />
      <input type="text"
      name="date"
      bind:value={date}
      placeholder="Date"
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