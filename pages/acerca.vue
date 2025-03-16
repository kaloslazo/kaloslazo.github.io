<template>
  <main class="pt-16 md:pt-24 px-4 bg-slate-900 text-slate-100 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Sección de encabezado -->
      <header class="mb-16">
        <h1 class="text-6xl font-bold mb-6 text-blue-500">
          Kalos Lazo
        </h1>
        
        <div class="flex flex-col md:flex-row gap-10 items-start">
          <!-- Info de contacto y redes -->
          <div class="w-full md:w-1/3 flex flex-col">
            <p class="text-xl text-slate-300 mb-6 flex items-center gap-2">
              <Icon name="tabler:map-pin" class="w-5 h-5 text-blue-500" />
              Lima, Perú
            </p>
            
            <div class="flex flex-col gap-3 mb-8">
              <a href="mailto:lzm.kalos@gmail.com" class="text-slate-300 hover:text-blue-500 transition-colors flex items-center gap-2">
                <Icon name="tabler:mail" class="w-5 h-5" />
                lzm.kalos@gmail.com
              </a>
              <a href="https://github.com/kaloslazo" target="_blank" class="text-slate-300 hover:text-blue-500 transition-colors flex items-center gap-2">
                <Icon name="tabler:brand-github" class="w-5 h-5" />
                kaloslazo
              </a>
              <a href="https://linkedin.com/in/kaloslazo" target="_blank" class="text-slate-300 hover:text-blue-500 transition-colors flex items-center gap-2">
                <Icon name="tabler:brand-linkedin" class="w-5 h-5" />
                kaloslazo
              </a>
            </div>
          </div>
          
          <!-- Perfil e info principal -->
          <div class="w-full md:w-2/3">
            <h2 class="text-3xl font-bold mb-4 text-slate-100">Perfil</h2>
            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
              Desarrollador Full Stack y Data Scientist con experiencia en sistemas de IA y machine learning. Especializado en arquitecturas RAG y LLMs, con historial comprobado de crear soluciones que impactan a cientos de usuarios.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-10">
              <span class="text-sm px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md">Full Stack</span>
              <span class="text-sm px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md">Data Science</span>
              <span class="text-sm px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md">ML</span>
              <span class="text-sm px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md">RAG</span>
              <span class="text-sm px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md">LLMs</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Sección de experiencia -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold mb-8 text-slate-100">Experiencia</h2>
        
        <div class="border border-slate-800 p-6 mb-8 rounded-md">
          <div class="flex flex-col md:flex-row md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-semibold text-slate-100">Data Scientist — Full Stack Developer</h3>
              <p class="text-lg text-blue-500">Geokad Territory Solutions</p>
            </div>
            <div class="text-slate-400 mt-2 md:mt-0 text-right">
              <p>Abril 2023 – Agosto 2024</p>
            </div>
          </div>
          <ul class="list-disc pl-5 text-slate-300 space-y-2">
            <li>Desarrollo de dashboards en PowerBI y automatizaciones en Python</li>
            <li>Optimización de procesos con SQL y Excel</li>
            <li>Implementación de sistema de recomendación basado en ML</li>
          </ul>
        </div>
      </section>
      
      <!-- Sección de proyectos -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold mb-8 text-slate-100">Proyectos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Proyecto 1 -->
          <div class="border border-slate-800 p-6 rounded-md">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-semibold text-slate-100">Empleable</h3>
              <a href="https://github.com/Empleable" target="_blank" class="text-blue-500">
                <Icon name="tabler:external-link" class="w-5 h-5" />
              </a>
            </div>
            <p class="text-lg text-blue-500 mb-4">Plataforma de Inclusión Laboral con IA</p>
            <ul class="list-disc pl-5 text-slate-300 space-y-2 mb-4">
              <li>Arquitectura multiagente con LlamaIndex y RAG</li>
              <li>Sistema de embeddings con Qdrant</li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">Python</span>
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">LangChain</span>
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">FastAPI</span>
            </div>
          </div>
          
          <!-- Proyecto 2 -->
          <div class="border border-slate-800 p-6 rounded-md">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-semibold text-slate-100">MindTEC</h3>
              <a href="https://github.com/MindTEC" target="_blank" class="text-blue-500">
                <Icon name="tabler:external-link" class="w-5 h-5" />
              </a>
            </div>
            <p class="text-lg text-blue-500 mb-4">Asistente Virtual con IA para UTEC</p>
            <ul class="list-disc pl-5 text-slate-300 space-y-2 mb-4">
              <li>Sistema RAG con LangChain y GPT-4</li>
              <li>Integración con WhatsApp vía Twilio</li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">Python</span>
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">GPT-4</span>
              <span class="text-xs px-2 py-1 border border-slate-700 text-slate-400 rounded-md">PostgreSQL</span>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/proyectos" class="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors inline-flex items-center gap-2 rounded-md">
            <span>Ver todos los proyectos</span>
            <Icon name="tabler:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </section>
      
      <!-- Sección de tecnologías -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold mb-8 text-slate-100">Tecnologías</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Análisis & IA -->
          <div class="border border-slate-800 p-6 rounded-md">
            <h3 class="text-2xl font-semibold text-slate-100 mb-4">
              Análisis & IA
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Python</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Pandas</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Scikit-learn</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">SQL</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">TensorFlow</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">PyTorch</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">LangChain</span>
            </div>
          </div>
          
          <!-- Herramientas -->
          <div class="border border-slate-800 p-6 rounded-md">
            <h3 class="text-2xl font-semibold text-slate-100 mb-4">
              Herramientas
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Power BI</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Git</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Docker</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">AWS</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">Linux</span>
              <span class="text-sm px-3 py-1 border border-slate-700 text-slate-300 rounded-md">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Educación y Reconocimientos -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-slate-800 p-6 rounded-md">
            <h3 class="text-2xl font-semibold text-slate-100 mb-4">Educación</h3>
            <p class="text-lg text-slate-100 mb-2">Universidad de Ingeniería y Tecnología</p>
            <p class="text-blue-500 mb-1">Bachiller en Ciencias de la Computación</p>
            <p class="text-slate-400">2022 – 2027</p>
          </div>
          
          <div class="border border-slate-800 p-6 rounded-md">
            <h3 class="text-2xl font-semibold text-slate-100 mb-4">Reconocimientos</h3>
            <ul class="text-slate-300 space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-blue-500">•</span>
                <span>Finalista Nacional, Datatón 2024 (MTPE)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-500">•</span>
                <span>Finalista, Disrupton 2024 - UTEC</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-500">•</span>
                <span>Voluntario, Emprendedores Amazónicos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <!-- CTA de contacto -->
      <section class="mb-16 border border-blue-500 p-8 text-center rounded-md">
        <h2 class="text-4xl font-bold mb-4 text-blue-500">¿Trabajamos juntos?</h2>
        <p class="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
          Disponible para nuevos proyectos y colaboraciones.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:lzm.kalos@gmail.com" class="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-md">
            Contactar
          </a>
          <a href="https://github.com/kaloslazo" target="_blank" class="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md">
            GitHub
          </a>
        </div>
      </section>
    </div>
  </main>
</template>