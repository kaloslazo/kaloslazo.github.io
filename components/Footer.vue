<template>
  <footer class="mt-20 border-t border-gray-200 bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="md:flex md:justify-between">
        <div class="max-w-sm">
          <NuxtLink to="/" class="group">
            <h3 class="font-semibold text-xl tracking-tight">
              <span class="text-gray-900">kaloslazo</span>
              <span class="text-blue-600 group-hover:text-blue-700">.dev</span>
            </h3>
          </NuxtLink>
          <p class="mt-4 text-base text-gray-600">
            Desarrollando soluciones tecnológicas que transforman organizaciones a través de la IA y desarrollo
            full-stack.
          </p>
          <div class="mt-6">
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Sígueme en redes</h4>
            <div class="flex items-center space-x-4">
              <a v-for="social in socials" :key="social.name" :href="social.url" :aria-label="`Visitar ${social.name}`"
                target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <nav class="mt-12 md:mt-0">
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Explorar</h4>
              <ul class="space-y-3">
                <li v-for="item in navigation.main" :key="item.name">
                  <NuxtLink :to="item.href" class="text-base text-gray-600 hover:text-gray-900 transition-colors">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Recursos</h4>
              <ul class="space-y-3">
                <li v-for="item in navigation.resources" :key="item.name">
                  <NuxtLink :to="item.href" class="text-base text-gray-600 hover:text-gray-900 transition-colors">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-600">
          © {{ new Date().getFullYear() }} Kalos Lazo. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {
    name: 'GitHub',
    icon: 'tabler:brand-github-filled',
    url: 'https://github.com/kaloslazo'
  },
  {
    name: 'LinkedIn',
    icon: 'tabler:brand-linkedin-filled',
    url: 'https://linkedin.com/in/kaloslazo'
  },
  {
    name: 'Email',
    icon: 'tabler:mail-filled',
    url: 'mailto:lzm.kalos@gmail.com'
  }
]

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Acerca', href: '/acerca' }
  ],
  resources: [
    { name: 'Tags', href: '/blog' },
    { name: 'Tutoriales', href: '/blog' },
    { name: 'Recursos IA', href: '/blog' },
    { name: 'Contacto', href: '/blog' }
  ]
}
</script>

<script>
// Add structured data for SEO
export default {
  mounted() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://kaloslazo.dev/#person",
      "name": "Kalos Lazo",
      "url": "https://kaloslazo.dev",
      "sameAs": [
        "https://github.com/kaloslazo",
        "https://linkedin.com/in/kaloslazo"
      ],
      "jobTitle": "Software Developer",
      "description": "Desarrollador full-stack especializado en IA y soluciones tecnológicas",
      "email": "lzm.kalos@gmail.com",
      "image": "https://kaloslazo.dev/img/profile.jpg"
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}
</script>