let Matriz=[[1,2,3],[4,5,6],[7,8,9]];


function matrizOriginal(Matriz) { 
    console.log("Matriz Original");    
                                   
    for(let X=0, Y=0; X<3; X++)
    {

        console.log(Matriz[X][Y],
                    Matriz[X][Y+1],
                    Matriz[X][Y+2]);  
    }
}

function salida1(Matriz) {
    console.log("Salida 1");

    for(let X=2, Y=2; X>=0; X--) { 
    
        console.log(Matriz[X][Y],
                    Matriz[X][Y-1],
                    Matriz[X][Y-2]); 
                }
}

function salida2(Matriz) {
    console.log("Salida 2");

    for(let X=0,Y=0;Y<3;Y++)  { 
        console.log(Matriz[X][Y],
                    Matriz[X+1][Y],
                    Matriz[X+2][Y]); 
    }
}

function salida3(Matriz) {
    console.log("Salida 3");

    for(let X=2,Y=2;Y>=0;Y--) 
    {
        console.log(Matriz[X][Y],
                    Matriz[X-1][Y],
                    Matriz[X-2][Y]); 
    }
}

matrizOriginal(Matriz);

salida1(Matriz);

salida2(Matriz);

salida3(Matriz);