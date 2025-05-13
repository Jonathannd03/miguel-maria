<template>
    <div class="flex justify-center items-center space-x-4 md:space-x-8 my-8 md:my-12">
      <div class="text-3xl md:text-4xl font-serif text-rose-900">{{ groom }}</div>
      <div class="text-2xl text-rose-600">&</div>
      <div class="text-3xl md:text-4xl font-serif text-rose-900">{{ bride }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    groom: {
      type: String,
      default: 'Miguel'
    },
    bride: {
      type: String,
      default: 'María'
    }
  });
  </script>