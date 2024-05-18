<script lang="ts"></script>

<template>
    <main>
        <div class="bg-bg-primary">
            <div class="text-text-primary p-6">
                <div class="font-rekron text-5xl">
                    Projects
                    <svg class="h-4 mt-2" viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="40" y2="0" stroke="#F6690C" stroke-width="1" />
                    </svg>
                </div>
            </div>
            <div class="content font-outfit text-text-primary text-justify">
                <ContentDoc />
            </div>
            <div class="flex flex-row justify-center my-5 space-x-5">
                <SocialShare network="facebook" class="border rounded-md p-2 border-accent-primary hover:bg-accent-primary"/>
                <SocialShare network="twitter" class="border rounded-md p-2 border-accent-primary hover:bg-accent-primary"/>
                <SocialShare network="linkedin" class="border rounded-md p-2 border-accent-primary hover:bg-accent-primary"/>
            </div>
            <div class="h-28">
            </div>
        </div>
    </main>
</template>

<style scoped>
    main :deep(h1) {
        @apply w-full flex justify-center items-center text-4xl;
    }

    main :deep(p) {
        @apply w-full flex justify-center items-center;
    }

    main :deep(.mainText) {
        @apply px-80 mt-10 mb-5 text-justify;
    }

    main :deep(.date) {
        @apply px-80 my-2 text-center text-xs;
    }

    main :deep(.galery) {
        @apply mb-5 text-center text-2xl;
    }
</style>