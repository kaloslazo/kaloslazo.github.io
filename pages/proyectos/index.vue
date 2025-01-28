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
    <main class="pt-28 md:pt-24 px-4">
      <div class="max-w-6xl mx-auto">
        <header class="mb-6">
          <h1 class="text-4xl font-bold mb-4 text-gray-900">Proyectos</h1>
          <p class="text-lg text-gray-600">
            Sección destinada a proyectos...
          </p>
        </header>

        <TransitionGroup name="fade" tag="div" class="flex flex-wrap gap-2 mb-12">
          <button v-for="tag in uniqueTags" :key="tag" class="text-sm px-3 py-1.5 rounded-md transition-colors" :class="selectedTags.includes(tag)
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'" @click="toggleTag(tag)">
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
        </TransitionGroup>
      </div>
    </main>
  </Transition>
</template>