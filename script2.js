var num_clicks= 9;

function nuevo_click() {
    num_clicks++;
    var span_clicks = document.querySelector("h3 span");
    span_clicks.innerText = num_clicks;
}

var num_like= 12;

function nuevo_like() {
    num_like++;
    var span_clicks = document.querySelector(".tarjeta3 h3 span");
    span_clicks.innerText = num_like;
}

var num_amigo= 9;

function nuevo_amigo() {
    num_amigo++;
    var span_clicks = document.querySelector(".tarjeta4 h3 span");
    span_clicks.innerText = num_amigo;
}


/*function like (elemento){
    let num_likes = parseInt(elemento.closest('.likes_btn').querySelector('.like').innerHTML);
    num_likes++;
    console.log(num_likes)

    closest() busca el elemento mas cercano con la clase o id que le 
    asignemos a los parametros

    parseInt()convierte un elemento de tipo string a number "1" > 1
*/

/* function like1(){
    let numeriString = document.querySelector('like1');
    */