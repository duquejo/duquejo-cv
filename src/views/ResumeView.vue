<template>
  <article>
    <section class="row items-center mx-0 mt-0">
      <div class="w-full order-2 lg:basis-1/2 lg:order-1 px-8 pt-8 lg:m-auto">
        <span class="text-gray-400 text-lg">Desarrollador Fullstack</span>
        <h1 class="mt-2">Hola, Soy <strong>José Duque.</strong></h1>
        <p>Ingeniero informático de Colombia con más de 6 años de experiencia en desarrollo de aplicaciones para la web utilizando los lenguajes más influyentes del mercado laboral, empleando tanto <strong>arquitecturas monolíticas</strong>, como <strong>arquitecturas orientadas a microservicios</strong>.</p>
        <div class="button-container">
            <v-icon v-for="stack in TECH_STACK" class="hover:animate-wiggle" :name="stack.icon" scale="2.5" :title="stack.title" />
        </div>
        <!-- <div class="button-container lg:justify-normal z-10">
          <button class="lg:basis-auto inline-flex items-center justify-center gap-2 w-auto">
            Download CV <v-icon name="bi-filetype-pdf"/>
          </button>
          <button class="lg:basis-auto inline-flex items-center justify-center gap-2 w-auto secondary">
            <router-link :to="{ name: ROUTES.CONTACT }">
              Contact <v-icon name="md-email-outlined" scale="0.8"/>
            </router-link>
          </button>
        </div> -->
      </div>
      <picture class="w-full order-1 lg:basis-1/2 lg:order-2 overflow-hidden">
        <img class="shadow grayscale hover:grayscale-0 transition-all duration-500 scale-110 hover:rotate-3" src="../assets/avatar.png" alt="José Duque" />
      </picture>
    </section>
    <section>
      <h2 class="text-h2">¿Qué he realizado?</h2>
      <p>Durante mi vida laboral, he tenido la oportunidad poder tener una vista amplia de las necesidades puntuales del cliente para resolver cualquier reto tecnológico que se presente; he desempeñado roles como asesor y coordinador en equipos de desarrollo para empresas del sector público como la <strong>Alcaldía de Itagüí</strong>, <strong>Alcaldía de Bogotá</strong>, <strong>Ministerio de Educación Nacional</strong> y la <strong>Universidad EAFIT</strong>. También he participado en proyectos de desarrollos a la medida y desarrollo de sitios web con <strong>agencias de Marketing</strong> a tiempo completo y alternativamente como <strong>Freelancer</strong> a tiempo parcial.</p>
      <p>Con <strong>fábricas de software</strong> he tenido la oportunidad de trabajar para <strong>Startups educativas</strong> con gran alcance regional, así como para el sector <strong>Banca</strong>, <strong>Seguros</strong> y <strong>Salud</strong>, los cuales han permitido expandir conocimientos e ir acorde a la rigidez de las políticas de dicho mercado.</p>
      <p>Conforme a la búsqueda de una orientación más especializada a las tecnologías más populares, he participado sesiones de aprendizaje intensivo nacionales de <strong>Node JS</strong> y realizado de manera individual estudios sobre tecnologías Frontend como <strong>React JS</strong>, <strong>Vue JS</strong>, así como otros acercamientos básicos en <strong>Angular</strong>.</p>
      <p>Desde el Backend, estudios en <strong>arquitecturas basadas en microservicios</strong> usando <strong>Amazon Web Services</strong> y <strong>Azure DevOps</strong>, esto en búsqueda de perfilarme como un desarrollador Full Stack competente para las necesidades del mercado actual.</p>
    </section>
  </article>
</template>

<script setup lang="ts">
import TECH_STACK from '../shared/data/tech-stack.json';
</script>