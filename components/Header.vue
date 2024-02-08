<script setup lang="ts">
  const { title, nav } = useAppConfig()
</script>

<template>
  <header>
    <p>{{ title }}</p> 
    <nav>
      <NuxtLink v-for="link in nav" :to="link.path">{{link.text}}</NuxtLink>
    </nav>
  </header>
</template>