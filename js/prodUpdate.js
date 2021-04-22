// Referencias do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');

const btnUpdate = document.getElementById('btnUpdate');


//Código
let data , desc;

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

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
        Swal.fire('Código não digitado!')
    }else{
        api.put('produtos/' + codPro, data).then(resp=>{
            console.log('Alteração Realizada !!!');
        }).catch(err => console.log('Erro ao realizar a alteração!'));
    }
}

inpCod.addEventListener('keyup',()=>{
    let codPro = inpCod.value;
    if (codPro == ''){
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
                    //inp.value = data[0].datahora;
                }

           });        
    };
   
});