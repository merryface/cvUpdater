import { writable } from 'svelte/store';

export const personalDetails = writable({
  name: "",
  street: "",
  postcode: "",
  city: "",
  tel: "",
  email: "",
});