/* Se nombra una var y se le agregan diversos archivos adentro a los cuales tienen asignados un orden, ya que los separa su coma. */
var matkat = [
    "cutiecat.gif",
    "cybercat.gif",
    "fattybaby.gif",
    "madbaby.gif",
    "rolling.gif" ,
    "hi.gif",
]
/*Se nombra y identifica a un elemento como elemento del boton "btct" el cual se relacionara con el HTML, ya que este es el boton.*/ 
var btct= document.querySelector("button"); 
/*Se nombra otro elemento html como img para identificarle como imagen*/
var img = document.querySelector ("img");
/*se llama a un numero contable y se le asigna un numero, que son la cantidad ordenada de imagenes que se encuentran seleccionadas en VAR*/
var counter = 1;

/*Al boton se le agrega un desencadenador de eventos, en donde previo a su activacion debe suceder algo, en este caso un click y se abre funcion*/
btct.addEventListener("click", function(){
    /*se nombra un if con counter ya que el VAR tiene un numero finito de imagenes a mostrar, por lo que se le asigna un loop*/
    if(counter===6){
        counter=0;
    }
/*Se llama un string de imagenes y se le identifica con la var matkat y se le asigna una accion contable*/
img.src = matkat [counter] 
/*Nuevamente se le asigna el atributo a counter de siempre aumentar la cantidad de imagenes a desplegar sumandole +1*/
counter = counter + 1;
});

