import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonalInfoStore = defineStore('personalInfo', () => {
  const amount = ref(null);
  const emailAddress = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const amountError = ref(false);
  const emailAddressError = ref(false);
  const firstNameError = ref(false);
  const lastNameError = ref(false);
  const amountErrorMessage = ref("A valid amount is required.");
  const emailAddressErrorMessage = ref("A valid email address is required.");
  const firstNameErrorMessage = ref("First name is required.");
  const lastNameErrorMessage = ref("Last name is required.");
  const errorMessages = ref([]);

  return {
    amount,
    emailAddress,
    firstName,
    lastName,
    amountError,
    emailAddressError,
    firstNameError,
    lastNameError,
    amountErrorMessage,
    emailAddressErrorMessage,
    firstNameErrorMessage,
    lastNameErrorMessage,
    errorMessages
  }
})
