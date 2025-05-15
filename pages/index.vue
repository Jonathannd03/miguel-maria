<template>
    <div class="min-h-screen flex flex-col bg-ivory">
      <!-- Header Minimalista -->
      <header class="bg-pearl/90 backdrop-blur-sm border-b border-soft-gray/30 sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
          <div class="text-lg font-cormorant pl-5 font-medium text-rosewood">Miguel & María</div>
         
        </nav>
      </header>
  
      <!-- Conteúdo Principal -->
      <main class="flex-grow">
        <!-- Convite Principal -->
        <section class="relative py-8 px-4">
          <!-- Flores decorativas -->
          <img 
            src="/public/images/rose.png" 
            class="absolute -top-10 -left-10 w-32 opacity-20 rotate-12 animate-float-slow"
            alt="Flor decorativa"
          >
          <img 
            src="/public/images/rose.png" 
            class="absolute -bottom-5 -right-5 w-28 opacity-20 -rotate-15 animate-float-slower"
            alt="Flor decorativa"
          >
  
          <!-- Cartão de Convite -->
          <div class="relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-soft-gray/50 mt-12 mb-8">
            <!-- Imagem floral no topo -->
            <img 
              src="/public/images/flower1.png" 
              class="w-full h-32 object-cover opacity-90"
              alt="Flores de casamento"
            >
            
            <!-- Texto do convite -->
            <div class="p-6 text-center">
              <h1 class="text-3xl font-cormorant font-bold text-rosewood mb-1">CASAMENTO</h1>
              <h2 class="text-xl font-cormorant text-rosewood/80 mb-6">TRADICIONAL</h2>
              
              <div class="my-8 relative">
                <img 
                  src="/public/images/ring-bild.png" 
                  class="w-16 h-16 mx-auto mb-4 animate-spin-slow opacity-70"
                  alt="Anel de casamento"
                >
                <div class="text-2xl font-cormorant font-medium text-rosewood">Miguel</div>
                <div class="text-gold text-xl my-2">&</div>
                <div class="text-2xl font-cormorant font-medium text-rosewood">María</div>
              </div>
              
              <div class="space-y-2 mb-6">
                <div class="text-lg font-cormorant text-rosewood/90">21.06.2025</div>
                <div class="text-lg font-cormorant text-rosewood/90">17 HORAS</div>
              </div>
              
              <div class="flex items-center justify-center space-x-2 text-rosewood/80 mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-sm font-cormorant">HAUPTSTR.382, 50169 KERPEN</span>
              </div>
            </div>
          </div>
  
          <!-- Countdown Timer -->
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-6 border border-soft-gray/50 text-center">
            <h3 class="font-cormorant text-rosewood/80 mb-4">Contagem Regressiva para o Grande Dia</h3>
            <div class="flex justify-center space-x-2 md:space-x-4">
              <div v-for="(unit, index) in timeUnits" :key="index" class="flex flex-col items-center">
                <div class="w-14 h-14 md:w-16 md:h-16 bg-pearl rounded-lg flex items-center justify-center shadow-inner">
                  <span class="font-cormorant font-bold text-rosewood text-2xl">{{ unit.value }}</span>
                </div>
                <span class="mt-2 font-cormorant text-xs md:text-sm text-rosewood/60">{{ unit.label }}</span>
              </div>
            </div>
          </div>
  
          <!-- Botão RSVP -->
         <!--  <button 
            class="block mx-auto px-8 py-2 bg-gold text-rosewood font-cormorant font-medium rounded-full shadow-lg hover:bg-rosewood hover:text-gold transition-colors mt-8"
            @click="showRSVP = true"
          >
            Confirmar Presença
          </button> -->
        </section>
  
        <!-- Galeria de Fotos -->
        <!-- <section class="py-8 px-4 bg-pearl/50">
          <h3 class="text-xl font-cormorant text-rosewood text-center mb-6">Nossa História</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl mx-auto">
            <img 
              v-for="(flower, index) in flowerGallery" 
              :key="index"
              :src="flower"
              class="w-full h-32 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
              @click="openGallery(index)"
              alt="Flores de casamento"
            >
          </div>
        </section> -->
      </main>
  
      <!-- Rodapé -->
      <footer class="bg-pearl/80 border-t border-soft-gray/30 py-6 px-4">
        <div class="container mx-auto text-center">
          <p class="text-xs text-rosewood/50 mb-2">© 2025 Miguel & María. Todos os direitos reservados.</p>
          <p class="text-xs text-rosewood/50">
            Desenvolvido por <a href="tel:+4917664669520" class="text-gold hover:underline">Zuacode +49 176 64669520</a>
          </p>
        </div>
      </footer>
  
      <!-- Menu Mobile -->
      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 bg-pearl/95 z-50 flex flex-col items-center justify-center space-y-6 transition-opacity"
        :class="{'opacity-0': !menuVisible, 'opacity-100': menuVisible}"
      >
        <button 
          class="absolute top-4 right-4 text-rosewood"
          @click="toggleMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name"
          :to="link.path"
          class="text-xl font-cormorant text-rosewood hover:text-gold transition-colors"
          @click.native="toggleMenu"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
  
      <!-- Modal RSVP -->
      <div 
        v-if="showRSVP"
        class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity"
        :class="{'opacity-0': !rsvpVisible, 'opacity-100': rsvpVisible}"
        @click.self="showRSVP = false"
      >
        <div 
          class="bg-white rounded-lg p-6 max-w-md w-full transform transition-all"
          :class="{'scale-95': !rsvpVisible, 'scale-100': rsvpVisible}"
        >
          <h3 class="text-xl font-cormorant text-rosewood mb-4">Confirmar Presença</h3>
          <form @submit.prevent="submitRSVP">
            <div class="space-y-4">
              <div>
                <label class="block font-cormorant text-rosewood/80 mb-1">Nome</label>
                <input type="text" class="w-full px-3 py-2 border border-soft-gray/50 rounded focus:outline-none focus:ring-1 focus:ring-gold">
              </div>
              <div>
                <label class="block font-cormorant text-rosewood/80 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-soft-gray/50 rounded focus:outline-none focus:ring-1 focus:ring-gold">
              </div>
              <div>
                <label class="block font-cormorant text-rosewood/80 mb-1">Número de Convidados</label>
                <select class="w-full px-3 py-2 border border-soft-gray/50 rounded focus:outline-none focus:ring-1 focus:ring-gold">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <button 
              type="submit"
              class="mt-6 w-full py-2 bg-rosewood text-white rounded hover:bg-gold hover:text-rosewood transition-colors"
            >
              Enviar Confirmação
            </button>
          </form>
        </div>
      </div>
  
      <!-- Galeria de Fotos Modal -->
      <div 
        v-if="showGallery"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        @click.self="showGallery = false"
      >
        <div class="relative w-full max-w-2xl">
          <img 
            :src="flowerGallery[currentImage]" 
            class="w-full max-h-[80vh] object-contain"
            alt="Flor de casamento"
          >
          <button 
            class="absolute top-0 right-0 m-4 text-white hover:text-gold"
            @click="showGallery = false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button 
            class="absolute left-0 top-1/2 -translate-y-1/2 ml-4 text-white hover:text-gold"
            @click="prevImage"
            v-if="flowerGallery.length > 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="absolute right-0 top-1/2 -translate-y-1/2 mr-4 text-white hover:text-gold"
            @click="nextImage"
            v-if="flowerGallery.length > 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick, watch } from 'vue';
  
  // Estado do menu
  const isMenuOpen = ref(false);
  const menuVisible = ref(false);
  
  // Estado do modal RSVP
  const showRSVP = ref(false);
  const rsvpVisible = ref(false);
  
  // Estado da galeria
  const showGallery = ref(false);
  const currentImage = ref(0);
  
  // Links de navegação
  const navLinks = [
    { name: 'Início', path: '#' },
    { name: 'Nossa História', path: '#' },
    { name: 'Galeria', path: '#' },
    { name: 'Localização', path: '#' }
  ];
  
  // Galeria de fotos
  const flowerGallery = [
    'https://i.imgur.com/JqYeZvL.jpg', // Rosas brancas
    'https://i.imgur.com/mX7TzDk.jpg', // Peônias rosas
    'https://i.imgur.com/qLQ9ZJd.jpg', // Flores do campo
    'https://i.imgur.com/pW7sJYq.png', // Anel de casamento
    'https://i.imgur.com/8nLf7qk.jpg', // Buquê branco
    'https://i.imgur.com/3jKZQ9Y.jpg', // Decoração floral
    'https://i.imgur.com/vQ5Rf9J.jpg', // Rosas vermelhas
    'https://i.imgur.com/9pDmZ4f.jpg'  // Flores em vaso
  ];
  
  // Countdown Timer
  const weddingDate = new Date('2025-06-21T19:00:00');
  const timeUnits = ref([
    { label: 'Dias', value: '00' },
    { label: 'Horas', value: '00' },
    { label: 'Minutos', value: '00' },
    { label: 'Segundos', value: '00' }
  ]);
  
  // Atualiza o countdown
  const updateCountdown = () => {
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      timeUnits.value = [
        { label: 'Dias', value: days.toString().padStart(2, '0') },
        { label: 'Horas', value: hours.toString().padStart(2, '0') },
        { label: 'Minutos', value: minutes.toString().padStart(2, '0') },
        { label: 'Segundos', value: seconds.toString().padStart(2, '0') }
      ];
    } else {
      timeUnits.value = [
        { label: 'Dias', value: '00' },
        { label: 'Horas', value: '00' },
        { label: 'Minutos', value: '00' },
        { label: 'Segundos', value: '00' }
      ];
    }
  };
  
  // Alternar menu mobile
  const toggleMenu = () => {
    if (isMenuOpen.value) {
      menuVisible.value = false;
      setTimeout(() => {
        isMenuOpen.value = false;
      }, 300);
    } else {
      isMenuOpen.value = true;
      nextTick(() => {
        menuVisible.value = true;
      });
    }
  };
  
  // Abrir galeria
  const openGallery = (index) => {
    currentImage.value = index;
    showGallery.value = true;
  };
  
  // Navegar galeria
  const prevImage = () => {
    currentImage.value = (currentImage.value - 1 + flowerGallery.length) % flowerGallery.length;
  };
  
  const nextImage = () => {
    currentImage.value = (currentImage.value + 1) % flowerGallery.length;
  };
  
  // Enviar RSVP
  const submitRSVP = () => {
    // Lógica para enviar o formulário
    showRSVP.value = false;
    alert('Obrigado por confirmar sua presença!');
  };
  
  // Observar mudanças no modal RSVP
  watch(showRSVP, (val) => {
    if (val) {
      nextTick(() => {
        rsvpVisible.value = true;
      });
    } else {
      rsvpVisible.value = false;
    }
  });
  
  // Iniciar countdown quando o componente for montado
  onMounted(() => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&display=swap');
  
  /* Cores */
  :root {
    --ivory: #FFFFF5;
    --pearl: #F8F4E9;
    --rosewood: #5E0B15;
    --gold: #D4AF37;
    --soft-gray: #E8E3D9;
  }
  
  .bg-ivory {
    background-color: var(--ivory);
  }
  .bg-pearl {
    background-color: var(--pearl);
  }
  .text-rosewood {
    color: var(--rosewood);
  }
  .bg-rosewood {
    background-color: var(--rosewood);
  }
  .text-gold {
    color: var(--gold);
  }
  .bg-gold {
    background-color: var(--gold);
  }
  .border-soft-gray {
    border-color: var(--soft-gray);
  }
  
  /* Fontes */
  .font-cormorant {
    font-family: 'Cormorant', serif;
  }
  
  /* Animações */
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
  }
  
  @keyframes float-slower {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-2deg); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-float-slower {
    animation: float-slower 10s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  
  /* Efeitos */
  .shadow-inner {
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
  
  /* Transições */
  .transition-all {
    transition: all 0.3s ease;
  }
  .transition-opacity {
    transition: opacity 0.3s ease;
  }
  .transition-transform {
    transition: transform 0.3s ease;
  }
  
  /* Responsividade */
  @media (min-width: 768px) {
    .container {
      max-width: 1200px;
    }
  }
  </style>