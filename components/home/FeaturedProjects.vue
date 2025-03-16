<template>
  <section class="pt-20 pb-20 px-4 bg-slate-900">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          Proyectos Destacados
        </h2>
        <p class="text-slate-300 max-w-2xl text-base">
          Explora mis trabajos más recientes e innovadores en ciencia de datos, inteligencia artificial y desarrollo
          web.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- skeleton -->
        <template v-if="projectDataStatus !== 'success'">
          <ProjectCardLoader v-for="i in 3" :key="i" />
        </template>

        <!-- show projects -->
        <template v-else-if="projectsData.length > 0">
          <ProjectsProjectCard v-for="project in projectsData" :key="project.id" :project="project" />
        </template>
      </div>

      <div class="mt-10 flex justify-start">
        <NuxtLink to="/blog"
          class="group inline-flex items-center justify-start font-medium text-slate-900 transition-colors duration-200 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
          <span class="flex items-center gap-2">
            Ver todas las entradas
            <Icon name="tabler:arrow-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCardLoader from '../projects/ProjectCardLoader.vue';

const { data: projectsData, status: projectDataStatus } = await useAsyncData(
  'projectsData',
  () => queryCollection('proyectos').limit(6).all(),
  { server: true }
);
</script>