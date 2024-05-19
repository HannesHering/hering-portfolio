<template>
  <div class="bg-bg-primary text-text-primary p-6 overflow-hidden">
    <Title>Portfolio - Hering</Title>
    <div class="font-rekron text-5xl">
      Hering
      <svg
        class="h-4 mt-2"
        viewBox="0 0 100 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="40" y2="0" stroke="#F6690C" stroke-width="1" />
      </svg>
    </div>
    <ClientOnly>
      <Experience />
    </ClientOnly>
    <div class="flex flex-col items-center">
      <div class="flex flex-row justify-center">
        <div class="w-1/2 h-full flex flex-col">
          <div class="w-full text-text-primary font-outfit text-2xl text-start mb-2">
            Hi, ich bin
          </div>
          <div
            class="w-full text-accent-primary font-outfit text-3xl text-left"
          >
            Hannes Hering
          </div>
          <div class="w-full text-text-primary font-outfit text-1xl text-left mb-3">
            Medieninformatik-Student an der Universität zu Lübeck
          </div>
          <div class="w-full text-text-primary font-outfit text-xl text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <div class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300">
            Kontaktiere mich
          </div>
        </div>
        <img
          src="../assets/images/placeholderprofile.png"
          alt="Hannes Hering Profile Picture"
          class="w-1/5 h-1/6"
        />
      </div>
      <div class="h-48"></div>
      <div class="flex flex-row justify-center items-center">
        <div class="w-1/2 h-full flex flex-col">
          <div class="w-full text-text-primary font-outfit text-2xl text-start mb-2">
            Projekt-Spotlight
          </div>
          <div
            class="w-full text-accent-primary font-outfit text-3xl text-left"
          >
            VP-Tracker
          </div>
          <div class="w-full text-text-primary font-outfit text-1xl text-left mb-3">
            Verwaltungssoftware für Versuchspersonenstunden
          </div>
          <div class="w-full text-text-primary font-outfit text-xl text-left">
            Der VP-Tracker ist eine praktische Anwendung für Studierende und Universitätsmitarbeitende zur Verwaltung von Versuchspersonenstunden. Mit diesem Tool können Nutzer ihre Teilnahme an Studien einfach erfassen, verwalten und nachverfolgen. Der VP-Tracker bietet eine übersichtliche Benutzeroberfläche, in der sowohl geleistete als auch noch benötigte Stunden angezeigt werden. So behalten alle Beteiligten stets den Überblick über ihren Fortschritt und die Erfüllung der Studienanforderungen.
          </div>
          <NuxtLink to="/projects/vptracker" class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300">Projekt ansehen</NuxtLink>
        </div>
        <img
          src="../assets/images/StudentPageCropped.png"
          alt="VP-Tracker Student-Page Image"
          class="w-1/5 h-1/6"
        />
      </div>
    </div>
    <div class="h-48"></div>
    <BackToTheTop />
  </div>
</template>

<script></script>
