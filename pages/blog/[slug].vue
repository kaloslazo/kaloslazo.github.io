<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(
  `post-${slug}`,
  () => queryCollection('posts').path(`/posts/${slug}`).first(),
  {
    server: true,
    immediate: true
  }
);

useHead(() => ({
  title: computed(() => `${post.value?.title || 'Blog'} - Kalos Lazo`),
  meta: [
    { name: 'description', content: post.value?.description },
    { name: 'keywords', content: post.value?.tags?.join(', ') },
    { property: 'og:title', content: post.value?.title },
    { property: 'og:description', content: post.value?.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://kaloslazo.dev/blog/${slug}` },
    { property: 'og:image', content: post.value?.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value?.title },
    { name: 'twitter:description', content: post.value?.description },
    { name: 'twitter:image', content: post.value?.image },
    { name: 'article:published_time', content: post.value?.date },
    { name: 'article:modified_time', content: post.value?.date },
    { name: 'article:author', content: 'Kalos Lazo' },
    { name: 'article:section', content: 'Blog' },
    { name: 'article:tag', content: post.value?.tags?.join(', ') }
  ],
  link: [
    { rel: 'canonical', href: `https://kaloslazo.dev/blog/${slug}` }
  ]
}))
</script>

<template>
  <main :key="route.fullPath" class="mt-24 px-4">
    <template v-if="post">
      <div class="relative h-full max-h-96 mb-10 rounded-lg">
        <img v-if="post.image" :src="post.image" :alt="post.title"
          class="w-full h-full max-h-96 object-cover rounded-lg" />
      </div>

      <div class="max-w-3xl mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ post.title }}</h1>

        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tag in post.tags" :key="tag"
            class="text-sm px-3 py-1.5 rounded-md transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
            {{ tag }}
          </span>
        </div>

        <p class="text-xl text-gray-600 mb-10 leading-relaxed">
          {{ post.description }}
        </p>

        <article class="prose max-w-none">
          <ContentRenderer :value="post" />
        </article>
      </div>

      <NuxtLink to="/blog"
        class="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors group mt-8">
        <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Volver a blog
      </NuxtLink>
    </template>

    <div v-else class="h-full min-h-98 py-20 flex items-center justify-center px-4">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-2">Artículo no encontrado</h2>
        <p class="text-gray-600 mb-8">
          El artículo que buscas no existe o ha sido movido.
        </p>
        <div class="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <NuxtLink to="/blog"
            class="px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center w-full md:w-auto">
            Ver artículos
          </NuxtLink>
          <NuxtLink to="/"
            class="px-6 py-3 border border-gray-300 rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
            Ir al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>