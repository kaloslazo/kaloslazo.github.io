<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="block h-full transform transition-all">
    <article class="group flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-transform duration-200 ease-out">
      <div class="relative w-full overflow-hidden">
        <img :src="post.image" :alt="post.title" class="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-200 ease-out" />
        <span class="absolute top-4 left-4 text-xs font-medium px-2.5 py-1 bg-white/90 backdrop-blur rounded-md transition-opacity duration-200">
          {{ post.date }}
        </span>
      </div>
      <div class="flex flex-col p-6 h-48">
        <h3 class="text-lg font-semibold mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
          {{ post.title }}
        </h3>
        <p class="text-sm text-gray-600 mb-4 line-clamp-3">{{ post.description }}</p>
        <div class="flex flex-wrap gap-1.5 mt-auto">
          <span v-for="tag in post.tags" :key="tag" class="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 transition-colors duration-200">
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>