<template>
  <section class="pt-32 md:pt-36 px-4">
    <div class="max-w-6xl mx-auto w-full">
      <div class="flex flex-col justify-between md:flex-row md:items-start mx-auto gap-8 md:gap-16">
        <div class="mx-auto md:mx-0">
          <img 
            class="w-48 h-48 md:w-72 md:h-72 rounded-md object-cover bg-gray-50 transition-opacity duration-300 aspect-square"
            src="/img/profile.jpg" 
            alt="Kalos Lazo" 
            loading="eager" 
            fetchpriority="high" 
          />
        </div>

        <div class="flex-1 max-w-2xl">
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-700">
              Machine Learning
            </span>
            <span class="text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-700">
              Data Science
            </span>
            <span class="text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-700">
              Full Stack
            </span>
          </div>

          <div class="space-y-4 mb-8">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
              Tecnología que resuelve
            </h1>
            
            <h2 class="text-base text-gray-500 [animation-delay:200ms]">
              Estudiante de Ciencia de la Computación @UTEC
            </h2>

            <p class="text-gray-700 text-base md:text-lg leading-relaxed [animation-delay:400ms]">
              Desarrollo soluciones de alto impacto mediante análisis de datos, machine learning y desarrollo
              full-stack. Mi objetivo es transformar organizaciones a través de la tecnología.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 [animation-delay:600ms]">
            <NuxtLink 
              to="/blog"
              class="px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center w-full sm:w-auto"
            >
              Leer Blog
            </NuxtLink>
            
            <NuxtLink 
              to="/pdf/cv.pdf" 
              target="_blank"
              class="px-6 py-3 border border-gray-300 rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Descargar CV
              <Icon name="tabler:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>