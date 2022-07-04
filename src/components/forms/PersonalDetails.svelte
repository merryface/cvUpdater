<script>
  import { onMount } from 'svelte';
  import {getDetails} from '$lib/getDetails.js'
  import {postDetails} from '$lib/postDetails.js'

  let personalDetails = {
    name: "",
    street: "",
    postcode: "",
    city: "",
    tel: "",
    email: "",
  }
  let name
  let street
  let postcode
  let city
  let tel
  let email
  let saveMessage = ""

  onMount(async () => {
    let remotePersonalDetails = await getDetails('personal_details')

    if (Object.keys(remotePersonalDetails).length == 0 && localStorage.personalDetails) {
      personalDetails = JSON.parse(localStorage.personalDetails);
    } else if(Object.keys(remotePersonalDetails).length > 0) {
      personalDetails = remotePersonalDetails;
    }
    else {
      return
    }
    name = personalDetails.name
    street = personalDetails.street
    postcode = personalDetails.postcode
    city = personalDetails.city
    tel = personalDetails.tel
    email = personalDetails.email
  });

  let updateForm  = async () => {
    personalDetails.name = name;
    personalDetails.street = street;
    personalDetails.postcode = postcode;
    personalDetails.city = city;
    personalDetails.tel = tel;
    personalDetails.email = email;
    
    const message = await postDetails(personalDetails)
    localStorage.personalDetails = JSON.stringify(personalDetails)
    
    saveMessage = message
  }
</script>

<section class="personalInfoForm_container">
  <h2 class="personalInfoForm_header">Enter Your Details</h2>
  <form id="form-personalDetails" class="form-personalDetails">
    <input type="text" name="name" id="name" bind:value={name} placeholder="Your Name">
    <input type="text" name="street" id="street" bind:value={street} placeholder="Street Number and Name">
    <input type="text" name="postcode" id="postcode" bind:value={postcode} placeholder="Postcode">
    <input type="text" name="city" id="city" bind:value={city} placeholder="City or Town">
    <input type="tel" name="tel" id="tel" bind:value={tel} placeholder="Telephone Number">
    <input type="email" name="email" id="email" bind:value={email} placeholder="Email">
    <button type="button" id="update" on:click={updateForm}>Update</button>
  </form>
  
  <p>{saveMessage}</p>
</section>

<style lang="scss">
  @import '../../styles/personalDetailsForm.scss';
</style>