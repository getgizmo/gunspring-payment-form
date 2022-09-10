<script setup>
import { watch } from "vue";
import { useFormShowStore } from "@/stores/form-show";
import { usePersonalInfoStore } from "@/stores/personal-info";
import * as EmailValidator from "email-validator";
import CurrencyInput from "./CurrencyInput.vue";

const formShowStore = useFormShowStore();
const personalInfoStore = usePersonalInfoStore();

// watch(
//   () => personalInfoStore.amount,
//   (n) => updateAmount(n)
// );

// function updateAmount(n) {
//   personalInfoStore.amount = n.replace(/\D/g, "");
// }

function validatePersonalInfo() {
  personalInfoStore.errorMessages.length = 0;
  if (personalInfoStore.amount == null || personalInfoStore.amount == 0) {
    personalInfoStore.amountError = true;
    personalInfoStore.errorMessages.push(personalInfoStore.amountErrorMessage);
  } else {
    personalInfoStore.amountError = false;
  }
  if (!EmailValidator.validate(personalInfoStore.emailAddress)) {
    personalInfoStore.emailAddressError = true;
    personalInfoStore.errorMessages.push(
      personalInfoStore.emailAddressErrorMessage
    );
  } else {
    personalInfoStore.emailAddressError = false;
  }
  if (personalInfoStore.firstName == "") {
    personalInfoStore.firstNameError = true;
    personalInfoStore.errorMessages.push(
      personalInfoStore.firstNameErrorMessage
    );
  } else {
    personalInfoStore.firstNameError = false;
  }
  if (personalInfoStore.lastName == "") {
    personalInfoStore.lastNameError = true;
    personalInfoStore.errorMessages.push(
      personalInfoStore.lastNameErrorMessage
    );
  } else {
    personalInfoStore.lastNameError = false;
  }

  if (personalInfoStore.errorMessages.length > 0) {
    return false;
  } else {
    return true;
  }
}
function goToBillinInfo() {
  if (validatePersonalInfo()) {
    formShowStore.currentForm = "billing-info";
  }
}
</script>

<template>
  <div id="personal-info">
    <p class="form-title mb-3">personal info</p>
    <div
      v-show="personalInfoStore.errorMessages.length > 0"
      class="errors mb-3"
    >
      <p class="title mb-2">There was a problem.</p>
      <ul class="mb-0">
        <li v-for="e in personalInfoStore.errorMessages" :key="e">{{ e }}</li>
      </ul>
    </div>
    <div class="form-floating mb-3">
      <CurrencyInput
        type="text"
        @keydown.space.prevent
        inputmode="numeric"
        class="form-control"
        :class="personalInfoStore.amountError ? 'is-invalid' : ''"
        id="amount"
        placeholder="Amount"
        v-model="personalInfoStore.amount"
        :options="{ currency: 'USD' }"
      />

      <label for="amount">Amount</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        inputmode="email"
        class="form-control"
        :class="personalInfoStore.emailAddressError ? 'is-invalid' : ''"
        id="email-address"
        placeholder="Email address"
        v-model.trim="personalInfoStore.emailAddress"
      />
      <label for="email-address">Email address</label>
    </div>
    <div class="row gx-3">
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            inputmode="text"
            class="form-control"
            :class="personalInfoStore.firstNameError ? 'is-invalid' : ''"
            id="first-name"
            placeholder="First name"
            v-model.trim="personalInfoStore.firstName"
          />
          <label for="first-user">First name</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            inputmode="text"
            class="form-control"
            :class="personalInfoStore.lastNameError ? 'is-invalid' : ''"
            id="last-name"
            placeholder="Last name"
            v-model.trim="personalInfoStore.lastName"
          />
          <label for="last-name">Last name</label>
        </div>
      </div>
    </div>
    <div class="navigation">
      <button @click="goToBillinInfo()" class="btn-gs btn-gs-primary">
        next
      </button>
    </div>
  </div>
</template>

<style scoped></style>
