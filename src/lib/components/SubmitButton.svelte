<script>
  export let updateForm
  export let label
</script>

<button class="submitButton" type="button" on:click={updateForm}>{label}</button>

<style lang="scss">
  @import '../../styles/submitButton.scss';
</style>