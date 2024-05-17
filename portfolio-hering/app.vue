<template>
  <div class="h-full bg-bg-primary">
    <NuxtLayout>
      <div
        class="w-full h-screen bg-no-repeat bg-center bg-fixed bg-[url('/assets/watermark.png')]"
      >
      <NuxtPage />
        <div class="h-32"></div>
          <ul class="w-fit text-text-primary font-outfit text-4xl mb-10 p-6">
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

