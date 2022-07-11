<script>
  import PersonalDetails from '$lib/components/forms/PersonalDetails.svelte'
  import ExperienceSummary from '$lib/components/forms/ExperienceSummary.svelte'
  import BlurbBody from '$lib/components/forms/BlurbBody.svelte'
</script>

<div class="FormsTop">
  <div class="FormsTop_upper">
    <PersonalDetails />
    <ExperienceSummary />
  </div>
  <div class="FormsTop_lower">
    <BlurbBody />
  </div>
</div>

<style lang="scss">
  @import '../../styles/FormsTop.scss';
</style>