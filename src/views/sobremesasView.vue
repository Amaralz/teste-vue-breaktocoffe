<template>
    <div class="main-galery">
        <h4 style="margin: 10px;"><strong>Sobremesas</strong><br> -Tortas</h4>
        <div class="galery_sobremesas">
            <div class="torta_choc">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="@/components/icons/sobremesas/torta_de_chocolate.svg">
                </a>
                <div class="desc"><strong style="float: left;">Torta de chocolate <br>R$3,00</strong></div>    
            </div>
            <div class="torta_morango">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/torta_de_mulago.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;" >Torta de morango <br> R$8,00</strong></div>
            </div>
            <div class="torta_limao">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/torta_de_limao.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;" >Torta de limão <br> R$8,00</strong></div>
            </div>
            <div class="cupcake">
                <a target="_blank" href="img_lights.jpg">
                    <img src="@/components/icons/sobremesas/cupcake.svg" alt="Northern Lights">
                </a>
                <div class="desc"><strong style="float: left;">Cupcake <br> R$6,00</strong></div>
            </div>
        </div>
        <h4 style="margin-left: 1%;">-Sorvetes</h4>    
        <div class="galery_sorvete">
            
            <div class="svt_morango">
                
                <a target="_blank" href="img_5terre.jpg">
                    <img src="@/components/icons/sobremesas/sorvete_de_morago.svg">
                </a>
                <div class="desc"><strong style="float: left;">Sorvete de morango <br> R$6,00</strong></div>
            </div>
            <div class="svt_maracuja">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/sorvete_de_maracuja.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Sorvete de maracujá <br> R$6,00</strong></div>
            </div>
        </div>
        <h4 style="margin-left: 1%">-Milk Shakes</h4>
        <div class="galery_milkshake">
            
            <div class="milke_maracuja">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="@/components/icons/sobremesas/milkshake_de_maracuja.svg">
                </a>
                <div class="desc"><strong style="float: left;">Milkshake de maracujá <br> R$6,00</strong></div>
            </div>
            <div class="milke_oreo">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/milkshake_de_oreo.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Milkshake de oreo <br> R$6,00</strong></div>
            </div>
            <div class="milke_morango">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/milkshake_de_morango.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Milshake de morango <br> R$6,00</strong></div>
            </div>
        </div>
        <h4 style="margin-left: 1%">-Doces</h4>
        <div class="galery_doces">
            
            <div class="doce_morango">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="@/components/icons/sobremesas/doce_de_morango.svg">
                </a>
                <div class="desc"><strong style="float: left;">Doce de morango<br> R$6,00</strong></div>3
            </div>
            <div class="trufa">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/trufaa.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Trufa <br> R$6,00</strong></div>
            </div>
            <div class="brownie">
                <a target="_blank" href="imagens/cappucino.svg">
                    <img src="@/components/icons/sobremesas/brownie.svg" alt="Forest">
                </a>
                <div class="desc"><strong style="float: left;">Brownie <br> R$6,00</strong></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    }

div.galery_sobremesas, .galery_sorvete, .galery_milkshake, .galery_doces {
    padding: 5px;
    display: flex;
}

div.galery_sobremesas > .torta_choc, .torta_morango, .cupcake, .torta_limao{
    padding: 5px;
    margin: 20px;
    border: solid 3px;
    
}
div.galery_sorvete > .svt_morango, .svt_maracuja{
    
    padding: 5px;
    margin: 20px;
    border: solid 3px;
}
div.galery_milkshake > .milke_maracuja, .milke_oreo, .milke_morango{
    
    padding: 5px;
    margin: 20px;
    border: solid 3px;
}
div.galery_doces > .doce_morango, .trufa, .brownie{
    
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