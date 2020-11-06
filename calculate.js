function Bill_Calculate()
        {
			let x =document.getElementById("unit").value ;
			
			if(x < 30)
			{
				document.getElementById("result").innerHTML=Number(x)*7.85+" Rs";
			}
			else if(x <= 60)
			{
				var result=235.50+(Number(x)-30)*7.85;
				document.getElementById("result").innerHTML=result+" Rs";
			}
			else if(x <= 90)
			{
				var result=471+(Number(x)-60)*10;
				document.getElementById("result").innerHTML=result+" Rs";
			}
			else if(x <= 120)
			{
				var result=771+(Number(x)-90)*27.75;
				document.getElementById("result").innerHTML=result+" Rs";
			}
			else
			{
				document.getElementById("result").innerHTML=1603.50+(Number(x)-120)*32.48+" Rs";
				
			}
		}
		
