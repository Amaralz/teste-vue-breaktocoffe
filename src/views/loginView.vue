<template>
    <header>
        <button @click="isOpen = true"> open</button>

    </header>

        <div class="container py-5 h-100 " v-if="isOpen">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;" >
                        <div class="card-body p-4" >
                            <form action="action.php" method="post" class="needs-valdiation">
                                <div class="img text-center">
                                    <img src="imagens/Group.svg" alt="">
                                </div>
                                <h3 class="mb-4 text-center">Faça seu login</h3>
                                <button @click="isOpen = false" class="backdrop-action"> X </button>
                                <div class="form-name mb-4 text-right">
                                    <label class="form-label">Email</label>
                                    <input type="name" id="typeLoginX-2" class="form-control-plaintext" name="name" required />
                                </div> 

                                <div class="invalid-feedback">
                                    crie o nome de usuário para fazer login!
                                </div>

                                <div class="form-password mb-4">
                                    <label class="form-label" for="typePasswordX-2">Password</label>
                                    <input type="password" id="password" class="form-control-plaintext" name="age" required />
                                    <span class="lnr lnr-eye"></span>
                                </div>

                                <div class="invalid-feedback">
                                    Digite sua senha de login
                                </div>

                                <div class="text-center mb-3">
                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Conectar</button>
                                </div>
                                <div class="btnSignin text-center mt-1 # ">
                                    <label for="form-label">Novo por aqui? <b><a href="tela_cadastro.html">Cadastre-se</a></b></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false)
</script>


<style scoped>
    .card-body input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
    color: #000000;
}
    .backdrop-action {
      background-color: #a0a2a39e !important;
      backdrop-filter: blur(3px);
    }
a {
    color: black;
}
#password{
border-radius: 0;
padding: 5px;
margin-bottom: 10px;
width: 100%;
box-sizing: border-box;
}
.lnr-eye {
position: absolute;
top: 290px;
right: 25px;
cursor: pointer;
}
</style>
