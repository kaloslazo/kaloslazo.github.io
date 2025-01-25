<template>
  <div class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
    <nav class="max-w-6xl mx-auto px-8 py-6">
      <div class="flex items-center justify-between relative z-10">
        <NuxtLink to="/" class="group relative z-20">
          <h2 class="font-semibold text-xl tracking-tight">
            <span class="text-gray-900">kaloslazo</span>
            <span class="text-blue-600 group-hover:text-blue-700">.dev</span>
          </h2>
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8 text-base">
          <NuxtLink v-for="item in navItems" :key="item" :to="item === 'Inicio' ? '/' : `/${item.toLowerCase()}`"
            :class="[
              'text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline decoration-blue-600 decoration-2 underline-offset-8',
              currentRoute.split('/')[1] === (item === 'Inicio' ? '' : `${item.toLowerCase()}`) ? 'underline' : 'no-underline'
            ]">
            {{ item }}
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink v-for="social in socials" :key="social.name" :to="social.url" target="_blank"
            class="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <Icon :name="social.icon" class="w-5 h-5" />
          </NuxtLink>
        </div>

        <button @click="toggleMenu"
          class="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors relative z-20"
          aria-label="Toggle menu">
          <Icon :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'" class="w-6 h-6" />
        </button>
      </div>

      <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white md:hidden" @click="closeMenu" />
      </Transition>

      <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="isMenuOpen"
          class="absolute top-0 inset-x-0 px-8 py-6 transition transform origin-top bg-white md:hidden mt-20 shadow-md border-b border-gray-100">
          <div class="flex flex-col space-y-4">
            <NuxtLink v-for="item in navItems" :key="item" :to="item === 'Inicio' ? '/' : `/${item.toLowerCase()}`"
              class="text-gray-600 hover:text-gray-900 py-2 transition-colors"
              :class="currentRoute === (item === 'Inicio' ? '/' : `/${item.toLowerCase()}`) ? 'text-blue-600' : ''"
              @click="closeMenu">
              {{ item }}
            </NuxtLink>

            <div class="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <NuxtLink v-for="social in socials" :key="social.name" :to="social.url" target="_blank"
                class="text-gray-600 hover:text-gray-900 transition-colors p-2">
                <Icon :name="social.icon" class="w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
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