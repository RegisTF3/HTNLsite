let Nome = document.getElementById("nome");
   let CPF = document.getElementById("cpf");
   CPF.addEventListener('keyup',formataCPF);
   let EMAIL = document.getElementById("email");
   EMAIL.addEventListener('keyup',formataEMAIL);
   let FONE = document.getElementById("fone");
   FONE.addEventListener('keyup',formataFONE);
   let CEP = document.getElementById("cep");
   CEP.addEventListener('keyup',formataCEP);
   let btEnviar = document.getElementById("botEnviar");
   btEnviar.addEventListener("click",verificar);

   function formataFONE(e){
    var v=e.target.value.replace(/\D/g,"");
    v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 
    v=v.replace(/(\d{5})(\d)/,"$1-$2");
    e.target.value = v;
   }

   function formataCPF(e){
    var v=e.target.value.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    e.target.value = v;
    }
   
   function formataEMAIL(e){
    var txtEmail = e.target.value;
    var RegEXp = /([a-z0-9.-]){2,}@([a-z0-9]{2,})(.[a-z]{2,})(.[a-z]{2,})?/gi;
     if(txtEmail.match(RegEXp) != null){
        alert('Email Válido');
    }
    else{
        alert('Email Inválido');
 
        e.target.value = "";
    }
    }
   
   function formataCEP(e){
    var v= e.target.value.replace(/\D/g,"")
    v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
    e.target.value = v;
   }

   function verificar(){

    if(Nome.value==""||CPF.value==""||EMAIL.value==""||FONE.value==""||CEP.value==""){
        alert("Favor preencher todos os campos!!!!")
        
    }
    else{
        if(verificarEmail()){
            alert("Dados enviados com sucesso!!!!")
        }
        
        
    }
    
}