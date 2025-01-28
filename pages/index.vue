<script setup lang="ts">
const description = 'Desarrollo soluciones de alto impacto mediante análisis de datos, IA y desarrollo full-stack. Busco transformar organizaciones a través de la tecnología.'

useHead({
  title: 'Kalos Lazo | Desarrollo web/movil Full Stack, MLOps y Data Scientist',
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'Desarrollo Full Stack, Machine Learning, Análisis de Datos, IA, Python, React, FastAPI' },
    { property: 'og:title', content: 'Kalos Lazo | Desarrollador Full Stack y Científico de Datos' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaloslazo.dev' },
    { property: 'og:image', content: 'https://kaloslazo.dev/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Kalos Lazo | Desarrollador Full Stack y Científico de Datos' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://kaloslazo.dev/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kaloslazo.dev' }
  ]
})
</script>

<template>
  <Transition name="page" mode="out-in">
    <main>
      <TransitionGroup name="fade" tag="div">
        <HomeHero key="hero"/>
        <HomeFeaturedProjects key="projects"/>
        <HomeFeaturedBlog key="blog"/>
      </TransitionGroup>
    </main>
  </Transition>
</template>