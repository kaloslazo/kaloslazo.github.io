<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(
  `post-${slug}`,
  () => queryCollection('posts').path(`/posts/${slug}`).first(),
  {
    server: true,
    immediate: true,
    watch: [route.params.slug],
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
  <main :key="route.fullPath" class="mt-4 px-4 bg-slate-900 text-slate-100">
    <template v-if="post">
      <div class="max-w-3xl mx-auto">
        <!-- Date and back link -->
        <div class="flex justify-between items-center mb-8">
          <NuxtLink to="/blog"
            class="inline-flex items-center text-sm text-slate-400 hover:text-blue-500 transition-colors group">
            <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Blog
          </NuxtLink>
          <span class="text-sm text-slate-400">{{ post.date }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-bold text-slate-100 mb-6">{{ post.title }}</h1>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tag in post.tags" :key="tag"
            class="text-xs px-2 py-1 rounded-md border border-blue-500 text-blue-500">
            {{ tag }}
          </span>
        </div>

        <!-- Image -->
        <div class="relative w-full mb-12" v-if="post.image">
          <img :src="post.image" :alt="post.title" class="w-full aspect-[21/9] object-cover rounded-lg" />
        </div>

        <!-- Description -->
        <p class="text-xl text-slate-300 mb-12 leading-relaxed border-l-2 border-blue-500 pl-4">
          {{ post.description }}
        </p>

        <!-- Content -->
        <article class="prose prose-invert prose-blue max-w-none mb-16">
          <ContentRenderer :value="post" />
        </article>
      </div>

      <!-- Bottom navigation and sharing -->
      <div class="pt-8 pb-16 mt-8">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
          <NuxtLink to="/blog"
            class="inline-flex items-center text-sm text-slate-400 hover:text-blue-500 transition-colors group">
            <Icon name="tabler:arrow-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a blog
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

    <!-- Not found state -->
    <div v-else class="h-full min-h-98 py-20 flex items-center justify-center px-4">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-2">Artículo no encontrado</h2>
        <p class="text-slate-400 mb-8">
          El artículo que buscas no existe o ha sido movido.
        </p>
        <div class="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <NuxtLink to="/blog"
            class="px-6 py-3 border border-blue-500 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors text-center w-full md:w-auto">
            Ver artículos
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