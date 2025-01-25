<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: project } = await useAsyncData(`project`, () =>
  queryCollection('proyectos').path(`/proyectos/${slug}`).first()
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
  <Transition name="page" mode="out-in">
    <main class="mt-24 px-4">
      <template v-if="project">
        <TransitionGroup name="fade" tag="div">
          <div class="relative h-full max-h-96 mb-10 rounded-lg" key="image">
            <img v-if="project.image" :src="project.image" :alt="project.title"
              class="w-full h-full max-h-96 object-cover rounded-lg" />
          </div>

          <div class="max-w-3xl mx-auto px-4" key="content">

            <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ project.title }}</h1>

            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                class="text-sm px-3 py-1.5 rounded-md transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
                {{ tag }}
              </span>
            </div>

            <p class="text-xl text-gray-600 mb-10 leading-relaxed">
              {{ project.description }}
            </p>

            <article class="prose max-w-none">
              <ContentRenderer :value="project" />
            </article>
          </div>

          <div key="navigation">
            <NuxtLink to="/proyectos"
              class="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors group mt-8">
              <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a proyectos
            </NuxtLink>
          </div>
        </TransitionGroup>
      </template>
    </main>
  </Transition>
</template>