$(document).ready(function () {    //Sempre que a pagina é carregada imprime os relatos ja feitos 
    let lista_inicial = JSON.parse(localStorage.getItem('lista-relatos') || '[]');
    for (let index = 0; index < lista_inicial.length; index++) {
        const element = lista_inicial[index];
        let likes = parseInt(element.like);
        $("#timeline").prepend(`
            <div>
                <h3> ${new Date(element.data)} - Relato </h3>
                <p>
                ${element.relato}
                </p>
                <p><input type="button" onclick="curtida()" value="Curtir"> Curtidas - ${likes}</p>     
            </div>         
        `);
    }
});

/*
function curtida(num){
    let lista_inicial = JSON.parse(localStorage.getItem('lista-relatos') || '[]');
    const element = lista_inicial[num];
    let likes = parseInt(element.like);
    likes = likes + 1;
    element.like = likes;
}*/


function enviarRelato() {
    var relato = $("#Relato").val();
    $("#Relato").val("");
    let date = new Date();
    var likes = 0;
    var lista_relatos = JSON.parse(localStorage.getItem('lista-relatos') || '[]');
    lista_relatos.push({
        data: date,
        relato: relato,
        like: likes
    });
    localStorage.setItem("lista-relatos", JSON.stringify(lista_relatos));
    //console.log('Salva com sucesso.');
    $("#timeline").prepend(`
        <div>
            <h3> ${date} - Relato </h3>
            <p>
            ${relato}
            </p>
            <p><input type="button" onclick="curtida()" value="Curtir"> Curtidas - ${likes}</p>
        </div>           
        `);
}