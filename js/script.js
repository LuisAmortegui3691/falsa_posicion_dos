function myFunction(sw)
{
	var a = document.getElementById("input-a").value;
	var b = document.getElementById("input-b").value;
	var fa = document.getElementById("input-fa").value;
	var fb = document.getElementById("input-fb").value;

	let resultadofa = resultFa(a,b);
	let resultadofb = resultFb(a,b);

	if(sw != 0)
	{
		var valorfa = document.getElementById("input-fa").value = resultadofa;
		var valorfb = document.getElementById("input-fb").value = resultadofb;

		let x = ((a * valorfb) - (b * valorfa)) / (valorfb - valorfa);

		x = document.getElementById("input-x").value = x;

		var a = document.getElementById("input-a").value;
		var b = document.getElementById("input-b").value;
		c = 0;

		var text1 = "<ul>";

		for (var i = 0; i < 1.778329562279839; i=x) 
		{
				c ++;
				x = ((a * valorfb) - (b * valorfa)) / (valorfb - valorfa);	
				a = x;
				valorfa = Math.pow(a,2) - (6.8*(Math.pow(a,1.01))) + 9;
				valorfb = Math.pow(b,2) - (6.8*Math.pow(b,1.01)) + 9;				

				text1 += "<li>x<sub>" + c + "</sub> = " + x + "</li>";
 
		}	

		text1 += "</ul>";

		document.getElementById("demo").innerHTML = text1;	

		document.getElementById("demo1").innerHTML = "El valor aproximado es " + x + 
										" a continuacion se muestra la iteracion para que se muestren todos los" +
										" resultados hasta llegar a la raiz";	

	}
	else
	{
			document.getElementById("input-a").value = "";
			document.getElementById("input-b").value = "";
			document.getElementById("input-fa").value = "";
			document.getElementById("input-fb").value = "";
			document.getElementById("input-x").value = "";
	}	


}

function resultFa(a,b)
{
	let resultfa = Math.pow(a,2) - (6.8*(Math.pow(a,1.01))) + 9;

	return resultfa;
}

function resultFb(a,b)
{
	let resultfb = Math.pow(b,2) - (6.8*Math.pow(b,1.01)) + 9;

	return resultfb;
}

