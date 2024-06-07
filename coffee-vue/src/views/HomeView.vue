<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCoffees = () => {
  router.push("/coffees");
};
</script>

<template>
  <div class="home-page">
    <div class="home-title">
      <h1 class="title">Coffeeteria</h1>
      <h2 class="subtitle">Seja bem-vindo(a)!</h2>
    </div>
    <main>
      <p class="description">Cafés especiais, nacionais e importados.</p>
      <button class="button" @click="navigateToCoffees">
        Conheça nossos produtos
      </button>
    </main>
  </div>
</template>

<style scoped>
.home-page {
  padding: 40px;
  text-align: center;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
}

.home-title {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  color: #666;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  max-width: 600px;
  line-height: 1.6;
}

.button {
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.3);
}

.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 86, 179, 0.4);
}

.button:active {
  background-color: #004494;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 68, 148, 0.3);
}
</style>
