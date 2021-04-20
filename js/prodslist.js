// Referências do DOM HTML

const tbodyList = document.getElementById('tbodyList');

// Código

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

function listAll(){
    console.log('Consulta de dados....');
    
    api.get('produtos').then(res=>{
        console.log('Realizando a consulta ....');
        const data = res.data;
        let i, tr;
      
        for(i=0; i < data.length; i++){
            tr = '<tr>' +
                    '<td>' + data[i].cod + '</td>' +
                    '<td>' + data[i].nome + '</td>' +
                    '<td>' + data[i].descri + '</td>' +
                    '<td>' + data[i].qtda + '</td>' +
                    '<td>' + data[i].fabricante + '</td>' +
                    '<td>' + data[i].datahora + '</td>' +
                 '</tr>';
            tbodyList.innerHTML += tr;
            tr = tbodyList.childNodes;
        }
        
    });

}

listAll();
