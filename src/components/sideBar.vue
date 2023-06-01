
<template>
  <div class="aside">
            
    <aside>
        <h2>Categorias:</h2>
        <h3><router-link to="/bebidas">bebidas</router-link></h3>
        <ul>
            <li>Café</li>
            <li>Chá</li>
            <li>Água</li>
            <li>Refrigerantes</li>
        </ul>
        <h3><router-link to="/salgados">Salgados</router-link></h3>
        <ul>
            <li>Coxinha</li>
            <li>Kibe</li>
            <li>Empada</li>
            <li>Quiche</li>
        </ul>
        <h3><router-link to="/sobremesas">Sobremesas</router-link></h3>
        <ul>
            <li>Tortas</li>
            <li>Sorvetes</li>
            <li>Milk Shakes</li>
            <li>Doces</li>
        </ul>
    </aside>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

RouterLink
</script>


<style scoped>
  .aside{
    background-color: black;
    height: 90vh;
    width: 220px;
    text-decoration: none;
}
ul{
    padding-left: 50px;
    color: white;
}
li{
    color: white;
}
h2, h3{
    padding-left: 25px;
    color: white;
}
</style>