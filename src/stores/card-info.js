import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardInfoStore = defineStore('cardInfo', () => {
  const cardNumber = ref("");
  const expirationMonth = ref("Select");
  const expirationYear = ref("Select");
  const cvv = ref("");
  const cardNumberError = ref(false);
  const expirationMonthError = ref(false);
  const expirationYearError = ref(false);
  const cvvError = ref(false);
  const cardNumberErrorMessage = ref("A valid card number is required.");
  const expirationMonthErrorMessage = ref("Expiration month is required.");
  const expirationYearErrorMessage = ref("Expiration year is required.");
  const cvvErrorMessage = ref("A valid CVV is required.");
  const errorMessages = ref([]);

  return {
    cardNumber,
    expirationMonth,
    expirationYear,
    cvv,
    cardNumberError,
    expirationMonthError,
    expirationYearError,
    cvvError,
    cardNumberErrorMessage,
    expirationMonthErrorMessage,
    expirationYearErrorMessage,
    cvvErrorMessage,
    errorMessages
  }
})
