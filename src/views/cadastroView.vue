<template>
    <section class="vh-100" style="background-color: #525151;">
        <div class="container py-2 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-3 m-0">
                            <div class="img text-center">
                                <img src="imagens/Group.svg" alt="">
                            </div>
                            <h3 class="mb-0 text-center" style="font-size: 25px;">Faça seu cadastro</h3>

                            <form class="row mt-0 g-2 needs-validation">

                                <div class="form-name mb-0 text-right">
                                    <label class="form-label">Nome de usuário</label>
                                    <input type="text" id="typeLoginX-2" placeholder="Crie seu nome de usuário"
                                        class="form-control-plaintext" required />
                                    <div class="invalid-feedback">
                                        crie o nome de usuário para fazer login!
                                    </div>
                                </div>

                                <div class="form-sobrenome mb-0 text-right">
                                    <label class="form-label">Nome completo</label>
                                    <input type="text" id="typeNameX-2" placeholder="Insira seu nome completo"
                                        class="form-control-plaintext" required />
                                    <div class="invalid-feedback">
                                        Preencha o campo com seu nome completo!
                                    </div>
                                </div>

                                <div class="form-Email mb-0 text-right">
                                    <label class="form-label">Email</label>
                                    <input type="email" id="typeEmailX-2" placeholder="example@email.com"
                                        class="form-control-plaintext" required />
                                    <div class="invalid-feedback">
                                        Prencha o campo com seu email(formato:email@email.com)
                                    </div>
                                </div>

                                <div class="form-Email mb-0 text-right">
                                    <label class="form-label">Data de nascimento</label>
                                    <input type="date" id="typeDateX-2" class="form-control-plaintext" required />
                                    <div class="invalid-feedback">
                                        Escolha a sua data de nascimento clicando no calendário
                                    </div>
                                </div>

                                <div class="form-Email mb-0 text-right">
                                    <label class="form-label">Senha</label>
                                    <div id="teste">
                                        <input type="password" id="password"
                                        placeholder="min: 8 digitos Exemplo: Abc12345678 "
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="form-control-plaintext"
                                        required />
                                        <span class="lnr lnr-eye"></span>
                                    </div>
                                    
                                    <div class="invalid-feedback">
                                        Digite sua senha de login
                                    </div>
                                </div>

                                <div class="form-outline mb-2">
                                    <div class="input-password mb">
                                        <label class="form-label" for="typePasswordX-2">Confirmar senha</label>
                                    </div>
                                    <input type="password" id="confirm_password"
                                        placeholder="Insira sua senha novamente"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="form-control-plaintext"
                                        required />
                                    <div class="invalid-feedback">
                                        Digite sua senha novamente
                                    </div>
                                </div>

                                <div class="text-center mb-3">
                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    var password = document.getElementById("password")
            , confirm_password = document.getElementById("confirm_password");

        function validatePassword() {
            if (password.value != confirm_password.value) {
                confirm_password.setCustomValidity("Senhas diferentes!");
            } else {
                confirm_password.setCustomValidity('');
            }
        }
        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;

        let btn = document.querySelector('.lnr-eye');
        btn.addEventListener('click', function() {
        let input = document.querySelector('#password');
        if(input.getAttribute('type') == 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
        });
</script>

<style scoped>
    .card-body input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
    color: #000000;
}
a {
    color: black;
}
#teste{
    position: relative;
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
    top: 5px;
    right: 10px;
    cursor: pointer;
}
</style>