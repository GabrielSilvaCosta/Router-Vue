<template>
  <div class="list-page">
    <h1>Nossos cafés</h1>
    <hr />
    <main>
      <button
        v-for="coffee in coffeeList"
        :key="coffee.slug"
        class="coffee-card"
        :style="{
          backgroundImage: `url(${coffee.image})`,
          backgroundSize: 'cover',
        }"
        @click="navigateToCoffee(coffee.slug)"
      >
        <h3>{{ coffee.title }}</h3>
      </button>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { coffeeList } from "../data";

const router = useRouter();

const navigateToCoffee = (slug) => {
  router.push(`/coffees/${slug}`);
};
</script>

<style scoped>
.list-page {
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

.list-page h1 {
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.list-page hr {
  width: 80%;
  margin: 20px auto;
  border: 0;
  height: 1px;
  background: #ddd;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.coffee-card {
  width: 200px;
  height: 300px;
  background-size: cover;
  background-position: center;
  margin: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.coffee-card h3 {
  margin: 0;
}

.coffee-card:hover {
  transform: scale(1.05);
}
</style>
