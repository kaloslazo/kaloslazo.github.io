<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: project } = await useAsyncData(
  `project-${slug}`,
  () => queryCollection('proyectos').path(`/proyectos/${slug}`).first(),
  {
    server: true,
    immediate: true,
    watch: [route.params.slug],
  }
);

useHead(() => ({
  title: computed(() => `${project.value?.title || 'Proyecto'} - Kalos Lazo`),
  meta: [
    { name: 'description', content: project.value?.description },
    { name: 'keywords', content: project.value?.tags?.join(', ') },
    { property: 'og:title', content: project.value?.title },
    { property: 'og:description', content: project.value?.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://kaloslazo.dev/proyectos/${slug}` },
    { property: 'og:image', content: project.value?.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: project.value?.title },
    { name: 'twitter:description', content: project.value?.description },
    { name: 'twitter:image', content: project.value?.image },
    { property: 'article:published_time', content: project.value?.date },
    { property: 'article:modified_time', content: project.value?.date },
    { property: 'article:author', content: 'Kalos Lazo' },
    { property: 'article:section', content: 'Proyectos' },
    { property: 'article:tag', content: project.value?.tags?.join(', ') }
  ],
  link: [
    { rel: 'canonical', href: `https://kaloslazo.dev/proyectos/${slug}` }
  ]
}))
</script>

<template>
  <main :key="route.fullPath" class="mt-4 px-4 bg-slate-900 text-slate-100">
    <template v-if="project">
      <div class="max-w-3xl mx-auto">
        <!-- Navegación superior -->
        <div class="flex justify-between items-center mb-8">
          <NuxtLink to="/proyectos"
            class="inline-flex items-center text-sm text-slate-400 hover:text-blue-500 transition-colors group">
            <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Proyectos
          </NuxtLink>
          <span v-if="project.date" class="text-sm text-slate-400">{{ project.date }}</span>
        </div>

        <!-- Título -->
        <h1 class="text-4xl font-bold text-slate-100 mb-6">{{ project.title }}</h1>

        <!-- Etiquetas -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tag in project.tags" :key="tag"
            class="text-xs px-2 py-1 rounded-md border border-blue-500 text-blue-500">
            {{ tag }}
          </span>
        </div>

        <!-- Imagen -->
        <div class="relative w-full mb-12" v-if="project.image">
          <img :src="project.image" :alt="project.title"
            class="w-full aspect-[21/9] object-cover rounded-lg" loading="lazy" />
        </div>

        <!-- Descripción -->
        <p v-if="project.description" class="text-xl text-slate-300 mb-12 leading-relaxed border-l-2 border-blue-500 pl-4">
          {{ project.description }}
        </p>

        <!-- Contenido -->
        <article class="prose prose-invert prose-blue max-w-none mb-16">
          <ContentRenderer :value="project" />
        </article>
      </div>

      <!-- Navegación inferior -->
      <div class=" pt-8 pb-16 mt-8">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
          <NuxtLink to="/proyectos"
            class="inline-flex items-center text-sm text-slate-400 hover:text-blue-500 transition-colors group">
            <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </NuxtLink>
          
          <div class="flex items-center gap-4">
            <button class="text-slate-400 hover:text-blue-500 transition-colors">
              <Icon name="tabler:share" class="w-5 h-5" />
            </button>
            <button class="text-slate-400 hover:text-blue-500 transition-colors">
              <Icon name="tabler:bookmark" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </template>

    <!-- Estado de no encontrado -->
    <div v-else class="h-full min-h-98 py-20 flex items-center justify-center px-4">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-2">Proyecto no encontrado</h2>
        <p class="text-slate-400 mb-8">
          El proyecto que buscas no existe o ha sido movido.
        </p>
        <div class="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <NuxtLink to="/proyectos"
            class="px-6 py-3 border border-blue-500 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors text-center w-full md:w-auto">
            Ver proyectos
          </NuxtLink>
          <NuxtLink to="/"
            class="px-6 py-3 border border-slate-700 rounded-md font-medium hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
            Ir al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>