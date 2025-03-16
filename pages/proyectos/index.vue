<script setup lang="ts">
const selectedTags = ref<string[]>([])
const { data: projectsData, status: projectDataStatus } = await useAsyncData(
  'projectsData',
  () => queryCollection('proyectos').all(),
  {
    server: true,
    immediate: true,
    watch: [],
  }
);

const uniqueTags = computed(() => {
  if (!projectsData.value) return [];
  const allTags = projectsData.value.flatMap((project) => project.tags || []);
  return [...new Set(allTags)].sort();
});

const filteredProjects = computed(() => {
  if (!projectsData.value) return [];
  if (selectedTags.value.length === 0) return projectsData.value;
  return projectsData.value.filter((project) =>
    selectedTags.value.some((tag) => project.tags?.includes(tag))
  );
});

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) selectedTags.value.push(tag);
  else selectedTags.value.splice(index, 1);
};

const projectsDescription = 'Portafolio de proyectos sobre desarrollo web y móvil, análisis de datos e inteligencia artificial. Soluciones tecnológicas de alto impacto por Kalos Lazo.'

useHead({
  title: 'Portafolio de Proyectos Tecnológicos | Kalos Lazo',
  meta: [
    { name: 'description', content: projectsDescription },
    { name: 'keywords', content: uniqueTags.value?.join(', ') || 'desarrollo web, machine learning, fullstack, react native' },
    { name: 'author', content: 'Kalos Lazo' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Portafolio de Proyectos Tecnológicos | Kalos Lazo' },
    { property: 'og:description', content: projectsDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaloslazo.dev/proyectos' },
    { property: 'og:image', content: 'https://kaloslazo.dev/projects-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Portafolio de Proyectos Tecnológicos | Kalos Lazo' },
    { name: 'twitter:description', content: projectsDescription },
    { name: 'twitter:image', content: 'https://kaloslazo.dev/projects-cover.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kaloslazo.dev/proyectos' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portafolio de Proyectos de Kalos Lazo',
        description: projectsDescription,
        url: 'https://kaloslazo.dev/proyectos',
        author: {
          '@type': 'Person',
          name: 'Kalos Lazo'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Kalos Lazo',
          logo: {
            '@type': 'ImageObject',
            url: 'https://kaloslazo.dev/logo.png'
          }
        }
      })
    }
  ]
})
</script>

<template>
  <Transition name="page" mode="out-in">
    <main class="mt-4 px-4">
      <div class="max-w-6xl mx-auto">
        <header class="mb-12">
          <h1 class="text-4xl font-bold mb-4 text-slate-100">Proyectos</h1>
          <p class="text-lg text-slate-300 max-w-2xl">
            Colección de proyectos en Ciencia de la Computación donde implemento algoritmos, análisis de datos e IA para
            resolver problemas y compartir conocimiento.
          </p>
        </header>

        <TransitionGroup name="fade" tag="div" class="flex flex-wrap gap-2 mb-12">
          <button v-for="tag in uniqueTags" :key="tag" class="text-sm px-3 py-1.5 rounded-md border transition-colors"
            :class="selectedTags.includes(tag)
              ? 'bg-blue-500 text-slate-100 border-blue-500'
              : 'bg-transparent text-slate-300 border-slate-700 hover:border-blue-500 hover:text-blue-500'"
            @click="toggleTag(tag)">
            {{ tag }}
          </button>
        </TransitionGroup>

        <TransitionGroup name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-if="projectDataStatus !== 'success'">
            <ProjectsProjectCardLoader v-for="i in 6" :key="i" />
          </template>
          <template v-else-if="filteredProjects.length > 0">
            <ProjectsProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
          </template>
          <template v-else>
            <div class="col-span-3 text-center py-16 border border-slate-800 rounded-lg">
              <Icon name="tabler:search-off" class="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 class="text-xl font-medium text-slate-300 mb-2">No se encontraron artículos</h3>
              <p class="text-slate-400 mb-6">No hay artículos que coincidan con los filtros seleccionados.</p>
              <button @click="selectedTags = []"
                class="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
                Limpiar filtros
              </button>
            </div>
          </template>
        </TransitionGroup>
      </div>
    </main>
  </Transition>
</template>