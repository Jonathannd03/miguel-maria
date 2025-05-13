<template>
    <div class="text-center">
      <div class="text-xl md:text-2xl font-serif text-rose-800 my-4 md:my-8">{{ date }}</div>
      <div class="text-xl md:text-2xl font-serif text-rose-800 mb-4 md:mb-8">{{ time }}</div>
      <div class="text-lg md:text-xl text-gray-700 mt-8 md:mt-12">
        {{ location }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    date: {
      type: String,
      default: '21.06.2025'
    },
    time: {
      type: String,
      default: '19UHR'
    },
    location: {
      type: String,
      default: 'HAUPTSTR.382, 50169 KERPEN'
    }
  });
  </script>