<template>
  <div class="h-screen bg-bg-primary">
    <NuxtLayout>
      <NuxtPage />
      <ul class="text-text-primary font-outfit">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
      </ul>
    </NuxtLayout>
  </div>
</template>
