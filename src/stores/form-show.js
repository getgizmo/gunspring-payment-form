import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormShowStore = defineStore('formShow', () => {
  var currentForm = ref("personal-info")
  return { currentForm }
})
