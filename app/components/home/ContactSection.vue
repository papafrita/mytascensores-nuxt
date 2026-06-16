<template>
  <section id="contacto" class="bg-surface py-14 lg:py-16 relative overflow-hidden">
    <!-- Subtle Glow Backgrounds -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: Title & Direct Contact -->
        <div class="lg:col-span-5">
          <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan-dark text-sm tracking-wider uppercase mb-3">
            <Mail class="h-4 w-4" /> Formulario de contacto
          </span>
          <h2 class="text-4xl font-extrabold font-display leading-[1.1] text-navy">
            Cotiza con <span class="text-cyan">nosotros</span>
          </h2>
          <p class="mt-5 text-base text-slate-600 leading-relaxed">
            Escríbenos para solicitar un presupuesto de mantención, programar una visita técnica de evaluación de tus ascensores o normalizar tu instalación ante observaciones del MINVU.
          </p>

          <div class="mt-10 rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-premium">
            <h3 class="flex items-center gap-4 text-xl md:text-2xl font-extrabold font-display text-navy">
              <CircleHelp class="h-7 w-7 text-cyan" /> ¿Prefieres contactarnos directo?
            </h3>
            <p class="mt-4 text-sm text-slate-500 leading-relaxed">
              Puedes comunicarte con nuestro equipo de ventas a través de cualquiera de nuestros números de contacto.
            </p>
            
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <a 
                href="tel:+56967579214" 
                class="rounded-xl border border-slate-100 hover:border-cyan hover:bg-slate-50 p-4 font-semibold transition hover:-translate-y-0.5 flex flex-col gap-2 shadow-sm text-sm text-navy group"
              >
                <Headphones class="h-8 w-8 text-cyan group-hover:scale-110 transition-transform duration-200" />
                <span>Ventas</span>
                <span class="mt-1 block text-sm sm:text-base font-bold whitespace-nowrap tracking-tight text-navy">
                  +56 9 6757 9214
                </span>
              </a>
              
              <a 
                href="tel:+56323536728" 
                class="rounded-xl border border-slate-100 hover:border-cyan hover:bg-slate-50 p-4 font-semibold transition hover:-translate-y-0.5 flex flex-col gap-2 shadow-sm text-sm text-navy group"
              >
                <Headphones class="h-8 w-8 text-cyan group-hover:scale-110 transition-transform duration-200" />
                <span>Ventas</span>
                <span class="mt-1 block text-sm sm:text-base font-bold whitespace-nowrap tracking-tight text-navy">
                  +56 32 353 6728
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium text-ink relative">
            
            <!-- Success Message -->
            <Transition name="fade">
              <div 
                v-if="showSuccess" 
                class="mb-6 p-4 rounded-xl bg-emerald-500 text-white flex items-start gap-3 shadow-md border border-emerald-600"
              >
                <CheckCircle class="h-6 w-6 flex-shrink-0 text-white mt-0.5" />
                <div>
                  <h4 class="font-bold text-sm">¡Mensaje enviado con éxito!</h4>
                  <p class="text-xs text-white/95 mt-1">
                    Nos pondremos en contacto contigo en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>
              </div>
            </Transition>

            <!-- Error Message -->
            <Transition name="fade">
              <div 
                v-if="showError" 
                class="mb-6 p-4 rounded-xl bg-rose-500 text-white flex items-start gap-3 shadow-md border border-rose-600"
              >
                <AlertCircle class="h-6 w-6 flex-shrink-0 text-white mt-0.5" />
                <div>
                  <h4 class="font-bold text-sm">Error al enviar el mensaje</h4>
                  <p class="text-xs text-white/95 mt-1">
                    {{ errorMsg }}
                  </p>
                </div>
              </div>
            </Transition>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label for="formName" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  id="formName" 
                  v-model="form.name"
                  required
                  placeholder="Ej. Juan Pérez"
                  class="w-full bg-surface border border-slate-100 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-cyan focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label for="formEmail" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  id="formEmail" 
                  v-model="form.email"
                  required
                  placeholder="juan@empresa.com"
                  class="w-full bg-surface border border-slate-100 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-cyan focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label for="formSubject" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Asunto / Servicio de interés
                </label>
                <select 
                  id="formSubject" 
                  v-model="form.subject"
                  class="w-full bg-surface border border-slate-100 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-cyan focus:bg-white transition-colors appearance-none"
                  style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>'); background-position: right 1rem center; background-repeat: no-repeat; background-size: 1.2em;"
                >
                  <option value="Mantenimiento Correctivo">Mantenimiento Correctivo (Urgente)</option>
                  <option value="Reparación y Normalización">Reparación y Normalización (MINVU)</option>
                  <option value="Importación e Instalación">Importación e Instalación</option>
                  <option value="Otro">Otro requerimiento</option>
                </select>
              </div>

              <div>
                <label for="formMessage" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Mensaje o detalle del requerimiento
                </label>
                <textarea 
                  id="formMessage" 
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Cuéntanos más detalles del ascensor, edificio o servicio que necesitas..."
                  class="w-full bg-surface border border-slate-100 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-cyan focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isLoading"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple hover:bg-purple-dark text-white font-bold py-4 transition-all duration-300 shadow-md shadow-purple/15 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isLoading" class="flex items-center gap-2">
                  <span>Enviando...</span>
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span v-else class="flex items-center gap-2">
                  Enviar cotización técnica
                  <ArrowUpRight class="h-4.5 w-4.5" />
                </span>
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, CircleHelp, Headphones, ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-vue-next'

const showSuccess = ref(false)
const showError = ref(false)
const isLoading = ref(false)
const errorMsg = ref('')

const form = ref({
  name: '',
  email: '',
  subject: 'Mantenimiento Correctivo',
  message: ''
})

const handleSubmit = async () => {
  isLoading.value = true
  showSuccess.value = false
  showError.value = false
  errorMsg.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    showSuccess.value = true
    
    // Clear inputs after submission
    form.value = {
      name: '',
      email: '',
      subject: 'Mantenimiento Correctivo',
      message: ''
    }

    // Hide success notification after 8s
    setTimeout(() => {
      showSuccess.value = false
    }, 8000)
  } catch (err: any) {
    console.error('Submission error:', err)
    showError.value = true
    
    // If the error has a statusMessage, use that, otherwise default to a generic message
    const responseData = err.data || {}
    errorMsg.value = responseData.statusMessage || err.statusMessage || err.message || 'Error al enviar el mensaje. Intente de nuevo.'
    
    // Hide error notification after 8s
    setTimeout(() => {
      showError.value = false
    }, 8000)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
