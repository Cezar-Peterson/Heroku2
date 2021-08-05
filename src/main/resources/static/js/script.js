let path_selected
let id_selected


const showModalDeletar = function(path,id){
    path_selected = path
    id_selected = id
	$('#modalDeletar').modal('show')

}

const deletar = function(){
    if(path_selected != "" && id_selected != ""){
        window.location.href='/' + path_selected + '/delete/' + id_selected

    }

}
x = 0
function scrollR(){
    
    document.getElementById("divCard").scrollBy({
        left:390,
        behavior:"smooth"
    })
}

function scrollL(){
    
    document.getElementById("divCard").scrollBy({
        left:-390,
        behavior:"smooth"
    })
}

function predio(){
    
    document.getElementById("divCard").scrollTo({
        left:0,
        behavior:"smooth"
    })
    document.getElementById("predio").classList.add("view")
    setTimeout(function(){
        document.getElementById("predio").classList.remove("view")
    }, 2000)

    
}


function jardim(){
    document.getElementById("divCard").scrollTo({
        left:0,
        behavior:"smooth"
    })
    document.getElementById("jardim").classList.add("view")
    setTimeout(function(){
        document.getElementById("jardim").classList.remove("view")
    }, 2000)
}

function monumento(){
    document.getElementById("divCard").scrollTo({
        left:410,
        behavior:"smooth"
    })
    document.getElementById("monumento").classList.add("view")
    setTimeout(function(){
        document.getElementById("monumento").classList.remove("view")
    }, 2000)
}

function predio2(){
    
    document.getElementById("divCard").scrollTo({
        left:820,
        behavior:"smooth"
    })
    document.getElementById("predio2").classList.add("view")
    setTimeout(function(){
        document.getElementById("predio2").classList.remove("view")
    }, 2000)
}

function predio3(){
    
    document.getElementById("divCard").scrollTo({
        left:1230,
        behavior:"smooth"
    })
    document.getElementById("predio3").classList.add("view")
    setTimeout(function(){
        document.getElementById("predio3").classList.remove("view")
    }, 2000)
}

function parque(){
    
    document.getElementById("divCard").scrollTo({
        left:1640,
        behavior:"smooth"
    })
    document.getElementById("parque").classList.add("view")
    setTimeout(function(){
        document.getElementById("parque").classList.remove("view")
    }, 2000)
}

function outros(){
    
    document.getElementById("divCard").scrollTo({
        left:2050,
        behavior:"smooth"
    })
    document.getElementById("outros").classList.add("view")
    setTimeout(function(){
        document.getElementById("outros").classList.remove("view")
    }, 2000)
}

