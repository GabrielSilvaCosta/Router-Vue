<template>
  <footer class="footer">
    <p class="copyright">&copy; 2023 Coffee Shop. All rights reserved.</p>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin-top: auto;
}

.copyright {
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    font-size: 14px;
  }
}
</style>
