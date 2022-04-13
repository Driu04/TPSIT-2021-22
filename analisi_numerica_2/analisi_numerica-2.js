// Domanda 1
document.write("Domanda 1:");
document.write("<br>");
    
let range = 1000;
let divisibile = 0;
let max = 0;
let maxNum = 0;

for(let i=1; i<range; i++) {

    for(let j=1; j<i + 1; j++) {
        if (i % j == 0) 
            divisibile++; 
    }

    //document.write(parseInt(i)+ " " + parseInt(divisibile));
    //document.write("<br>");

    if (divisibile > max) {
        max = divisibile;
        maxNum = i;
    }
    divisibile = 0;
}

document.write("Numero: " + parseInt(maxNum) + " con " + parseInt(max) + " divisori ");


// Domanda 2
document.write("<br><br>Domanda 2:");
document.write("<br>");

let divisibili_2 = 0;
let divisibili_num = 0;
let a = 0;

for(let i=1; i<range; i++) {

    for(let j=1; j<i + 1; j++) {
        if (i % j == 0) {
            divisibili_2 = divisibili_2 + j;

            divisibili_num++;
        } 
        a = j;
    }


    //document.write(parseInt(i)+ " " + parseInt(divisibile));
    //document.write("<br>");

    if (divisibili_num == 2) {
        divisibili_2 = divisibili_2 - (a+1);
    }

    divisibili_num = 0;
}

document.write("Numero: " + parseInt(divisibili_2));


// Domanda 3
document.write("<br><br>Domanda 3:");
document.write("<br>");
    
let range2 = 2000;
let divisibile_3 = 0;
let max_3 = 0;
let maxNum_3 = 0;

for(let i=range; i<range2; i++) {

    for(let j=1; j<i + 1; j++) {
        if (i % j == 0) 
            divisibile_3++; 
    }

    if (divisibile_3 > max_3) {
        max_3 = divisibile_3;
        maxNum_3 = i;
    }
    divisibile_3 = 0;
}
document.write("Numero maggiore: " + parseInt(maxNum_3));
document.write("<br>Numero: " + parseInt(maxNum * maxNum_3));