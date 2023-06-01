<template>

  <div class="main-galery">
    <h4 style="margin: 10px;"><strong>Bebidas</strong> <br> -Café</h4>

    <div class="galery_cafe">
        <div class="cafe_simples">
            <a target="_blank" href="img_5terre.jpg">
                
                <img src="@/components/icons/bebidas/cafesimples.svg">
            </a>
            <div class="desc"><strong style="float: left;">Café Simples <br>R$3,00</strong></div>    
        </div>
        <div class="cappucino">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/cappucino.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;" >Cappucino <br> R$8,00</strong></div>
        </div>
        <div class="expresso">
            <a target="_blank" href="img_lights.jpg">
                <img src="@/components/icons/bebidas/expresso.svg" alt="Northern Lights">
            </a>
            <div class="desc"><strong style="float: left;">Expresso <br> R$6,00</strong></div>
        </div>
       
    </div>
    <h4 style="margin-left: 1%;">-Chá</h4>    
    <div class="galery_cha">
        
        <div class="cha_simples">
            
            <a target="_blank" href="img_5terre.jpg">
                <img src="@/components/icons/bebidas/cha_gelado.svg">
            </a>
            <div class="desc"><strong style="float: left;">Chá simples <br> R$6,00</strong></div>
        </div>
        <div class="cha_gelado">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/cha_novo.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;">Chá gelado <br> R$6,00</strong></div>
        </div>
    </div>
    <h4 style="margin-left: 1%">-Água</h4>
    <div class="galery_agua">
        
        <div class="agua_semgas">
            <a target="_blank" href="img_5terre.jpg">
                <img src="@/components/icons/bebidas/agua_normal.svg">
            </a>
            <div class="desc"><strong style="float: left;">Água sem gás <br> R$6,00</strong></div>
        </div>
        <div class="agua_comgas">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/agua_com_gas.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;">Água com gás <br> R$6,00</strong></div>
        </div>
    </div>
    <h4 style="margin-left: 1%">-Refrigerantes</h4>
    <div class="galery_refri">
        
        <div class="sprite">
            <a target="_blank" href="img_5terre.jpg">
                <img src="@/components/icons/bebidas/sprite.svg">
            </a>
            <div class="desc"><strong style="float: left;">Sprite<br> R$6,00</strong></div>3
        </div>
        <div class="tubaina">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/sprite.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;">Tubaina <br> R$6,00</strong></div>
        </div>
        <div class="fanta">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/coca_cola.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;">Fanta <br> R$6,00</strong></div>
        </div>
        <div class="coca">
            <a target="_blank" href="imagens/cappucino.svg">
                <img src="@/components/icons/bebidas/coca_cola.svg" alt="Forest">
            </a>
            <div class="desc"><strong style="float: left;">Coca <br> R$6,00</strong></div>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style>
.main{
  display: flex;
  
  
}

div.galery_cafe, .galery_cha, .galery_agua, .galery_refri {
  padding: 5px;
  display: flex;
  
}

div.galery_cafe > .cafe_simples, .cappucino, .expresso{
  padding: 5px;
  margin: 20px;
  border: solid 3px;
  
}
div.galery_cha > .cha_simples, .cha_gelado{
  
  padding: 5px;
  margin: 20px;
  border: solid 3px;
}
div.galery_agua > .agua_semgas, .agua_comgas{
  
  padding: 5px;
  margin: 20px;
  border: solid 3px;
}
div.galery_refri > .sprite, .tubaina, .fanta, .coca{
  
  padding: 5px;
  margin: 20px;
  border: solid 3px;
}
div.gallery img {
  width: 90%;
}
h3 > a{
  color: white;
}
h3 > a:hover{
  color: white;
}
</style>
