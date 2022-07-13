<script>
  import supabase from'$lib/data/db'
  import FormsTop from '$lib/components/FormsTop.svelte'
  import FormsQualifications from '$lib/components/FormsQualifications.svelte'
  
  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<div class="AllForms">
  <FormsTop />
  <FormsQualifications />
</div>
<button class="signOut" on:click={signOut}>Sign Out</button>

<style lang="scss">
  @import '../styles/index.scss';
</style>
