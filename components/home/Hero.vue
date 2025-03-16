<template>
  <section class="pt-20 px-4 bg-slate-900">
    <div class="max-w-6xl mx-auto w-full">
      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
        <!-- image with placeholder -->
        <div class="flex justify-center lg:justify-start lg:w-2/5">
          <div class="relative w-60 h-60 sm:w-72 sm:h-72">
            <div
              class="absolute w-full h-full border-2 border-blue-500 rounded-md -right-4 -bottom-4 rotate-3 bg-slate-800/50">
            </div>
            <div class="absolute inset-0 bg-slate-800 flex items-center justify-center rounded-md overflow-hidden">
              <Icon name="tabler:photo" class="w-12 h-12 text-blue-500/50" />
            </div>
            <div class="w-full h-full relative z-10 rounded-md overflow-hidden">
              <span class="sr-only">Foto de Kalos Lazo</span>
              <NuxtImg src="/img/profile.jpg" width="288" height="288" loading="eager" format="webp"
                class="w-full h-full object-cover" alt="" title="Kalos Lazo" />
            </div>
          </div>
        </div>

        <!-- right content-->
        <div class="lg:w-3/5 flex flex-col items-start">
          <!-- badges work areas -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            <div
              class="text-xs lg:text-sm px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500 flex items-center gap-1.5">
              <Icon name="tabler:brain" class="w-4 h-4" />
              <span>Machine Learning</span>
            </div>
            <div
              class="text-xs lg:text-sm px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500 flex items-center gap-1.5">
              <Icon name="tabler:database" class="w-4 h-4" />
              <span>Data Science</span>
            </div>
            <div
              class="text-xs lg:text-sm px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500 flex items-center gap-1.5">
              <Icon name="tabler:code" class="w-4 h-4" />
              <span>Full Stack</span>
            </div>
          </div>

          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-4 flex flex-row gap-2 flex-wrap">
            <span class="text-white">Tecnología que</span>
            <span class="text-blue-500 block lg:inline">resuelve</span>
          </h1>

          <div class="flex items-start gap-2 text-slate-400 mb-6">
            <Icon name="tabler:school" class="sm:w-5 sm:h-5 w-4 h-4 text-blue-500 sm:mt-1 flex-shrink-0" />
            <h2 class="text-sm sm:text-lg">Estudiante de Ciencia de la Computación @ UTEC</h2>
          </div>

          <p class="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Desarrollo soluciones de alto impacto mediante análisis de datos, machine
            learning y desarrollo full-stack. Mi objetivo es transformar organizaciones
            a través de la tecnología.
          </p>

          <!-- buttons -->
          <div class="flex flex-col sm:flex-row w-full gap-4">
            <NuxtLink to="/blog"
              class="w-full sm:w-auto px-6 py-2 bg-blue-500 text-slate-900 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-3">
              <Icon name="tabler:article" class="w-5 h-5" />
              <span>Leer Blog</span>
            </NuxtLink>

            <NuxtLink to="/pdf/cv.pdf" target="_blank"
              class="w-full sm:w-auto px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-500/10 transition-colors inline-flex items-center justify-center gap-3">
              <Icon name="tabler:download" class="w-5 h-5" />
              <span>Descargar CV</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>