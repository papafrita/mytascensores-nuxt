<template>
  <section id="auvo-portal" class="bg-gradient-to-br from-navy-dark via-navy to-ink text-white py-8 lg:py-12 relative overflow-hidden border-t border-white/5">
    <!-- Glowing background accents -->
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <!-- Two-column CSS Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 lg:gap-y-4 items-start">
        
        <!-- Column 1 (Top / Left): Section Header -->
        <div class="lg:col-span-7 order-1 self-start">
          <div class="flex items-center gap-3 mb-3">
            <a 
              href="https://www.auvo.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-block animate-pulse-slow"
            >
              <img 
                src="/images/Auvo_tecnologia.png" 
                alt="Auvo Logo"
                width="1200"
                height="1200"
                loading="lazy"
                class="h-24 md:h-28 w-auto object-contain transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer" 
              />
            </a>
            <span class="h-4 w-px bg-white/20"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
              Trazabilidad Digital Certificada
            </span>
          </div>
          
          <h2 class="text-3xl md:text-4.5xl font-extrabold font-display leading-tight tracking-tight">
            Reportes Técnicos 100% Digitales <br class="hidden sm:inline"/>
            con Transparencia en <span class="text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan to-secondary-light">Tiempo Real</span>
          </h2>
          
          <p class="mt-2.5 text-base md:text-lg text-slate-300 font-light leading-relaxed">
            Registramos digitalmente cada mantención en la plataforma AUVO. Accede al instante a reportes, fotografías en terreno y firmas electrónicas para una transparencia absoluta.
          </p>
        </div>

        <!-- Column 2 (Middle / Right): Simulated App Viewport -->
        <div class="lg:col-span-5 order-2 lg:row-span-2 flex justify-center lg:justify-end items-center self-center w-full">
          <div class="relative w-full max-w-[300px] aspect-[9/18.5] bg-slate-900 rounded-[50px] border-4 border-slate-700/80 shadow-2xl p-2.5 mx-auto lg:mr-0 select-none overflow-hidden ring-8 ring-slate-800/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan/5 hover:shadow-2xl">
            <!-- Camera Notch -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700/80 rounded-b-2xl z-40 flex items-center justify-center">
              <span class="h-2 w-2 rounded-full bg-black/60 mr-2"></span>
              <span class="h-1.5 w-8 rounded-full bg-black/40"></span>
            </div>

            <!-- Screen Border & Frame -->
            <div class="w-full h-full bg-slate-950 rounded-[40px] overflow-hidden relative border border-slate-800 flex flex-col justify-between">
              
              <!-- Simulated Top Bar (Status Bar) -->
              <div class="h-9 px-6 pt-3 flex items-center justify-between text-[11px] font-medium text-slate-400 z-10 shrink-0">
                <span>14:15</span>
                <div class="flex items-center gap-1.5">
                  <Navigation class="h-3 w-3 fill-cyan/20 stroke-cyan" />
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan"></span>
                  <div class="w-5 h-2.5 border border-slate-600 rounded-sm p-0.5 flex items-center">
                    <div class="w-full h-full bg-slate-400 rounded-2xs"></div>
                  </div>
                </div>
              </div>

              <!-- App Header -->
              <div class="px-4 py-2 border-b border-slate-800/60 flex items-center justify-between bg-slate-900/40 shrink-0">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-cyan"></span>
                  <span class="text-xs font-bold font-display uppercase tracking-wider text-slate-200">Portal MYT</span>
                </div>
                <span class="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">AUVO v2.0</span>
              </div>

              <!-- App Screen Main Content Area -->
              <div class="flex-1 relative overflow-hidden flex flex-col justify-center p-4">
                <Transition name="fade" mode="out-in">
                  
                  <!-- STEP 1 SCREEN: GPS Map -->
                  <div v-if="currentStep === 0" key="step1" class="h-full flex flex-col justify-between py-2 text-left">
                    <div class="flex-1 bg-slate-900/50 border border-slate-800/80 rounded-2xl relative overflow-hidden p-2 flex flex-col">
                      <!-- Grid background representing a map -->
                      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-35"></div>
                      
                      <!-- Route SVG -->
                      <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <!-- Path line -->
                        <path d="M 40,160 Q 120,130 140,80 T 220,50" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round" />
                        <!-- Active route glow -->
                        <path d="M 40,160 Q 120,130 140,80 T 220,50" fill="none" stroke="#2BC7D9" stroke-width="2.5" stroke-dasharray="6,6" stroke-linecap="round" class="animate-route" />
                        
                        <!-- Start Point -->
                        <circle cx="40" cy="160" r="5" fill="#1e293b" stroke="#ffffff" stroke-width="2" />
                        
                        <!-- End Point (Elevator Destination) -->
                        <circle cx="220" cy="50" r="7" fill="#72BF6F" stroke="#ffffff" stroke-width="2" class="animate-pulse" />
                        
                        <!-- Technician marker moving on path -->
                        <g class="animate-tech-marker">
                          <circle cx="140" cy="80" r="6" fill="#2BC7D9" />
                          <circle cx="140" cy="80" r="12" fill="none" stroke="#2BC7D9" stroke-width="1.5" class="animate-ping" />
                        </g>
                      </svg>

                      <!-- Map Badges -->
                      <div class="relative z-10 flex flex-col justify-between h-full pointer-events-none">
                        <div class="flex justify-between items-start">
                          <span class="text-[9px] bg-slate-950/90 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800 font-semibold shadow-md">
                            Destino: Edif. Providencia
                          </span>
                        </div>
                        <div class="flex justify-end">
                          <span class="text-[9px] bg-cyan/10 text-cyan px-2 py-0.5 rounded-md border border-cyan/25 font-bold shadow-md flex items-center gap-1">
                            <span class="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse"></span> GPS ACTIVO
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Details Area -->
                    <div class="mt-3 bg-slate-900/40 border border-slate-800/80 rounded-xl p-3 flex flex-col gap-1.5 shadow-lg">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-slate-400 font-medium">Asistencia Programada</span>
                        <span class="text-[10px] font-bold text-cyan">ID #OT-8492</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                          <User class="h-3.5 w-3.5 text-slate-300" />
                        </div>
                        <div>
                          <p class="text-xs font-semibold text-slate-200 leading-tight">Carlos Mendoza</p>
                          <p class="text-[9px] text-slate-400">Técnico Mantenedor Certificado</p>
                        </div>
                      </div>
                      <div class="h-px bg-slate-800/80 my-1"></div>
                      <div class="flex items-center justify-between text-[10px]">
                        <span class="text-slate-400 flex items-center gap-1"><Clock class="h-3 w-3" /> Llegada estimada</span>
                        <span class="font-bold text-white">14:25 hrs (En ruta)</span>
                      </div>
                    </div>
                  </div>

                  <!-- STEP 2 SCREEN: Checklist -->
                  <div v-else-if="currentStep === 1" key="step2" class="h-full flex flex-col justify-between py-2 text-left">
                    <div class="bg-slate-900/40 border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between shrink-0 mb-2">
                      <div>
                        <span class="text-[9px] text-slate-400 font-medium uppercase tracking-wider">Protocolo MINVU</span>
                        <h4 class="text-xs font-bold text-slate-200">Mantención Ascensor Cabina 1</h4>
                      </div>
                      <span class="text-[9px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
                        80% Completado
                      </span>
                    </div>

                    <!-- Checkbox list -->
                    <div class="flex-1 overflow-y-auto space-y-2 pr-0.5 custom-scrollbar">
                      <div 
                        v-for="(checkItem, cIdx) in checklistMock" 
                        :key="cIdx"
                        class="bg-slate-900/60 border rounded-xl p-2.5 flex items-center justify-between transition-all duration-300"
                        :class="[checkItem.checked ? 'border-tertiary/20 bg-tertiary/[0.02]' : 'border-slate-800']"
                      >
                        <div class="flex items-center gap-2.5 min-w-0">
                          <div 
                            class="h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-all"
                            :class="[
                              checkItem.checked 
                                ? 'bg-tertiary border-tertiary text-slate-950 scale-105' 
                                : 'border-slate-700 bg-slate-800/50'
                            ]"
                          >
                            <svg v-if="checkItem.checked" class="h-3 w-3 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-xs font-light text-slate-200 truncate pr-2">{{ checkItem.label }}</span>
                        </div>
                        <span 
                          class="text-[8px] font-bold uppercase tracking-wider shrink-0"
                          :class="[checkItem.checked ? 'text-tertiary' : 'text-slate-500']"
                        >
                          {{ checkItem.checked ? 'OK' : 'PENDIENTE' }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- STEP 3 SCREEN: Camera Evidence -->
                  <div v-else-if="currentStep === 2" key="step3" class="h-full flex flex-col justify-between py-2 text-left">
                    <div class="flex-1 bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col">
                      <!-- Simulated camera viewfinder overlay -->
                      <div class="absolute inset-4 border border-dashed border-white/20 pointer-events-none rounded-lg flex items-center justify-center">
                        <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                        <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
                      </div>

                      <!-- High-Tech Pulley SVG Drawing -->
                      <div class="flex-1 bg-slate-950 flex items-center justify-center p-4">
                        <svg class="w-32 h-32 text-cyan/75 animate-slow-spin" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
                          <circle cx="50" cy="50" r="40" stroke-dasharray="4,4" />
                          <circle cx="50" cy="50" r="30" />
                          <circle cx="50" cy="50" r="12" />
                          <!-- Spokes -->
                          <line x1="50" y1="10" x2="50" y2="90" />
                          <line x1="10" y1="50" x2="90" y2="50" />
                          <line x1="22" y1="22" x2="78" y2="78" />
                          <line x1="22" y1="78" x2="78" y2="22" />
                          <!-- Pulley Cable wrap indication -->
                          <path d="M 20 10 L 20 50 A 30 30 0 0 0 80 50 L 80 10" stroke="#72BF6F" stroke-width="2.5" stroke-dasharray="5,2" />
                        </svg>
                      </div>

                      <!-- Geotag & Info Overlays -->
                      <div class="absolute top-3 left-3 bg-slate-950/80 px-2 py-0.5 rounded text-[8px] text-slate-300 font-mono border border-slate-800 flex items-center gap-1 shadow-md">
                        <span class="h-1.5 w-1.5 rounded-full bg-cyan"></span>
                        GPS: -33.4561, -70.6482
                      </div>
                      
                      <div class="absolute bottom-3 left-3 bg-slate-950/85 px-2.5 py-1 rounded-lg text-[9px] text-slate-300 border border-slate-800 flex flex-col shadow-md">
                        <span class="font-bold text-slate-100">Polea de Tracción Auxiliar</span>
                        <span class="text-[8px] text-slate-400">Verificado: Desgaste dentro de norma</span>
                      </div>
                    </div>

                    <!-- Camera Controls Mockup -->
                    <div class="mt-2.5 bg-slate-900/30 border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between shrink-0">
                      <span class="text-[9px] text-slate-400">Punto 28: Poleas</span>
                      <div class="h-7 w-7 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                        <span class="h-4 w-4 rounded-full bg-red-600 animate-pulse"></span>
                      </div>
                      <span class="text-[9px] font-bold text-cyan uppercase tracking-wider">Foto Registrada</span>
                    </div>
                  </div>

                  <!-- STEP 4 SCREEN: Digital Signature -->
                  <div v-else-if="currentStep === 3" key="step4" class="h-full flex flex-col justify-between py-2 text-left">
                    <div class="bg-slate-900/40 border border-slate-800/80 rounded-xl p-2.5 shrink-0 mb-2">
                      <span class="text-[9px] text-slate-400 font-medium uppercase tracking-wider">Cierre de Trabajo</span>
                      <h4 class="text-xs font-bold text-slate-200">Firma de Conformidad</h4>
                    </div>

                    <!-- Signature Box -->
                    <div class="flex-1 bg-slate-900/60 border border-slate-800/80 rounded-2xl relative p-3 flex flex-col justify-between">
                      <span class="text-[9px] text-slate-500 font-mono absolute top-2 left-2 select-none">Área de Firma Digital</span>

                      <!-- Drawing signature simulation -->
                      <div class="flex-1 flex items-center justify-center">
                        <svg class="w-full h-24" viewBox="0 0 200 100" fill="none" stroke-linecap="round">
                          <path 
                            d="M 25 60 C 45 40, 60 70, 75 35 C 90 15, 105 85, 125 55 C 145 35, 155 70, 180 50" 
                            stroke="#2BC7D9" 
                            stroke-width="3" 
                            stroke-dasharray="600" 
                            stroke-dashoffset="600" 
                            class="animate-draw-sig"
                          />
                        </svg>
                      </div>

                      <div class="flex justify-between items-end shrink-0">
                        <div>
                          <p class="text-[10px] font-semibold text-slate-200">Loreto Valenzuela</p>
                          <p class="text-[8px] text-slate-400">Adm. Edificio Providencia</p>
                        </div>
                        <span class="text-[8px] bg-cyan/15 text-cyan px-2 py-0.5 rounded font-bold border border-cyan/20">
                          VERIFICADO
                        </span>
                      </div>
                    </div>

                    <button class="mt-2.5 w-full bg-cyan text-slate-950 text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-cyan/10 border border-cyan-light/20 cursor-default">
                      <ShieldCheck class="h-4 w-4" /> Registrar Orden
                    </button>
                  </div>

                  <!-- STEP 5 SCREEN: Branded PDF Report -->
                  <div v-else-if="currentStep === 4" key="step5" class="h-full flex flex-col justify-between py-2 text-left">
                    <!-- PDF Document Preview Page -->
                    <div class="flex-1 bg-white rounded-xl shadow-lg border border-slate-200 p-3 flex flex-col text-slate-800 text-[8px] relative overflow-hidden">
                      
                      <!-- Watermark -->
                      <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none rotate-12">
                        <span class="text-3xl font-extrabold tracking-widest text-slate-950">MYT</span>
                      </div>

                      <!-- Document Header -->
                      <div class="border-b border-slate-200 pb-1.5 mb-2 flex justify-between items-start">
                        <div>
                          <p class="font-extrabold text-[9px] text-navy font-display tracking-tight">MYT ASCENSORES</p>
                          <p class="text-[5px] text-slate-500 font-mono uppercase">Rol MINVU N°256 • Res. 1452</p>
                        </div>
                        <div class="text-right">
                          <p class="font-extrabold text-[7px] text-slate-700">ORDEN DE SERVICIO</p>
                          <p class="text-[6px] text-slate-500 font-mono">N° OS-2026-8492</p>
                        </div>
                      </div>

                      <!-- Document Details -->
                      <div class="grid grid-cols-2 gap-1.5 mb-2 font-mono text-[5px] text-slate-600">
                        <div>
                          <p><strong class="text-slate-800">CLIENTE:</strong> Edificio Providencia</p>
                          <p><strong class="text-slate-800">DIRECCIÓN:</strong> Providencia 1024</p>
                        </div>
                        <div class="text-right">
                          <p><strong class="text-slate-800">FECHA:</strong> 10 Jun 2026</p>
                          <p><strong class="text-slate-800">TÉCNICO:</strong> C. Mendoza</p>
                        </div>
                      </div>

                      <!-- Report Summary Table -->
                      <div class="border border-slate-200 rounded overflow-hidden mb-2">
                        <div class="bg-slate-100 text-slate-800 font-bold px-1.5 py-0.5 border-b border-slate-200 flex justify-between text-[6px]">
                          <span>Descripción del Trabajo</span>
                          <span>Estado</span>
                        </div>
                        <div class="px-1.5 py-0.5 border-b border-slate-100 flex justify-between">
                          <span>Inspección Mensual Preventiva (54 puntos)</span>
                          <span class="text-emerald-600 font-bold font-display">CONFORME</span>
                        </div>
                        <div class="px-1.5 py-0.5 border-b border-slate-100 flex justify-between">
                          <span>Lubricación y Limpieza de Foso</span>
                          <span class="text-emerald-600 font-bold">COMPLETADO</span>
                        </div>
                        <div class="px-1.5 py-0.5 flex justify-between">
                          <span>Pruebas de Seguridad y Frenos</span>
                          <span class="text-emerald-600 font-bold">COMPLETADO</span>
                        </div>
                      </div>

                      <!-- Miniature Evidence log -->
                      <div class="grid grid-cols-3 gap-1 mb-2">
                        <div class="aspect-square bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[5px] text-slate-400 font-mono">
                          Foto 1 [OK]
                        </div>
                        <div class="aspect-square bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[5px] text-slate-400 font-mono">
                          Foto 2 [OK]
                        </div>
                        <div class="aspect-square bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[5px] text-slate-400 font-mono">
                          Foto 3 [OK]
                        </div>
                      </div>

                      <!-- Signature area in report -->
                      <div class="mt-auto border-t border-slate-100 pt-1 flex justify-between items-end">
                        <div>
                          <div class="w-16 h-4 border-b border-slate-300 relative flex items-center justify-center">
                            <span class="text-[5px] text-cyan-dark absolute bottom-0 font-serif italic select-none">C. Mendoza</span>
                          </div>
                          <span class="text-[4px] text-slate-400 uppercase font-mono">Firma del Técnico</span>
                        </div>
                        <div class="text-right">
                          <div class="w-16 h-4 border-b border-slate-300 relative flex items-center justify-center">
                            <span class="text-[5px] text-slate-700 absolute bottom-0 font-serif italic select-none">L. Valenzuela</span>
                          </div>
                          <span class="text-[4px] text-slate-400 uppercase font-mono">Firma del Cliente</span>
                        </div>
                      </div>
                    </div>

                    <!-- PDF Action Button -->
                    <a 
                      href="#" 
                      @click.prevent 
                      class="mt-2.5 w-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold py-2 rounded-xl flex items-center justify-center gap-1.5 cursor-default"
                    >
                      <Download class="h-3.5 w-3.5" /> Descargar Reporte (PDF)
                    </a>
                  </div>

                </Transition>
              </div>

              <!-- Simulated Home Indicator (Phone Chin) -->
              <div class="h-5 flex items-center justify-center shrink-0">
                <span class="w-28 h-1 bg-white/20 rounded-full"></span>
              </div>

            </div>
          </div>
        </div>

        <!-- Column 1 (Bottom / Left): Interactive Steps Accordion -->
        <div class="lg:col-span-7 flex flex-col justify-start space-y-4 order-3 self-start">
          <div 
            v-for="(step, idx) in steps" 
            :key="idx"
            @click="setStep(idx)"
            class="group p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 text-left relative overflow-hidden select-none"
            :class="[
              currentStep === idx 
                ? 'bg-white/5 border-cyan/35 shadow-[0_8px_30px_rgba(43,199,217,0.06)]' 
                : 'bg-transparent border-white/5 hover:bg-white/2 hover:border-white/15'
            ]"
          >
            <!-- Progress Accent Line for Active Step -->
            <div 
              class="absolute left-0 top-0 bottom-0 w-1 bg-cyan transition-all duration-500"
              :class="[currentStep === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0']"
            ></div>

            <!-- Icon Frame -->
            <div 
              class="h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0"
              :class="[
                currentStep === idx 
                  ? 'bg-cyan/15 border-cyan/40 text-cyan scale-110 shadow-lg shadow-cyan/10' 
                  : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/20'
              ]"
            >
              <component :is="step.icon" class="h-5.5 w-5.5" />
            </div>

            <!-- Content Area -->
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 
                  class="font-display font-semibold text-base md:text-lg transition-colors duration-300"
                  :class="[currentStep === idx ? 'text-white' : 'text-slate-300 group-hover:text-white']"
                >
                  {{ step.title }}
                </h3>
                <span 
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 transition-colors duration-300"
                  :class="[
                    currentStep === idx 
                      ? 'bg-cyan/10 text-cyan border-cyan/30' 
                      : 'bg-white/5 text-slate-400 border-white/10'
                  ]"
                >
                  {{ step.badge }}
                </span>
              </div>
              
              <p 
                class="font-display text-xs md:text-sm font-medium mt-0.5 text-cyan-light/80 transition-colors"
                v-if="currentStep === idx"
              >
                {{ step.subtitle }}
              </p>

              <!-- Description with smooth CSS transition -->
              <div 
                class="transition-all duration-500 ease-in-out overflow-hidden"
                :class="[currentStep === idx ? 'max-h-28 mt-2 opacity-100' : 'max-h-0 opacity-0']"
              >
                <p class="text-sm text-slate-300 leading-relaxed font-light">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { 
  MapPin, 
  ClipboardCheck, 
  Camera, 
  PenTool, 
  FileText, 
  Clock, 
  User, 
  ShieldCheck, 
  Navigation,
  Download
} from 'lucide-vue-next'

const currentStep = ref(0)
const autoPlay = ref(true)
let autoPlayInterval: any = null

const steps = [
  {
    icon: MapPin,
    title: '1. Planificación y GPS',
    subtitle: 'Asignación inmediata de Orden de Servicio',
    desc: 'La visita mensual o de emergencia se programa y despacha digitalmente. El técnico recibe en su celular los datos del edificio y la ruta más rápida calculada por GPS en tiempo real.',
    badge: 'Logística Inteligente'
  },
  {
    icon: ClipboardCheck,
    title: '2. Inspección Técnica',
    subtitle: 'Checklist de 50+ puntos de control',
    desc: 'El técnico ejecuta un protocolo estandarizado y obligatorio en terreno. Cada punto mecánico, eléctrico y de seguridad se inspecciona y se marca digitalmente en la app para evitar omisiones.',
    badge: 'Control de Calidad'
  },
  {
    icon: Camera,
    title: '3. Evidencia Fotográfica',
    subtitle: 'Fotografías geolocalizadas de los trabajos',
    desc: 'Se registran fotografías en tiempo real del estado de los componentes y de cualquier reparación realizada. Cada foto incluye fecha, hora y coordenadas GPS para máxima veracidad.',
    badge: 'Trazabilidad Visual'
  },
  {
    icon: PenTool,
    title: '4. Firma Digital',
    subtitle: 'Validación en terreno por conserje o administrador',
    desc: 'Al finalizar los trabajos, el conserje o administrador firma directamente en la pantalla de la app del técnico, certificando la conformidad y recepción del servicio sin necesidad de papeles.',
    badge: 'Conformidad Legal'
  },
  {
    icon: FileText,
    title: '5. Reporte Automático',
    subtitle: 'Historial seguro en la nube y por correo',
    desc: 'La Orden de Servicio (OS) se genera de forma inmediata en formato PDF y se envía por email a la administración, quedando almacenada de forma segura para consulta histórica en el portal.',
    badge: 'Transparencia Total'
  }
]

const checklistMock = ref([
  { label: 'Inspección botonera y luces cabina', checked: true },
  { label: 'Lubricación de guías de contrapeso', checked: true },
  { label: 'Control de frenos y zapatas', checked: true },
  { label: 'Limpieza técnica de pozo / foso', checked: true },
  { label: 'Revisión cables de tracción', checked: false }
])

const setStep = (index: number) => {
  currentStep.value = index
  autoPlay.value = false // Stop autoplay once user interacts
  
  // Update checklist status immediately if selected manually
  if (index === 1) {
    checklistMock.value.forEach((item, idx) => {
      item.checked = idx < 4
    })
    setTimeout(() => {
      if (currentStep.value === 1) checklistMock.value[4].checked = true
    }, 800)
  }
}

const startAutoplay = () => {
  autoPlayInterval = setInterval(() => {
    if (autoPlay.value) {
      currentStep.value = (currentStep.value + 1) % steps.length
      
      // Simulate checklist ticks resetting/progressing
      if (currentStep.value === 1) {
        checklistMock.value.forEach((item, idx) => {
          item.checked = idx < 4
        })
        setTimeout(() => {
          if (currentStep.value === 1) checklistMock.value[4].checked = true
        }, 1500)
      }
    }
  }, 7500)
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
})
</script>

<style scoped>
/* Fade transition for step simulator screen */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.98);
}

/* Custom scrollbar for checklist simulator */
.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(43, 199, 217, 0.3);
  border-radius: 2px;
}

/* Animations */
.animate-slow-spin {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-route {
  stroke-dasharray: 8, 8;
  animation: route-dash 2s linear infinite;
}

@keyframes route-dash {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-tech-marker {
  animation: marker-bounce 1.5s ease-in-out infinite alternate;
}

@keyframes marker-bounce {
  from {
    transform: translate(-1px, -1px);
  }
  to {
    transform: translate(1px, 1px);
  }
}

.animate-draw-sig {
  animation: draw-signature 2s ease-in-out forwards;
}

@keyframes draw-signature {
  to {
    stroke-dashoffset: 0;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.9;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
  }
}
</style>
