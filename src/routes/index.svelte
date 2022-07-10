<script>
  import supabase from'$lib/data/db'
  import FormsTop from '$lib/components/FormsTop.svelte'
  
  async function signOut() {
    const {error} = await supabase.auth.signOut()
  }
</script>

<FormsTop />
<button class="signOut" on:click={signOut}>Sign Out</button>

<style lang="scss">
  @import '../styles/index.scss';
</style>
