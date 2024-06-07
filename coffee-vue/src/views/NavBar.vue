<template>
  <header class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/coffees">Cafés</router-link>
  </header>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 30px;
  background-color: #343a40;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar a {
  color: #f8f9fa;
  text-decoration: none;
  font-weight: bold;
  margin: 0 20px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar a:hover {
  color: #adb5bd;
  transform: scale(1.1);
}

.navbar a:active {
  color: #6c757d;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 10px 20px;
  }

  .navbar a {
    margin: 10px 0;
  }
}
</style>
