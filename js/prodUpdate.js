// Referencias do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');

const lblDatahora = document.getElementById('lblDatahora');

const btnUpdate = document.getElementById('btnUpdate');
const btnConsult = document.getElementById('btnConsult');


//Código
let data , desc;

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
});



document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
});

btnUpdate.onclick = ()=>{
    let codPro = inpCod.value;
    let nome = inpNome.value;
    let desc = inpDesc.value;
    let qtda = inpQtda.value;
    let fab = inpFab.value;

    data = { 
        'nome': nome,
        'descri': desc,
        'qtda':qtda,
        'fabricante':fab
    };

    if (codPro == ''){
        limparCampos();
        Swal.fire('Código não digitado!');
        
    }else{
        api.put('produto/' + codPro, data).then(resp=>{
            limparCampos();
            Swal.fire('Alteração Realizada !!!');
        }).catch(err => console.log('Erro ao realizar a alteração!'));
    }
}

btnConsult.onclick = ()=>{

    let codPro = inpCod.value;
    if (codPro == ''){
        limparCampos();
        Swal.fire('Código não digitado!');
    }else{ 
                api.get('produto/' + codPro).then(res=>{
                const data = res.data;
                // console.log('Número de registro = '+ data.length); // exibe o número de registros da consulta

                if (data.length > 0){
                    inpNome.value = data[0].nome;
                    inpDesc.value = data[0].descri;
                    inpQtda.value = data[0].qtda;
                    inpFab.value = data[0].fabricante;
                    lblDatahora.innerHTML = data[0].datahora;
                }

           });        
    };
};

function limparCampos(){
    inpCod.value = '';
    inpNome.value = '';
    inpDesc.value = '';
    inpQtda.value = '';
    inpFab.value = '';
    lblDatahora.innerHTML = '';
    inpCod.focus();
}
    
   
