<template>
  <section class="mt-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-2">Blog</h2>
      <p class="text-gray-600 mb-10">Últimas publicaciones sobre tecnología, desarrollo y aprendizaje.</p>

      <div>
        <template v-if="recentPostsStatus !== 'success'">
          <BlogCardLoader v-for="i in 3" :key="i"></BlogCardLoader>
        </template>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <BlogCard v-for="post in recentsPostsData" :key="post.slug" :post="post" />
      </div>

      <div class="mt-6">
        <NuxtLink to="/blog"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 border border-gray-200
          rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
          Ver todas las entradas
          <Icon name="tabler:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const {data: recentsPostsData, status: recentPostsStatus } = await useAsyncData(
  'recentsPostsData',
  () => queryCollection('posts').limit(3).all(),
  { server: true },
);
console.log(recentsPostsData)
</script>