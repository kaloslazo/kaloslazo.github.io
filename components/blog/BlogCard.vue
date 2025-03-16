<template>
  <NuxtLink :to="`/blog/${post._slug || post.slug || ''}`"
    class="block h-full transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
    v-if="post._slug || post.slug">
    <article
      class="group h-full bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 focus:border-blue-500">
      <!-- image & placeholder -->
      <div class="relative w-full aspect-[16/9] overflow-hidden">
        <div v-if="!post.image" class="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <Icon name="tabler:article" class="w-10 h-10 text-blue-500/50" />
        </div>
        <img v-if="post.image" :src="post.image" :alt="`Imagen del artículo ${post.title}`"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        <div
          class="absolute top-0 right-0 m-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
          <div class="bg-blue-500 px-2 pt-1 rounded-md">
            <Icon name="tabler:link" class="w-4 h-4 text-white" />
          </div>
        </div>
        <!-- date badge -->
        <div class="absolute bottom-0 left-0 m-3">
          <div class="bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md">
            <span class="text-xs text-slate-300">{{ post.date }}</span>
          </div>
        </div>
      </div>

      <!-- post content-->
      <div class="p-4">
        <h3
          class="text-lg font-bold mb-2 text-white group-hover:text-blue-500 group-focus:text-blue-500 transition-colors duration-200">
          {{ post.title }}
        </h3>
        <p class="text-sm text-slate-300 mb-4 line-clamp-2">
          {{ post.description }}
        </p>

        <!-- post tags-->
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag"
            class="text-xs px-3 py-1 rounded-md bg-slate-700/30 text-slate-400 border border-slate-700">
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
    required: true,
  },
});
</script>