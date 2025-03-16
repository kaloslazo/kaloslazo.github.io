<template>
  <div class="sticky top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm z-50">
    <nav class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- logo -->
        <NuxtLink to="/" class="group flex items-center">
          <h2 class="font-semibold text-xl tracking-tight">
            <span class="text-slate-200">kaloslazo</span>
            <span class="text-blue-500 group-hover:text-blue-400 transition-colors">.dev</span>
          </h2>
        </NuxtLink>

        <!-- Menu de navegación desktop -->
        <div class="hidden md:flex items-center space-x-8 text-base">
          <NuxtLink v-for="item in navItems" :key="item" :to="item === 'Inicio' ? '/' : `/${item.toLowerCase()}`"
            :class="[
              'hover:text-blue-500 transition-colors duration-200 decoration-blue-500 decoration-2 underline-offset-8 font-medium',
              currentRoute.split('/')[1] === (item === 'Inicio' ? '' : `${item.toLowerCase()}`) ? 'text-blue-500 underline' : 'no-underline text-slate-300'
            ]">
            {{ item }}
          </NuxtLink>
        </div>

        <!-- Iconos sociales desktop -->
        <div class="hidden md:flex items-center space-x-5">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
            class="text-slate-400 hover:text-blue-500 transition-colors duration-200 p-2" :title="social.name">
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>

        <!-- Botón de menú móvil -->
        <button @click="toggleMenu"
          class="md:hidden p-2 text-slate-200 hover:text-blue-500 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Toggle menu">
          <Icon :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'" class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Menú móvil -->
    <div v-if="isMenuOpen"
      class="fixed top-[64px] inset-x-0 bg-slate-900 border-b border-slate-800 py-5 md:hidden shadow-lg">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col space-y-4">
          <NuxtLink v-for="item in navItems" :key="item" :to="item === 'Inicio' ? '/' : `/${item.toLowerCase()}`"
            class="text-slate-300 hover:text-blue-500 py-2 transition-colors font-medium"
            :class="currentRoute === (item === 'Inicio' ? '/' : `/${item.toLowerCase()}`) ? 'text-blue-500' : ''"
            @click="closeMenu">
            {{ item }}
          </NuxtLink>

          <div class="flex items-center space-x-4 pt-4 border-t border-slate-800">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
              class="text-slate-400 hover:text-blue-500 transition-colors p-2">
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const currentRoute = computed(() => route.path)
const isMenuOpen = ref(false)

const navItems = ['Inicio', 'Proyectos', 'Blog', 'Acerca']
const socials = [
  { name: 'GitHub', icon: 'tabler:brand-github-filled', url: 'https://github.com/kaloslazo' },
  { name: 'LinkedIn', icon: 'tabler:brand-linkedin-filled', url: 'https://linkedin.com/in/kaloslazo' },
  { name: 'Email', icon: 'tabler:mail-filled', url: 'mailto:lzm.kalos@gmail.com' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

watch(route, closeMenu)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>