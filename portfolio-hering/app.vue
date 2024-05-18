<template>
  <div class="h-screen bg-bg-primary">
    <NuxtLayout>
        <NuxtPage />
        <div class="fixed left-0 top-0 h-dvh flex flex-col justify-center">
          <ul class="w-fit text-text-primary font-outfit text-4xl mb-10 px-6">
            <li class="w-fit mb-10 hover:text-accent-primary">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="w-fit mb-10 hover:text-accent-primary">
              <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li class="w-fit mb-10 hover:text-accent-primary">
              <a href="https://github.com/HannesHering" target="_blank">GitHub</a>
            </li>
            <li class="w-fit mb-10 hover:text-accent-primary">
              <a href="https://www.linkedin.com/in/hannes-hering/" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
    </NuxtLayout>
  </div>
</template>

