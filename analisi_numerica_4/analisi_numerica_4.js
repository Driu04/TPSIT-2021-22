    
    var start = 10000;
    var range = 10100;
    let divisibile = 0;
    let cont = 0;
    let numPrimi = [];
    let moltiplicati = [];

    for(let i=start; i<range; i++) {
        for(let j=1; j<i + 1; j++) {
            if (i % j == 0) 
                divisibile++; 
        }

        if (divisibile == 2) {   // se il numero è primo    
            numPrimi[cont] = i;

            cont++;

            var div = document.createElement("div");
            div.className = 'dragme'
            div.innerHTML = parseInt(i);
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.backgroundColor = "lime";
            div.style.border = "2px solid black";
            document.body.appendChild(div);

            // $(document).ready(function () {
			// 	var mousex = 0, mousey = 0;
			// 	var divLeft, divTop;
			// 	$('.dragMe').mousedown(function(e)
			// 	{
			// 		var offset = $(this).offset();
			// 		divLeft = parseInt(offset.left);
			// 		divTop = parseInt(offset.top);
			// 		mousey = e.pageY;
			// 		mousex = e.pageX;
			// 		$(this).bind('mousemove',dragElement);
			// 	});

			// 	function dragElement(event)
			// 	{
			// 		var left = divLeft + (event.pageX - mousex);
			// 		var top = divTop + (event.pageY - mousey);
			// 		$(this).css(
			// 		{
			// 			'top' :  top + 'px',
			// 			'left' : left + 'px',
			// 			'position' : 'absolute'
			// 		});
			// 		return false;
			// 	}
			// 	$(document).mouseup(function()
			// 	{
			// 		$('.dragMe').unbind('mousemove');
			// 	});

			// });

        }
            
        divisibile = 0;  
    }

    let str = "";
    for (var i=0; i < numPrimi.length - 1; i++) {
        moltiplicati[i] = numPrimi[i] * numPrimi[i+1];
        str += moltiplicati[i] + "<br>";
    }

    document.getElementById("title").innerHTML="I numeri primi da " + start + " a " + range + " sono " + cont +": <br>";
    document.body.append(str);