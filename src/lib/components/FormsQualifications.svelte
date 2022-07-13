<script>
  import AddPilotQualification from "./forms/ato_details/AddPilotQualification.svelte";
  import PilotQualifications from "./forms/ato_details/PilotQualifications.svelte";

  const handleClick = () => {
    AddPilotQualification.onLoad()
  }
</script>

<AddPilotQualification />
<PilotQualifications />