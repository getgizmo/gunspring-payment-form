import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBillingInfoStore = defineStore('billingInfo', () => {
  const address1 = ref("");
  const address2 = ref("");
  const city = ref("");
  const state = ref("Select");
  const zipCode = ref("");
  const address1Error = ref(false);
  const cityError = ref(false);
  const stateError = ref(false);
  const zipCodeError = ref(false);
  const address1ErrorMessage = ref("Address is required.");
  const cityErrorMessage = ref("City is required.");
  const stateErrorMessage = ref("State is required.");
  const zipCodeErrorMessage = ref("Zip Code is required.");
  const errorMessages = ref([]);

  return {
    address1,
    address2,
    city,
    state,
    zipCode,
    address1Error,
    cityError,
    stateError,
    zipCodeError,
    address1ErrorMessage,
    cityErrorMessage,
    stateErrorMessage,
    zipCodeErrorMessage,
    errorMessages
  }
})
