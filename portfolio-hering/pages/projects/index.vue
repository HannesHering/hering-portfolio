<template>
  <div class="bg-bg-primary text-text-primary p-6">
    <Title>Projects - Hering</Title>
    <div class="font-rekron text-5xl">
      Projekte
      <svg
        class="h-4 mt-2"
        viewBox="0 0 100 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="40" y2="0" stroke="#F6690C" stroke-width="1" />
      </svg>
    </div>
    <div class="flex flex-col justify-center items-center my-20">
      <div class="flex flex-col items-center justify-center">
        <div class="text-text-primary font-outfit text-3xl mb-5">
          Terror Nightmare Towers
        </div>
        <img
          src="../../assets/images/TNTCover.png"
          alt="Terror Nightmare Towers Image"
          class="w-1/3 h-1/5"
        />
        <!-- <Carousel /> -->
        <div class="w-2/5 font-outfit text-justify mt-5">
          Terror Nightmare Towers ist ein Horror-Brettspiel, das auf dem
          beliebten Spiel Santorini basiert. In dieser düsteren Version bauen
          die Spieler Türme in einer von Albträumen heimgesuchten Stadt. Während
          du strategisch Türme errichtest, musst du gegen geisterhafte Kreaturen
          und übernatürliche Fallen kämpfen. Nutze spezielle Fähigkeiten, um den
          Schrecken zu trotzen und der beste Baumeister der Terror Nightmare
          Towers zu werden!
        </div>
        <NuxtLink
          to="/projects/tnt"
          class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 mb-16 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
          >Projekt ansehen</NuxtLink
        >
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="text-text-primary font-outfit text-3xl mb-5">
          VP-Tracker
        </div>
        <img
          src="../../assets/images/StudentPageCropped.png"
          alt="Terror Nightmare Towers Image"
          class="w-1/3 h-1/5"
        />
        <!-- <Carousel /> -->
        <div class="w-2/5 font-outfit text-justify mt-5">
          Der VP-Tracker ist eine praktische Anwendung für Studierende und
          Universitätsmitarbeitende zur Verwaltung von Versuchspersonenstunden.
          Mit diesem Tool können Nutzer ihre Teilnahme an Studien einfach
          erfassen, verwalten und nachverfolgen. Der VP-Tracker bietet eine
          übersichtliche Benutzeroberfläche, in der sowohl geleistete als auch
          noch benötigte Stunden angezeigt werden. So behalten alle Beteiligten
          stets den Überblick über ihren Fortschritt und die Erfüllung der
          Studienanforderungen.
        </div>
        <NuxtLink
          to="/projects/vptracker"
          class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
          >Projekt ansehen</NuxtLink
        >
      </div>
      <BackToTheTop />
    </div>
  </div>
</template>
