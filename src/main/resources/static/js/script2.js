
// ADD.HTML

const d = new Date();
document.getElementById("input4").value =(d.getDate()+"/"+ parseInt(d.getMonth()+1) +"/"+d.getFullYear());
  
    function input(){
        x1 = document.getElementById("input1").value 
        x2 = document.getElementById("input2").value 
        x3 = document.getElementById("input3").value
        x4 = document.getElementById("input4").value
        
        if(x1 === ""){
            document.getElementById("nome").innerHTML = "nome"   
            console.log("a1"); 
        }else{
            document.getElementById("nome").innerHTML = x1
            console.log("a2");
        }
        if(x2 === ""){
            document.getElementById("titulo").innerHTML = "Bom"
        }else{
            document.getElementById("titulo").innerHTML = x2
        }
        
        if(x3 === ""){
            document.getElementById("comentario").innerHTML = "Está incrivelmente perfeito."
        }else{
            document.getElementById("comentario").innerHTML = x3
        }

        if(x4 === ""){
            document.getElementById("dia").innerHTML = "01/01/2021"
        }else{
            document.getElementById("dia").innerHTML = x4
        }


        
    
        

    }


