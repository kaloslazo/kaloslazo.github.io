<template>
  <section class="pt-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-2">Proyectos Destacados</h2>
      <p class="text-gray-600 mb-10">Una selección de mis trabajos más recientes.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-if="projectDataStatus !== 'success'">
          <ProjectsProjectCardLoader v-for="i in 3" :key="i" />
        </template>

        <template v-else-if="projectsData.length > 0">
          <ProjectsProjectCard v-for="project in projectsData" :key="project.id" :project="project" />
        </template>
      </div>

      <div class="mt-6">
        <NuxtLink to="/proyectos"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 border border-gray-200 rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
          Ver todos los proyectos
          <Icon name="tabler:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: projectsData, status: projectDataStatus } = await useAsyncData(
  'projectsData',
  () => queryCollection('proyectos').limit(4).all(),
  { server: true }
);
</script>