<script setup>
import { computed } from "vue";
import Base from "./components/Base.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import BillingInfo from "./components/BillingInfo.vue";
import CardInfo from "./components/CardInfo.vue";
import ProcessingPayment from "./components/ProcessingPayment.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import SuccessMessage from "./components/SuccessMessage.vue";
import { useFormShowStore } from "@/stores/form-show";

const formShowStore = useFormShowStore();
const activeComponent = computed(() => {
  if (formShowStore.currentForm == "personal-info") {
    return PersonalInfo;
  } else if (formShowStore.currentForm == "billing-info") {
    return BillingInfo;
  } else if (formShowStore.currentForm == "card-info") {
    return CardInfo;
  } else if (formShowStore.currentForm == "processing-payment") {
    return ProcessingPayment;
  } else if (formShowStore.currentForm == "error-message") {
    return ErrorMessage;
  } else if (formShowStore.currentForm == "success-message") {
    return SuccessMessage;
  } else {
    return PersonalInfo;
  }
});
</script>

<template>
  <Base>
    <component :is="activeComponent"></component>
  </Base>
</template>
