<script>
  import { postDetails } from '$lib/data/postDetails.js';
  import SubmitButton from '$lib/components/SubmitButton.svelte'

  let dates = ""
  let company_name = ""
  let role_name= ""
  let duties = []

  let hiddenClass = " hidden"
  let saveMessage = ""

  const clearMessage = () => {
    saveMessage = ""
    hiddenClass = " hidden"
  }

  const updateForm = async () => {
    const data = {
      dates,
      company_name,
      role_name,
      duties
    }

    await postDetails(data, "employment_history")
    dates = ""
    company_name = ""
    role_name= ""

    saveMessage = "Posted"
    hiddenClass = ""
    const myTimeout = setTimeout(() => clearMessage(), 3000);
  }
</script>
<section class="form_container company_names">
  <h2 class="form_header">Enter New Employment</h2>
  <form class="form-Details">
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
      className=" add-button"
    />
    <div class={"saveMessage" + hiddenClass}><p>{saveMessage}</p></div>
  </form>
</section>

<style lang="scss">
  @import '../../../../styles/qualification.scss';
</style>