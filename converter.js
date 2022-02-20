function convert(){
    var inputType = document.getElementById("Type");
    var typeValue = inputType.value;
    
        if (typeValue =="kg"){
        var kilogram= PoundToKg();
        return document.getElementById("result").value = kilogram + " Kg";
        }
        else{
        var pound=KgToPound();
        return document.getElementById("result").value = pound + " lb";
        }
    }
    function PoundToKg(){
        var con=document.getElementById("val").value;
        return con*0.4536;
    }
    function KgToPound(){
        var con=document.getElementById("val").value;
        return con*2.2046;  
    }
   