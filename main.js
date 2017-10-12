"use strict";

var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

var ReadOut = document.getElementById('editWide');


// обработчик нажатия 
// цифровой кнопки
function NumPressed (Num) 
{
		if (FlagNewNum) 
		{
			ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (ReadOut.value == "0")
				ReadOut.value = Num;
			else
				ReadOut.value += Num;
		}

}
	
// обработчик нажатия
// кнопки действия
function Operation (Op) 
{
		var Readout = ReadOut.value;
		if (FlagNewNum && PendingOp != "=")
		{
			ReadOut.value = Currents;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			ReadOut.value = Currents;
			PendingOp = Op;
		}
}
	
// добавление десятичной точки с числу
function Decimal () 
{
		var curReadOut = ReadOut.value;
		if (FlagNewNum) 
		{
			curReadOut = "0.";
			FlagNewNum = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1)
				curReadOut += ".";
		}
		ReadOut.value = curReadOut;
}
	
// Очистка текущего результата
function ClearEntry () 
{
		ReadOut.value = "0";
		FlagNewNum = true;
}
	
// Полная очистка всех результатов
function Clear () 
{
		Currents = 0;
		PendingOp = "";
		ClearEntry();

}



// меняем знак текущего результата
function Neg () 
{
		ReadOut.value = 
		parseFloat(ReadOut.value) * -1;
}
	
// вычисляем значение процентов
function Percent () 
{
		ReadOut.value = 
			(parseFloat(ReadOut.value) / 100) * 
			parseFloat(Currents);
}