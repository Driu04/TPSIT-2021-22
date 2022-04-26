
function analisiNum() {
    
    var range = parseInt(document.getElementById("s1").value);
    let divisibile = 0;
    let num_primi = "";

    if (range > 1)
        num_primi = "Numeri primi tra 1 e " + range + "" + ":<br>";

    for(let i=1; i<range; i++) {
        for(let j=1; j<i + 1; j++) {
            if (i % j == 0) 
                divisibile++; 
        }

        if (divisibile == 2)    // se il numero è primo    
            num_primi += i + "<br>";
            
        divisibile = 0;  
    }

    document.getElementById("prime_nums").innerHTML=num_primi;
}