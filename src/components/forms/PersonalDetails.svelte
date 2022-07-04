<script>
  import { onMount } from 'svelte';
  import { personalDetails } from '$lib/stores.js'

  let name = personalDetails.name;
  let street = personalDetails.street;
  let postcode = personalDetails.postcode;
  let city = personalDetails.city;
  let tel = personalDetails.tel;
  let email = personalDetails.email;
  let saveMessage = ""

  onMount(async () => {
    let data = localStorage.personalDetails

    if (data) {
      let info = JSON.parse(data)
      console.log(info);
      personalDetails.set(info)
      name = info.name;
      street = info.street;
      postcode = info.postcode;
      city = info.city;
      tel = info.tel;
      email = info.email;
    }
  });

  let updateForm = () => {
    personalDetails.name = name;
    personalDetails.street = street;
    personalDetails.postcode = postcode;
    personalDetails.city = city;
    personalDetails.tel = tel;
    personalDetails.email = email;
    localStorage.personalDetails = JSON.stringify(personalDetails)
    saveMessage = "Details updated :)"
  }

  
</script>

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

<style lang="scss">
  @import '../../styles/personalDetailsForm.scss';
</style>