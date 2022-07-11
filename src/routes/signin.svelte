<script>
  import supabase from '$lib/data/db'

  let email, password

  async function signIn() {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password
    })
    if (error) alert(error.message)
  }
</script>

<form on:submit|preventDefault={signIn}>
  <label for="email">Email</label>
  <input type="email" id="email" bind:value={email}>
  <label for="password">Password</label>
  <input type="password" id="password"bind:value={password}>
  <button>Sign In</button>
</form>