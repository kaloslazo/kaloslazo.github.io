<script setup lang="ts">
const selectedTags = ref<string[]>([])
const { data: postsData, status: projectDataStatus } = await useAsyncData(
  'postsData',
  () => queryCollection('posts').all(),
  {
    server: true,
    immediate: true,
    watch: [],
  }
);

const uniqueTags = computed(() => {
  if (!postsData.value) return [];
  const allTags = postsData.value.flatMap((project) => project.tags || []);
  return [...new Set(allTags)].sort();
});

const filteredPosts = computed(() => {
  if (!postsData.value) return [];
  if (selectedTags.value.length === 0) return postsData.value;
  return postsData.value.filter((project) =>
    selectedTags.value.some((tag) => project.tags?.includes(tag))
  );
});

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) selectedTags.value.push(tag);
  else selectedTags.value.splice(index, 1);
};

const blogDescription = 'Blog sobre Ciencia de la Computación, desarrollo web, machine learning y análisis de datos. Notas y experiencias sobre de la tecnología por Kalos Lazo.'

useHead({
  title: 'Blog de Tecnología y Desarrollo | Kalos Lazo',
  meta: [
    { name: 'description', content: blogDescription },
    { name: 'keywords', content: uniqueTags.value?.join(', ') || 'desarrollo web, machine learning, análisis de datos, programación' },
    { name: 'author', content: 'Kalos Lazo' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Blog de Tecnología y Desarrollo | Kalos Lazo' },
    { property: 'og:description', content: blogDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaloslazo.dev/blog' },
    { property: 'og:image', content: 'https://kaloslazo.dev/blog-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog de Tecnología y Desarrollo | Kalos Lazo' },
    { name: 'twitter:description', content: blogDescription },
    { name: 'twitter:image', content: 'https://kaloslazo.dev/blog-cover.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kaloslazo.dev/blog' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog de Kalos Lazo',
        description: blogDescription,
        url: 'https://kaloslazo.dev/blog',
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
  <main class="pt-28 md:pt-24 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="mb-6">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">Blog</h1>
        <p class="text-lg text-gray-600">
          Espacio donde comparto notas, experiencias y conocimiento que voy adquiriendo en el campo de la Ciencia de la Computación.
        </p>
      </header>

      <div class="flex flex-wrap gap-2 mb-12">
        <button v-for="tag in uniqueTags" :key="tag" class="text-sm px-3 py-1.5 rounded-md transition-colors" :class="selectedTags.includes(tag)
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'" @click="toggleTag(tag)">
          {{ tag }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-if="projectDataStatus !== 'success'">
          <ProjectsProjectCardLoader v-for="i in 6" :key="i" />
        </template>

        <template v-else-if="filteredPosts.length > 0">
          <BlogCard v-for="post in filteredPosts" :key="post.id" :post="post" />
        </template>

        <template v-else>
          <div class="col-span-3 text-center py-12 text-gray-500">
            No se encontraron artículos con los filtros seleccionados.
          </div>
        </template>
      </div>
    </div>
  </main>
</template>