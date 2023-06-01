<template>
    <div class="main-galery">
        <h4 style="margin: 10px;"><strong>Salgados</strong></h4>
        <div class="galery_salgados">
            <div class="coxinha">
                <a target="_blank" href="img_5terre.jpg">
                    <img style="aspect-ratio: 4/3" src="@/components/icons/salgados/coxinha.jpg">
                </a>
                <div class="desc"><strong style="float: left;">Coxinha (bingolinha)<br>R$3,00</strong></div>    
            </div>
            <div class="kibe">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/salgados/kibe.jpg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Kibe<br> R$8,00</strong></div>
            </div>
            <div class="empada">
                <a target="_blank" href="img_lights.jpg">
                    <img src="@/components/icons/salgados/empada.svg" alt="Northern Lights">
                </a>
                <div class="desc"><strong style="float: left;">Empada<br> R$6,00</strong></div>
            </div>
            <div class="quixe">
                <a target="_blank" href="img_lights.jpg">
                    <img src="@/components/icons/salgados/quixe.svg" alt="Northern Lights">
                </a>
                <div class="desc"><strong style="float: left;">Quiche<br> R$6,00</strong></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
}
div.galery_salgados{
    padding: 5px;
    display: flex;
    margin: 20px;
}

div.galery_salgados > .coxinha, .kibe, .empada, .quixe{
    padding: 5px;
    margin: 20px;
    border: solid 3px;
}
h3 > a{
    color: white;
}
h3 > a:hover{
    color: white;
}
</style>