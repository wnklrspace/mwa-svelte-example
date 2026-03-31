<script lang="ts">
  import AppHeader from './lib/components/AppHeader.svelte';
  import CareCatalog from './lib/CareCatalog.svelte';
  import CarePlan from './lib/CarePlan.svelte';
  import { appContent } from './lib/content/app-content';
  import { careServices } from './lib/data/care-services';
  import { createCarePlanStore } from './lib/stores/care-plan';

  const { items, plannedVisits, addService, removeService } = createCarePlanStore();
</script>

<main class="app-shell">
  <AppHeader
    {...appContent}
    selectedServicesCount={$items.length}
    plannedVisits={$plannedVisits}
  />

  <section class="content-grid">
    <CareCatalog services={careServices} onAddService={addService} />
    <CarePlan items={$items} onRemoveService={removeService} />
  </section>
</main>
