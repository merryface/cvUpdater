<script>
  import { postDetails } from '$lib/data/postDetails.js';
  import clearMessage from '$lib/utils/clearMessage.js'

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

    await postDetails(details, "ato_details")
    ato_name = ""
    qualification = ""
    date = ""

    saveMessage = "Posted"
    hiddenClass = ""
    const myTimeout = setTimeout(clearMessage, 3000);
  }
</script>
<section class="form_container qualifications">
  <h2 class="form_header">Enter New Qualification</h2>
  <form class="form-Details">
      <input type="text"
        name="ATO Name"
        bind:value={ato_name}
        placeholder={"ATO Name"}
      />
      <input type="text"
      name="Qualification"
      bind:value={qualification}
      placeholder={"Qualification"}
    />
    <input type="text"
      name="Date"
      bind:value={date}
      placeholder={"Date"}
    />
    <button class="submitButton" type="button" id="update" on:click={updateForm}>Add Qualification</button>
    <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
  </form>
</section>

<style lang="scss">
  @import '../../../../styles/detailsForm.scss';
</style>