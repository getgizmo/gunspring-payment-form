<script setup>
import { ref } from "vue";
import { useFormShowStore } from "@/stores/form-show";
</script>

<template>
  <div id="processing-payment">
    <p class="form-title mb-3">Error</p>
    <div class="navigation mt-4">
      <button @click="goToBillingInfo()" class="btn-gs me-3">show error</button>
      <button @click="submit()" class="btn-gs">show success</button>
    </div>
  </div>
</template>

<style scoped></style>
