<script>
  import { transformColumnNameToLabel } from '$lib/utils/transformColumnNameToLabel.js'
  import '../../styles/input.scss'
  export let label
  export let value
</script>

<input type="text"
  name={label}
  bind:value={value}
  placeholder={transformColumnNameToLabel(label)}
/>