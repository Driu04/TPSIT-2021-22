
    
    var range = 100;
    let divisibile = 0;
    let cont = 0;

    for(let i=1; i<range; i++) {
        for(let j=1; j<i + 1; j++) {
            if (i % j == 0) 
                divisibile++; 
        }

        if (divisibile == 2) {   // se il numero è primo    
            cont++;

            var div = document.createElement("div");
            div.className = 'dragme'
            div.innerHTML = parseInt(i);
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.backgroundColor = "yellow";
            div.style.border = "2px solid black";
            document.body.appendChild(div);

            $(document).ready(function ()
			{
				var mousex = 0, mousey = 0;
				var divLeft, divTop;
				$('.dragMe').mousedown(function(e)
				{
					var offset = $(this).offset();
					divLeft = parseInt(offset.left);
					divTop = parseInt(offset.top);
					mousey = e.pageY;
					mousex = e.pageX;
					$(this).bind('mousemove',dragElement);
				});

				function dragElement(event)
				{
					var left = divLeft + (event.pageX - mousex);
					var top = divTop + (event.pageY - mousey);
					$(this).css(
					{
						'top' :  top + 'px',
						'left' : left + 'px',
						'position' : 'absolute'
					});
					return false;
				}
				$(document).mouseup(function()
				{
					$('.dragMe').unbind('mousemove');
				});

			});

        }
            
        divisibile = 0;  
    }

    document.getElementById("title").innerHTML="I numeri primi da 1 a 100 sono "  + cont +": <br>";
