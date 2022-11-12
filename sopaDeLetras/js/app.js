document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    pintaPalabra()
}

function pintaPalabra(){

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

    for(let i = 0; i < arr.length; i++ ){
        const palabra = document.querySelectorAll(`.palabra${arr[i]}`)

        palabra.forEach(function(palabra){
            palabra.onclick = function(){
                palabra.classList.add('palabra-selected');
            }
        })
    }
}