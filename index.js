var usd = 0;
var rub = 0;
var uep = 0;
var uah = 0;
$.get("https://www.cbr-xml-daily.ru/daily_json.js", function(data){
	kursvalyut = JSON.parse(data);
	console.log(kursvalyut.Valute);
	usd = kursvalyut.Valute.USD.Value;
	uep = usd / 1.15;
	uah  = kursvalyut.Valute.UAH.Value / kursvalyut.Valute.UAH.Nominal
});
$("#okbtn").click(function(){
	var moneys1 = $("#moneys1").find(":selected").text();
	var moneys2 = $("#moneys2").find(":selected").text();
	var moneyval = $("#moneyval").val();
	if (moneys1 == "USD"){
		if (moneys2 == "RUB"){
			console.log(moneyval + " and " + usd)
			$("#convresult").text(moneyval * usd)
		}
		if (moneys2 == "UEP"){
			console.log(moneyval + " and " + uep)
			$("#convresult").text(1.15 * moneyval)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval * usd / uah)
		}
	}
	if (moneys1 == "RUB"){
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / usd)
		}
		if (moneys2 == "UEP"){
			$("#convresult").text(moneyval / usd / 1.15)
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval / uah)
		}
	}
	if (moneys1 == "UEP"){
		if (moneys2 == "UEP"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval * usd / 1.15)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / 1.15)
		}
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval * usd / 1.15 / uah)
		}
	}
	if (moneys1 == "UAH"){
		if (moneys2 == "UAH"){
			$("#convresult").text(moneyval)
		}
		if (moneys2 == "RUB"){
			$("#convresult").text(moneyval * uah)
		}
		if (moneys2 == "USD"){
			$("#convresult").text(moneyval / usd * uah) 
		}
		if (moneys2 == "UEP"){
			$("#convresult").text(moneyval / usd / 1.15 * uah)
		}
	}
});