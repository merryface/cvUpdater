<script>
import Header from "../components/header.svelte";
import supabase from '$lib/db';
  import {session} from '$app/stores'
  import { browser } from '$app/env';
  import { goto } from '$app/navigation'; 

  if (browser) {
    $session = supabase.auth.session()
    setTimeout(() => $session ? goto('/') : goto('/signup'))
    supabase.auth.onAuthStateChange((event, sesh) => {
      $session = sesh
      setTimeout(() => $session ? goto('/') : goto('/signup'))
    })
  }


</script>

<Header />
<main>
  <slot />
</main>