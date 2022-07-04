<script>
  import { onMount } from 'svelte';
  import {getSummaryDetails} from '$lib/getSummaryDetails.js'
  import {postSummaryDetails} from '$lib/postSummaryDetails.js'

  let summaryDetails = {
    license_number: "",
    medical_class: "",
    total_hours: "",
    pic_time: "",
    instruction_time: "",
    a320_time: "",
  }
  let license_number
  let medical_class
  let total_hours
  let pic_time
  let instruction_time
  let a320_time
  let saveMessage = ""

  onMount(async () => {
    let remoteSummayDetails = await getSummaryDetails()

    if (Object.keys(remoteSummayDetails).length == 0 && localStorage.remoteSummayDetails) {
      remoteSummayDetails = JSON.parse(localStorage.remoteSummayDetails);
      license_number = summaryDetails.license_number
      medical_class = summaryDetails.medical_class
      total_hours = summaryDetails.total_hours
      pic_time = summaryDetails.pic_time
      instruction_time = summaryDetails.instruction_time
      a320_time = summaryDetails.a320_time
      
    } else if(Object.keys(remoteSummayDetails).length > 0) {
      summaryDetails = remoteSummayDetails;
    }
    else {
      return
    }
  });

  let updateForm  = async () => {
    summaryDetails.license_number = license_number;
    summaryDetails.medical_class = medical_class;
    summaryDetails.total_hours = total_hours;
    summaryDetails.pic_time = pic_time;
    summaryDetails.instruction_time = instruction_time;
    summaryDetails.a320_time = a320_time;
    
    const message = await postSummaryDetails(summaryDetails)
    localStorage.summaryDetails = JSON.stringify(summaryDetails)
    
    saveMessage = message
  }
</script>

<section class="summaryInfoForm_container">
  <h2 class="summaryInfoForm_header">Enter Career Summary</h2>
  <form id="form-summaryDetails" class="form-summaryDetails">
    <input type="text" name="license_number" id="license_number" bind:value={license_number} placeholder="Your License Number">
    <input type="text" name="medical_class" id="medical_class" bind:value={medical_class} placeholder="Class of Aviation medical">
    <input type="text" name="total_hours" id="total_hours" bind:value={total_hours} placeholder="Total flight time">
    <input type="text" name="pic_time" id="pic_time" bind:value={pic_time} placeholder="Total PIC flight time">
    <input type="instruction_time" name="instruction_time" id="instruction_time" bind:value={instruction_time} placeholder="Total instruction time">
    <input type="email" name="a320_time" id="a320_time" bind:value={a320_time} placeholder="Total A320 time">
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
  
  <p>{saveMessage}</p>
</section>

<style lang="scss">
  @import '../../styles/summaryDetailsForm.scss';
</style>