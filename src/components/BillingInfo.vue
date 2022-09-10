<script setup>
import { ref, watch } from "vue";
import { useBillingInfoStore } from "@/stores/billing-info";
import { useFormShowStore } from "@/stores/form-show";

const billingInfoStore = useBillingInfoStore();
const formShowStore = useFormShowStore();

const states = ref([
  { stateAbbreviation: "Select", state: "Select" },
  { stateAbbreviation: "AL", state: "Alabama" },
  { stateAbbreviation: "AK", state: "Alaska" },
  { stateAbbreviation: "AZ", state: "Arizona" },
  { stateAbbreviation: "AR", state: "Arkansas" },
  { stateAbbreviation: "CA", state: "California" },
  { stateAbbreviation: "CO", state: "Colorado" },
  { stateAbbreviation: "CT", state: "Connecticut" },
  { stateAbbreviation: "DE", state: "Delaware" },
  { stateAbbreviation: "DC", state: "District Of Columbia" },
  { stateAbbreviation: "FL", state: "Florida" },
  { stateAbbreviation: "GA", state: "Georgia" },
  { stateAbbreviation: "HI", state: "Hawaii" },
  { stateAbbreviation: "ID", state: "Idaho" },
  { stateAbbreviation: "IL", state: "Illinois" },
  { stateAbbreviation: "IN", state: "Indiana" },
  { stateAbbreviation: "IA", state: "Iowa" },
  { stateAbbreviation: "KS", state: "Kansas" },
  { stateAbbreviation: "KY", state: "Kentucky" },
  { stateAbbreviation: "LA", state: "Louisiana" },
  { stateAbbreviation: "ME", state: "Maine" },
  { stateAbbreviation: "MD", state: "Maryland" },
  { stateAbbreviation: "MA", state: "Massachusetts" },
  { stateAbbreviation: "MI", state: "Michigan" },
  { stateAbbreviation: "MN", state: "Minnesota" },
  { stateAbbreviation: "MS", state: "Mississippi" },
  { stateAbbreviation: "MO", state: "Missouri" },
  { stateAbbreviation: "MT", state: "Montana" },
  { stateAbbreviation: "NE", state: "Nebraska" },
  { stateAbbreviation: "NV", state: "Nevada" },
  { stateAbbreviation: "NH", state: "New Hampshire" },
  { stateAbbreviation: "NJ", state: "New Jersey" },
  { stateAbbreviation: "NM", state: "New Mexico" },
  { stateAbbreviation: "NY", state: "New York" },
  { stateAbbreviation: "NC", state: "North Carolina" },
  { stateAbbreviation: "ND", state: "North Dakota" },
  { stateAbbreviation: "OH", state: "Ohio" },
  { stateAbbreviation: "OK", state: "Oklahoma" },
  { stateAbbreviation: "OR", state: "Oregon" },
  { stateAbbreviation: "PA", state: "Pennsylvania" },
  { stateAbbreviation: "RI", state: "Rhode Island" },
  { stateAbbreviation: "SC", state: "South Carolina" },
  { stateAbbreviation: "SD", state: "South Dakota" },
  { stateAbbreviation: "TN", state: "Tennessee" },
  { stateAbbreviation: "TX", state: "Texas" },
  { stateAbbreviation: "UT", state: "Utah" },
  { stateAbbreviation: "VT", state: "Vermont" },
  { stateAbbreviation: "VA", state: "Virginia" },
  { stateAbbreviation: "WA", state: "Washington" },
  { stateAbbreviation: "WV", state: "West Virginia" },
  { stateAbbreviation: "WI", state: "Wisconsin" },
  { stateAbbreviation: "WY", state: "Wyoming" },
]);

function stateChanged() {
  if (states.value[0].state == "Select") {
    states.value.shift();
  }
}

function validateBillingInfo() {
  billingInfoStore.errorMessages.length = 0;
  if (billingInfoStore.address1 == "") {
    billingInfoStore.address1Error = true;
    billingInfoStore.errorMessages.push(billingInfoStore.address1ErrorMessage);
  } else {
    billingInfoStore.address1Error = false;
  }
  if (billingInfoStore.city == "") {
    billingInfoStore.cityError = true;
    billingInfoStore.errorMessages.push(billingInfoStore.cityErrorMessage);
  } else {
    billingInfoStore.cityError = false;
  }
  if (billingInfoStore.state == "Select") {
    billingInfoStore.stateError = true;
    billingInfoStore.errorMessages.push(billingInfoStore.stateErrorMessage);
  } else {
    billingInfoStore.stateError = false;
  }
  if (billingInfoStore.zipCode == "") {
    billingInfoStore.zipCodeError = true;
    billingInfoStore.errorMessages.push(billingInfoStore.zipCodeErrorMessage);
  } else {
    billingInfoStore.zipCodeError = false;
  }

  if (billingInfoStore.errorMessages.length > 0) {
    return false;
  } else {
    return true;
  }
}

function goToPersonalInfo() {
  formShowStore.currentForm = "personal-info";
}

function goToCardInfo() {
  if (validateBillingInfo()) {
    formShowStore.currentForm = "card-info";
  }
}
</script>

<template>
  <div id="billing-info">
    <p class="form-title mb-3">billing info</p>
    <div v-show="billingInfoStore.errorMessages.length > 0" class="errors mb-3">
      <p class="title mb-2">There was a problem.</p>
      <ul class="mb-0">
        <li v-for="e in billingInfoStore.errorMessages" :key="e">{{ e }}</li>
      </ul>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        inputmode="text"
        class="form-control"
        :class="billingInfoStore.address1Error ? 'is-invalid' : ''"
        id="address-1"
        placeholder="Street address or P.O. Box"
        v-model.trim="billingInfoStore.address1"
      />
      <label for="address-1">Street address or P.O. Box</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        inputmode="text"
        class="form-control"
        id="address-2"
        placeholder="Apt, suite, unit, building, floor, etc."
        v-model.trim="billingInfoStore.address2"
      />
      <label for="address-2">Apt, suite, unit, building, floor, etc.</label>
    </div>

    <div class="row gx-3">
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            inputmode="text"
            class="form-control"
            :class="billingInfoStore.cityError ? 'is-invalid' : ''"
            id="city"
            placeholder="City"
            v-model.trim="billingInfoStore.city"
          />
          <label for="city">City</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <select
            class="form-select"
            :class="billingInfoStore.stateError ? 'is-invalid' : ''"
            id="state"
            @change="stateChanged($event)"
            v-model.trim="billingInfoStore.state"
          >
            <option v-for="s in states" :key="s" :value="s.stateAbbreviation">
              {{ s.state }}
            </option>
          </select>
          <label for="state">State</label>
        </div>
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        inputmode="numeric"
        class="form-control"
        :class="billingInfoStore.zipCodeError ? 'is-invalid' : ''"
        id="zip-code"
        placeholder="Zip Code"
        v-model.trim="billingInfoStore.zipCode"
      />
      <label for="zip-code">Zip Code</label>
    </div>
    <div class="navigation">
      <button @click="goToPersonalInfo()" class="btn-gs btn-gs-secondary me-3">
        back
      </button>
      <button @click="goToCardInfo()" class="btn-gs btn-gs-primary">
        next
      </button>
    </div>
  </div>
</template>

<style scoped></style>
