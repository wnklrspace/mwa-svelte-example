<script lang="ts">
  import type { CareService } from './types';

  let { services, onAddService }: {
    services: CareService[];
    onAddService: (service: CareService) => void;
  } = $props();
</script>

<section class="panel">
  <div class="panel-heading">
    <div>
      <p class="eyebrow">Recommended services</p>
      <h2>Next-step care options</h2>
    </div>
    <p class="muted">Choose a few low-friction follow-ups to demonstrate state updates.</p>
  </div>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Team</th>
          <th>Time</th>
          <th>Copay</th>
          <th aria-label="Action"></th>
        </tr>
      </thead>
      <tbody>
        {#each services as service (service.id)}
          <tr>
            <td>
              <div class="service-name">{service.name}</div>
              <div class="muted">{service.note}</div>
            </td>
            <td>{service.team}</td>
            <td>{service.duration}</td>
            <td>${service.copay}</td>
            <td>
              <button class="action-button" type="button" onclick={() => onAddService(service)}>
                Add to plan
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
