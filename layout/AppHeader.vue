<template>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-xl font-serif text-rose-800">Miguel & María</div>
        <div class="hidden md:flex space-x-6">
          <a href="#" class="text-rose-600 hover:text-rose-800">Home</a>
          <a href="#" class="text-rose-600 hover:text-rose-800">Details</a>
          <a href="#" class="text-rose-600 hover:text-rose-800">RSVP</a>
          <a href="#" class="text-rose-600 hover:text-rose-800">Gallery</a>
        </div>
        <button class="md:hidden text-rose-600" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-white py-2 px-4 shadow-md">
        <a href="#" class="block py-2 text-rose-600 hover:text-rose-800">Home</a>
        <a href="#" class="block py-2 text-rose-600 hover:text-rose-800">Details</a>
        <a href="#" class="block py-2 text-rose-600 hover:text-rose-800">RSVP</a>
        <a href="#" class="block py-2 text-rose-600 hover:text-rose-800">Gallery</a>
      </div>
    </header>
  </template>
  
  <script setup>
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>