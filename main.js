function increaseFontSize (){
    document.querySelector("div").setAttribute("style", "font-size:50px;");
}
function deacreseFontSize (){
    document.querySelector("div").setAttribute("style", "font-size:15px;");
}

document.querySelector(".increase-size").onclick= increaseFontSize;
document.querySelector(".deacrese-size").onclick= deacreseFontSize;
