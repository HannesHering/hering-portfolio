<template>
  <div>
    <!-- Deine vorhandenen Inhalte hier -->

    <!-- Scroll Knopf -->
    <div
      @click="handleScroll"
      v-show="scrollPosition > 0 || scrollPosition === 0"
      class="fixed bottom-8 right-8 bg-text-primary text-bg-primary px-4 py-2 rounded-md hover:bg-accent-primary transition-all duration-300"
    >
      <svg
        v-if="scrollPosition > 300"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 15l7-7 7 7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Zustandsvariable, um die aktuelle Scrollposition zu speichern
const scrollPosition = ref(0);

// Funktion, um zum oberen Rand der Seite zu scrollen oder nach unten zu einem Punkt
const handleScroll = () => {
  if (scrollPosition.value > 300) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scrollt sanft zum oberen Rand
    });
  } else {
    window.scrollTo({
      top: 950, // Der Punkt, zu dem nach unten gescrollt wird
      behavior: "smooth", // Scrollt sanft nach unten
    });
  }
};

// Event-Handler zum Aktualisieren der Scrollposition
const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop;
};

// Füge Event-Listener beim Mounten der Komponente hinzu
onMounted(() => {
  window.addEventListener("scroll", updateScrollPosition);
});

// Entferne Event-Listener beim Entfernen der Komponente
onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollPosition);
});
</script>

<style scoped></style>