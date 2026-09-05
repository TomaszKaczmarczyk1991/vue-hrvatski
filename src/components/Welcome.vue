<template>
  <div class="welcome">
    <p class="hello">
      Bok!
    </p>

    <div class="brand">
      <p class="intro">
        Dobrodošao u
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
      <span>i polako upoznaj hrvatski. 🇭🇷</span>
    </p>
  </div>
</template>

<script setup>
const version = import.meta.env.VITE_APP_VERSION
</script>

<style scoped>
.welcome {
  max-width: 460px;

  text-align: center;
  color: #ffffff;

  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.hello {
  margin: 0 0 32px;

  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro {
  margin: 0 0 2px;

  font-size: 16px;
  font-weight: 500;
}

h1 {
  margin: 0;
  color: #eeeeee;
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: 82px;
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: 0;
}

.version {
  margin-top: 1px;

  font-size: 13px;
  font-weight: 600;
  color: #eeeeee;
}

.description {
  margin: 22px 0 0;

  font-size: 14px;
  line-height: 1.5;
  color: #eeeeee;
}

.description span {
  display: block;
}

.hello,
.intro,
h1,
.version,
.description {
  opacity: 0;
  animation: fade-in 1.1s ease forwards;
}

.hello {
  animation-delay: 0.2s;
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

@media (max-width: 500px) {
  .welcome {
    width: 100%;
    max-width: 340px;
  }

  .hello {
    margin-bottom: 24px;
    font-size: 22px;
  }

  .intro {
    font-size: 14px;
  }

  h1 {
    font-size: 52px;
  }

  .version {
    font-size: 11px;
  }

  .description {
    margin-top: 18px;
    font-size: 12px;
  }
}
</style>