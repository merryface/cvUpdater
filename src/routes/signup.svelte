<script>
  import supabase from '$lib/data/db'
  let email, password

  async function signUp() {
    const { user, session: sesh, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) alert(error.message)
  }
</script>

<!-- <form on:submit|preventDefault={signUp}>
  <label for="email">Email</label>
  <input type="email" id="email" bind:value={email}>
  <label for="password">Password</label>
  <input type="password" id="password"bind:value={password}>
  <button>Sign Up</button>
</form> -->
<a href="/signin">Already have an account</a>