<script>
  import AddPilotQualification from "./ato_details/AddPilotQualification.svelte";
  import PilotQualifications from "./ato_details/PilotQualifications.svelte";

  const handleClick = () => {
    AddPilotQualification.onLoad()
  }
</script>

<AddPilotQualification />
<PilotQualifications />