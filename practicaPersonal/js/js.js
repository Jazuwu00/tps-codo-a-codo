

function cambiarColor(){
    var element=document.getElementById("miTexto");
   element.style.color="#907";
}

let ubicacionPrincipal=window.pageYOffset; //0(sin desplazamiento)
  AOS.init();
window.addEventListener ("scroll", function(){
    let desplazamientoActual=window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName ("nav")[0].style.top="@px"
    }else{
         document.getElementsByTagName ("nav") [0].style.top="-100px"
    }
    ubicacionPrincipal= desplazamientoActual; 
    })
