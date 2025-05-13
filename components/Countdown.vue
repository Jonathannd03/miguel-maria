<template>
    <div class="min-h-screen flex flex-col bg-ivory">
      <!-- Header remains the same... -->
      
      <!-- Main Content -->
      <main class="flex-grow">
        <!-- Convite Principal -->
        <section class="relative py-8 px-4">
          <!-- Flores decorativas e cartão de convite permanecem iguais... -->
          
          <!-- Countdown Timer -->
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-6 border border-soft-gray/50 text-center">
            <h3 class="font-cormorant text-rosewood/80 mb-4">Contagem Regressiva para o Grande Dia</h3>
            <div class="flex justify-center space-x-2 md:space-x-4">
              <div v-for="(unit, index) in timeUnits" :key="index" class="flex flex-col items-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-pearl rounded-lg flex items-center justify-center shadow-inner">
                  <span class="font-cormorant font-bold text-rosewood text-2xl md:text-3xl">{{ unit.value }}</span>
                </div>
                <span class="mt-2 font-cormorant text-sm text-rosewood/60">{{ unit.label }}</span>
              </div>
            </div>
          </div>
  
          <!-- Botão RSVP permanece igual... -->
        </section>
  
        <!-- Resto do conteúdo permanece igual... -->
      </main>
  
      <!-- Rodapé permanece igual... -->
    </div>
  </template>
  
  <script setup>
  // Adicione isso às suas variáveis existentes
  const weddingDate = new Date('2025-06-21T19:00:00');
  const timeUnits = ref([
    { label: 'Dias', value: '00' },
    { label: 'Horas', value: '00' },
    { label: 'Minutos', value: '00' },
    { label: 'Segundos', value: '00' }
  ]);
  
  // Adicione esta função para atualizar o contador
  const updateCountdown = () => {
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60);
      const seconds = Math.floor((diff % (1000 * 60)) / 1000;
      
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
  
  // No onMounted, adicione:
  onMounted(() => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  </script>
  
  <style>
  /* Adicione estas regras CSS para o countdown */
  .shadow-inner {
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
  
  /* Mantenha o resto do estilo igual */
  </style>