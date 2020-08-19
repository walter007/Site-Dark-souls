
function toDate(valor) {
    var ano = valor.substr(6, 4);
    var mes = valor.substr(3, 2);
    var dia = valor.substr(0, 2);
    var data = new Date(ano, mes-1, dia);
    return data;
}


function verificaDataAtual(){
    //////////////////////////////////////////////////////////////////
    //Valor passado da tela
    var data2 = document.getElementById('periodoFinal').value
    var valor = toDate(data2)
    //////////////////////////////////////////////////////////////////
    //Dia de hoje
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + "/" + mm + "/" + yyyy;    
    today = toDate(today);
    
    
    alert("Data da tela: " + valor);
    alert("Data de hoje: " + today);    
    
    if( valor.getTime() > today.getTime()){
        alert('Data final deve ser anterior ou igual a data do dia')
        return false;
    }
    return true;    
}
   
function verificaIntervalo(){

    var data1 = document.getElementById('periodoInicial').value;
    var data2 = document.getElementById('periodoFinal').value;
    var aux1 = toDate(data1)
    var aux2 = toDate(data2)  
     
    var aux3 = aux2.getTime() - aux1.getTime();

    if(aux1.getTime() > aux2.getTime()){
        alert('Data inicial deve ser anterior ou igual à data final.')
        return false;
    }
    if(aux3 / (24 * 60 * 60 * 1000) > 60){
        alert('Período deve igual ou inferior a 60 dias')
        return false; 
    }
    
    return true;
}

function validaDatas(){
    var data1 = document.getElementById('periodoInicial').value;
    var data2 = document.getElementById('periodoFinal').value;
    if(data1 == '' || data2 == ''){
        alert('Data deve ser informada')
        //return false;
    }
    
    if(!verificaDataAtual())
        return false;

    if(!verificaIntervalo())
        return false;
    
    return true;
}
