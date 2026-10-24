<template>
  <div class="welcome">
    <div class="brand">
      <p class="intro">
        Bok! Dobrodošli u
      </p>

      <h1>
        Hrvatski Kutak
      </h1>

      <span class="version">
        v{{ version }}
      </span>
    </div>

    <p class="description">
      <span>Opusti se, uči nove riječi</span>
      <span>i polako upoznaj hrvatski!</span>
    </p>
  </div>
</template>

<script setup>
const version = import.meta.env.VITE_APP_VERSION ?? '—'
</script>

<style scoped>
/* Kontener: rozmiary tekstów liczone są względem jego szerokości
   (jednostki cqw), więc nagłówek i opisy skalują się płynnie razem
   z ekranem i nie wychodzą poza zdjęcie. Na szerokich ekranach działają
   wartości maksymalne (64px / 24px / 18px), jak wcześniej. */
.welcome {
  width: 100%;
  max-width: 460px;

  container-type: inline-size;

  text-align: center;
  color: #ffffff;

  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro {
  margin: 0 0 2px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 24px;
  font-size: clamp(14px, 5.2cqw, 24px);
  font-weight: 500;
}

h1 {
  max-width: 100%;
  margin: 0;
  color: #eeeeee;
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: 52px;
  font-size: clamp(30px, 14cqw, 64px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: 0;
  overflow-wrap: anywhere;
}

.version {
  margin-top: 2px;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  font-size: clamp(11px, 2.9cqw, 13px);
  font-weight: 600;
  color: #eeeeee;
}

.description {
  margin: 22px 0 0;
  margin-top: clamp(12px, 4.8cqw, 22px);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  font-size: clamp(11px, 3.9cqw, 18px);
  line-height: 1.5;
  color: #eeeeee;
}

.description span {
  display: block;
}

.intro,
h1,
.version,
.description {
  opacity: 0;
  animation: fade-in 1.1s ease forwards;
}

.intro {
  animation-delay: 0.9s;
}

h1 {
  animation-delay: 1.3s;
}

.version {
  animation-delay: 1.8s;
}

.description {
  animation-delay: 2.3s;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>