<script>
  export let updateForm
  export let label
  export let className = " button"
</script>

<button class={"submitButton" + className} type="button" on:click={updateForm}>{label}</button>

<style lang="scss">
  @import '../../styles/submitButton.scss';
</style>