var num_clicks= 3;

function nuevo_click() {
    num_clicks++;
    var span_clicks = document.querySelector("h3 span");
    span_clicks.innerText = num_clicks;
}