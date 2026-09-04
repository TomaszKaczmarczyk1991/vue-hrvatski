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
.main-image {
  position: absolute;

  width: 80%;
  height: 80%;

  top: 10%;
  left: 10%;

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
</style>