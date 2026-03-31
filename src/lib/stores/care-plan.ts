import { derived, writable } from 'svelte/store';
import {
  addServiceToPlan,
  getPlannedVisits,
  removeServiceFromPlan,
} from '../domain/care-plan';
import type { CarePlanItem, CareService } from '../types';

export function createCarePlanStore(initialItems: CarePlanItem[] = []) {
  const items = writable<CarePlanItem[]>(initialItems);
  const plannedVisits = derived(items, getPlannedVisits);

  function addService(service: CareService) {
    items.update((currentItems) => addServiceToPlan(currentItems, service));
  }

  function removeService(serviceId: number) {
    items.update((currentItems) =>
      removeServiceFromPlan(currentItems, serviceId)
    );
  }

  return {
    items,
    plannedVisits,
    addService,
    removeService,
  };
}
