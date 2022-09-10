<script setup>
import { ref } from "vue";
import { useFormShowStore } from "@/stores/form-show";
import { usePersonalInfoStore } from "@/stores/personal-info";
import { useBillingInfoStore } from "@/stores/billing-info";
import { useCardInfoStore } from "@/stores/card-info";

const formShowStore = useFormShowStore();
const personalInfoStore = usePersonalInfoStore();
const billingInfoStore = useBillingInfoStore();
const cardInfoStore = useCardInfoStore();

let showNavigation = ref(false);

const paymentInformation = {
  amount: personalInfoStore.amount,
  email: personalInfoStore.emailAddress,
  firstName: personalInfoStore.firstName,
  lastName: personalInfoStore.lastName,
};

console.log(paymentInformation);

setTimeout(() => {
  formShowStore.currentForm = "success-message";
}, 3000);
</script>

<template>
  <div id="processing-payment">
    <p class="form-title mb-3">processing payment</p>
    <div class="text-center">
      <i class="fa-solid fa-circle-notch fa-4x fa-spin"></i>
    </div>
  </div>
</template>

<style scoped></style>
