var modo =0;
$(document).ready(function(){
   
    $("#Dmode").on('click', function(){
        $('body').toggleClass("darkbody")
        $('header,section,div,p,footer,li a , bottom').toggleClass("darkmo")
            
        
    })


const btDir = document.getElementById("direita");
btDir.addEventListener("click",proximaImagen);
const btEsq = document.getElementById("esquerdo");
btEsq.addEventListener("click",voltarImagem);
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l5 = document.getElementById('l5');
const l6 = document.getElementById('l6');
const l7 = document.getElementById('l7');
const l8 = document.getElementById('l8');
const l9 = document.getElementById('l9');
const l10 = document.getElementById('l10');
const l11 = document.getElementById('l11');
const l12 = document.getElementById('l12');
const l13 = document.getElementById('l13');
const l14 = document.getElementById('l14');
const l15 = document.getElementById('l15');
const l16 = document.getElementById('l16');

function proximaImagen () {
   l1.src="image/livro14.png";
   l2.src="image/livro15.png";
   l3.src="image/livro16.png";
   l4.src="image/livro17.png";

   l5.src="image/livro18.png";
   l6.src="image/livro19.png";
   l7.src="image/livro20.png";
   l8.src="image/Livro21.png";

   l9.src="image/livro22.png";
   l10.src="image/livro23.png";
   l11.src="image/livro24.png";
   l12.src="image/livro25.png";

   l13.src="image/livro26.png";
   l14.src="image/livro27.png";
   l15.src="image/livro28.png";
   l16.src="image/livro29.png";
   }
   function voltarImagem (){
    l1.src="image/liv1.png";
    l2.src="image/liv2.png";
    l3.src="image/liv3.png";
    l4.src="image/liv4.png";

    l5.src="image/livr1.png";
    l6.src="image/livr2.png";
    l7.src="image/livr3.png";
    l8.src="image/livr4.png";

    l9.src="image/livro5.png";
    l10.src="image/livro6.png";
    l11.src="image/livro7.png";
    l12.src="image/livro8.png";

    l13.src="image/livro9.png";
    l14.src="image/livro10.png";
    l15.src="image/livro11.png";
    l16.src="image/livro12.png";
   }



   let txtNome = document.getElementById("nome");
   let txtCpf = document.getElementById("cpf");
   txtCpf.addEventListener('keyup',formatarCPF);
   let txtEmail = document.getElementById("email");
   txtEmail.addEventListener('keyup',formatarEmail);
   let txtFone = document.getElementById("fone");
   txtFone.addEventListener('keyup',formatarTelefone);
   let txtCep = document.getElementById("cep");
   txtCep.addEventListener('keyup',formatarCep);
   let botEnviar = document.getElementById("botEnviar");
   botEnviar.addEventListener("click",verificar);

function formatarCPF(e){
   var v=e.target.value.replace(/\D/g,"");
   v=v.replace(/(\d{3})(\d)/,"$1.$2");
   v=v.replace(/(\d{3})(\d)/,"$1.$2");
   v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
   e.target.value = v;
}

function formatarTelefone(e){
   var v=e.target.value.replace(/\D/g,"");
   v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 
   v=v.replace(/(\d{5})(\d)/,"$1-$2");    
   e.target.value = v;
}
function formatarCep(e){
   var v= e.target.value.replace(/\D/g,"")                
   v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
   e.target.value = v;
}
function formatarEmail (e){
   var txtEmail = e.target.value;
   var RegExp = /([a-z0-9\.\-]){2,}@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/gi;

   if(txtEmail.match(RegEXp) != null){
       alert('Email Válido');
   }
   else{
       alert('Email Inválido');

       e.target.value = "";
   }
}
function verificar()
{

    if(txtNome.value==""||txtCpf.value==""||txtEmail.value==""||txtFone.value==""||txtCep.value==""){
        alert("Favor preencher todos os campos!!!!")
        
    }
    else{
        if(verificarEmail()){
            alert("Dados enviados com sucesso!!!!")
        }
        
        
    }
    
}


})