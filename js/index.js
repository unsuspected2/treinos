        // conteudo header
let headder = document.getElementById("headder");
let conteudoheadder = `   <header>
        <div class="logoTopo">
                <img src="css/imagens/LOGOff.png" >
        </div>
        
        <div class="linksTopo">
            <a id="LinkNormal" href="index.html"> Início </a>
            <a id="LinkNormal" href="entretenimento.html"> Entretenimento </a>
            <a href="sobre.html"><button> Sobre </button></a>
        </div>
        </header>`;
headder.innerHTML= conteudoheadder;

        // fim conteudo header
let foooter = document.getElementById("foooter");
let conteudofooter = ` <footer>
<div class="formularioFooter">
   
    <p id="deixeEmail"> Deixe seu email para estar ligado nas novidades dos novos serviços !!</p>
    <p id="avisoFormulario"></p>
    <input id="espacoEmail" type="email" placeholder="Clique aqui para inserir seu Email" required>
    <br>
    <input onclick="EnviarFormulario()" id="enviarFormulario" type="submit" value="Enviar">
</div>
<p> © 2022 </p>
</footer>`;
foooter.innerHTML=conteudofooter;
        // fim conteudo footer

        
        function EnviarFormulario() {

                let pAvisoFormulario = document.getElementById("avisoFormulario");
                pAvisoFormulario.innerHTML = "Formulario indisponível";
                pAvisoFormulario.style.color='red';

        }
