var dibujo = document.getElementById('papel');
var lienzo = dibujo.getContext('2d');
dibujo.addEventListener("mousedown", dameTinta);
dibujo.addEventListener("mousemove",moverMouse);
dibujo.addEventListener("mouseup", noMeDesTinta);

var colorsito = "green";
var tamano = 5;
var mousePresionado= false;

var botonsito=
{
    IZQUIERDO:1,
    DERECHO:2
};



function dameTinta(tinta)
{
    mousePresionado=true;
    console.log(tinta.clientX);

}

function moverMouse(evento)
{
    var color = colorsito;
    var x = evento.clientX -10;
    var y = evento.clientY-235;
    // los valores que restan a la variable -10 y -235 es un numero de correcion para que el
    // dibujo comience en todo el centro del lienzo


    if (mousePresionado)
     {
         lienzo.fillStyle = color;
    	 lienzo.fillRect(x,y,tamano, tamano);
    }

}

function noMeDesTinta()
{
    mousePresionado = false
}
