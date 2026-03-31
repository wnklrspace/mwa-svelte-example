<script lang="ts">
  let {
    frameworkLabel,
    title,
    description,
    patientName,
    selectedServicesCount,
    plannedVisits,
  }: {
    frameworkLabel: string;
    title: string;
    description: string;
    patientName: string;
    selectedServicesCount: number;
    plannedVisits: number;
  } = $props();
</script>

<section class="hero">
  <div>
    <p class="eyebrow">{frameworkLabel}</p>
    <h1>{title}</h1>
    <p class="hero-copy">{description}</p>
  </div>

  <div class="stats">
    <div class="stat">
      <span>Patient</span>
      <strong>{patientName}</strong>
    </div>
    <div class="stat">
      <span>Selected services</span>
      <strong>{selectedServicesCount}</strong>
    </div>
    <div class="stat">
      <span>Planned visits</span>
      <strong>{plannedVisits}</strong>
    </div>
  </div>
</section>
