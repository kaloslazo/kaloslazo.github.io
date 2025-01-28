<template>
  <NuxtLink 
    :to="`/proyectos/${project._slug || project.slug || ''}`" 
    class="block h-full" 
    v-if="project._slug || project.slug"
  >
    <article class="group flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-150 ease-in-out">
      <div class="relative w-full overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full aspect-[16/9] object-cover transform group-hover:scale-[1.02] transition-transform duration-150 ease-in-out" 
        />
      </div>
      
      <div class="flex flex-col p-6 flex-grow">
        <div class="min-h-[7rem] mb-4">
          <h3 class="text-lg font-semibold mb-3 min-h-[3.5rem] line-clamp-2 group-hover:text-blue-600 transition-colors duration-150 capitalize">
            {{ project.title }}
          </h3>
          <p class="text-sm text-gray-600 min-h-[2.5rem] line-clamp-2">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-1.5 mt-auto">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            class="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 transition-colors duration-150"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>