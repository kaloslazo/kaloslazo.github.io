<template>
  <section class="px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          Publicaciones Recientes
        </h2>
        <p class="text-slate-300 max-w-2xl text-base">
          Aprende sobre machine learning, ciencia de datos y desarrollo web a través de mis artículos y tutoriales.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- skeleton -->
        <template v-if="recentPostsStatus !== 'success'">
          <BlogCardLoader v-for="i in 3" :key="i" />
        </template>

        <!-- show blog posts -->
        <template v-else-if="recentsPostsData.length > 0">
          <BlogCard v-for="post in recentsPostsData" :key="post.id" :post="post" />
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
const { data: recentsPostsData, status: recentPostsStatus } = await useAsyncData(
  'recentsPostsData',
  () => queryCollection('posts').limit(3).all(),
  { server: true, inmediate: true },
);
</script>