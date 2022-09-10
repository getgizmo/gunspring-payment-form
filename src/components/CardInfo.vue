<script setup>
import { ref, watch } from "vue";
import { useCardInfoStore } from "@/stores/card-info";
import { useFormShowStore } from "@/stores/form-show";

const cardInfoStore = useCardInfoStore();
const formShowStore = useFormShowStore();

let expirationMonthOptions = ref([]);
let expirationYearOptions = ref([]);

watch(
  () => cardInfoStore.cvv,
  (n) => updateCVV(n)
);

function expirationMonthChanged() {
  if (expirationMonthOptions.value[0] == "Select") {
    expirationMonthOptions.value.shift();
  }
}
function expirationYearChanged() {
  if (expirationYearOptions.value[0] == "Select") {
    expirationYearOptions.value.shift();
  }
}

function generateExpirationMonthOptions() {
  expirationMonthOptions = ref(
    new Array(12 - 1 + 1).fill().map((d, i) => i + 1)
  );
  expirationMonthOptions.value.unshift("Select");
}
function generateExpirationYearOptions() {
  const currentDate = new Date();
  let yearStart = currentDate.getFullYear();
  let yearEnd = yearStart + 20;
  expirationYearOptions = ref(
    new Array(yearEnd - yearStart + 1).fill().map((d, i) => i + yearStart)
  );
  expirationYearOptions.value.unshift("Select");
}

function updateCVV(n) {
  cardInfoStore.cvv = n.replace(/\D/g, "");
}

function validateCardInfo() {
  cardInfoStore.errorMessages.length = 0;
  if (cardInfoStore.cardNumber == "" || cardInfoStore.cardNumber.length != 19) {
    cardInfoStore.cardNumberError = true;
    cardInfoStore.errorMessages.push(cardInfoStore.cardNumberErrorMessage);
  } else {
    cardInfoStore.cardNumberError = false;
  }
  if (cardInfoStore.expirationMonth == "Select") {
    cardInfoStore.expirationMonthError = true;
    cardInfoStore.errorMessages.push(cardInfoStore.expirationMonthErrorMessage);
  } else {
    cardInfoStore.expirationMonthError = false;
  }
  if (cardInfoStore.expirationYear == "Select") {
    cardInfoStore.expirationYearError = true;
    cardInfoStore.errorMessages.push(cardInfoStore.expirationYearErrorMessage);
  } else {
    cardInfoStore.expirationYearError = false;
  }
  if (cardInfoStore.cvv == "" || cardInfoStore.cvv.length < 3) {
    cardInfoStore.cvvError = true;
    cardInfoStore.errorMessages.push(cardInfoStore.cvvErrorMessage);
  } else {
    cardInfoStore.cvvError = false;
  }

  if (cardInfoStore.errorMessages.length > 0) {
    return false;
  } else {
    return true;
  }
}

function goToBillingInfo() {
  formShowStore.currentForm = "billing-info";
  window.scrollTo(0, 0);
}

function submit() {
  if (validateCardInfo()) {
    formShowStore.currentForm = "processing-payment";
    window.scrollTo(0, 0);
  }
}

generateExpirationYearOptions();
generateExpirationMonthOptions();
</script>

<template>
  <div id="card-info">
    <p class="form-title mb-3">Card info</p>
    <div v-show="cardInfoStore.errorMessages.length > 0" class="errors mb-3">
      <p class="title mb-2">There was a problem.</p>
      <ul class="mb-0">
        <li v-for="e in cardInfoStore.errorMessages" :key="e">{{ e }}</li>
      </ul>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        inputmode="numeric"
        class="form-control"
        :class="cardInfoStore.cardNumberError ? 'is-invalid' : ''"
        id="card-number"
        placeholder="Card number"
        v-model.trim="cardInfoStore.cardNumber"
        maxlength="19"
        v-mask="'0000 0000 0000 0000'"
      />
      <label for="card-number">Card number</label>
    </div>

    <div class="row gx-3">
      <div class="col-6">
        <div class="form-floating mb-3">
          <select
            class="form-select"
            :class="cardInfoStore.expirationMonthError ? 'is-invalid' : ''"
            id="expiration-month"
            v-model.trim="cardInfoStore.expirationMonth"
            @change="expirationMonthChanged($event)"
          >
            <option v-for="m in expirationMonthOptions" :key="m" :value="m">
              {{ m }}
            </option>
          </select>
          <label for="expiration-month">Expiration month</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <select
            class="form-select"
            :class="cardInfoStore.expirationYearError ? 'is-invalid' : ''"
            id="expiration-year"
            v-model.trim="cardInfoStore.expirationYear"
            @change="expirationYearChanged($event)"
          >
            <option v-for="e in expirationYearOptions" :key="e" :value="e">
              {{ e }}
            </option>
          </select>
          <label for="expiration-year">Expiration year</label>
        </div>
      </div>
    </div>

    <div class="form-floating mb-3">
      <input
        type="text"
        maxlength="4"
        @keydown.space.prevent
        inputmode="numeric"
        class="form-control"
        :class="cardInfoStore.cvvError ? 'is-invalid' : ''"
        id="cvv"
        placeholder="CVV"
        v-model.trim="cardInfoStore.cvv"
      />
      <label for="cvv">CVV</label>
    </div>
    <div class="navigation">
      <button @click="goToBillingInfo()" class="btn-gs btn-gs-secondary me-3">
        back
      </button>
      <button @click="submit()" class="btn-gs btn-gs-primary">submit</button>
    </div>
  </div>
</template>

<style scoped></style>
