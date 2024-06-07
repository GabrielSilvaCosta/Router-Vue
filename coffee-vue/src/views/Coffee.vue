<template>
  <div v-if="currentCoffee" class="coffee-page">
    <h1>{{ currentCoffee.title }}</h1>
    <p>{{ currentCoffee.description }}</p>
    <div class="ingredients-list">
      <h2>Ingredientes</h2>
      <ul>
        <li v-for="ingredient in currentCoffee.ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <img :src="currentCoffee.image" :alt="currentCoffee.title" />
  </div>
  <div v-else class="not-found-coffee">
    <h1>Oops! Esse café não está na nossa lista</h1>
    <h2>
      Acesse a <router-link to="/coffees">página de cafés</router-link> e selecione um de nossos produtos
    </h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { coffeeList } from '../data';

const route = useRoute();
const currentCoffee = coffeeList.find(coffee => coffee.slug === route.params.coffee);
</script>

<style scoped>
.coffee-page {
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

.not-found-coffee {
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

.ingredients-list {
  margin: 20px 0;
}

.ingredients-list ul {
  list-style: none;
  padding: 0;
}

.ingredients-list li {
  background: #eee;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}

.coffee-page img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
