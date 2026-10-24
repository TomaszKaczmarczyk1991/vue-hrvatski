<template>
  <div class="main-image">
    <div class="overlay"></div>
  </div>
</template>

<script setup>
import mainImage from '../assets/images/Bol_Dominikanski_Samostan.jpg'

const backgroundImage = `url(${mainImage})`
</script>

<style scoped>
/* Margines zdjęcia względem karty: 10% z każdej strony na desktopie,
   4% na telefonie (więcej miejsca na zawartość). Menu.vue używa tych
   samych wartości do wyliczenia paddingu zawartości, więc zawartość
   zawsze mieści się w obrębie zdjęcia.
   Rodzic może nadpisać margines zmiennymi --frame-inset-x / --frame-inset-y. */
.main-image {
  position: absolute;
  z-index: 0;

  top: var(--frame-inset-y, 10%);
  left: var(--frame-inset-x, 10%);

  width: calc(100% - var(--frame-inset-x, 10%) * 2);
  height: calc(100% - var(--frame-inset-y, 10%) * 2);

  background-image: v-bind(backgroundImage);
  background-size: cover;
  background-position: center;

  border-radius: 24px;

  overflow: hidden;

  opacity: 0;
  animation: image-fade-in 1.5s ease forwards;
}

.overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.48)
    );
}

@keyframes image-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .main-image {
    top: var(--frame-inset-y, 4%);
    left: var(--frame-inset-x, 4%);

    width: calc(100% - var(--frame-inset-x, 4%) * 2);
    height: calc(100% - var(--frame-inset-y, 4%) * 2);

    border-radius: 20px;
  }
}
</style>