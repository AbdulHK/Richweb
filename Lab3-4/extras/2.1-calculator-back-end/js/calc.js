var buttons = document.querySelectorAll(".flex-item");
var screen = document.querySelector("input[type=text]");
val1 = null;
val2 = null;

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onkeypress = function(e)
	 {
		input = this.innerHTML;

		if (input === "C") {
			screen.value = "";
			val1 = null;
			val2 = null;
			operator = "";
		} else if (input > -1 && input < 10 || input === ".") {

			if (val1 === null) {
				val1 = input;
			} else {
				val1 += input;
			}
			screen.value = val1;
		} else if (input === '=') {
			switch (operator) {
				case '+':
					val2 = parseFloat(val2) + parseFloat(val1);
					screen.value = val2;
					break;
				case '-':
					val2 = parseFloat(val2) - parseFloat(val1);
					screen.value = val2;
					break;
				case 'x':
					val2 = parseFloat(val2) * parseFloat(val1);
					screen.value = val2;
					break;
				case '÷':
					val2 = parseFloat(val2) / parseFloat(val1);
					screen.value = val2;
					break;
			}
		} else {
			if (val2 === null) {
				val2 = val1;
			}
			operator = input;
			val1 = "";
		}
	}
	buttons[i].onclick = function(e)
	 {
		input = this.innerHTML;

		if (input === "C") {
			screen.value = "";
			val1 = null;
			val2 = null;
			operator = "";
		} else if (input > -1 && input < 10 || input === ".") {

			if (val1 === null) {
				val1 = input;
			} else {
				val1 += input;
			}
			screen.value = val1;
		} else if (input === '=') {
			switch (operator) {
				case '+':
					val2 = parseFloat(val2) + parseFloat(val1);
					screen.value = val2;
					break;
				case '-':
					val2 = parseFloat(val2) - parseFloat(val1);
					screen.value = val2;
					break;
				case 'x':
					val2 = parseFloat(val2) * parseFloat(val1);
					screen.value = val2;
					break;
				case '÷':
					val2 = parseFloat(val2) / parseFloat(val1);
					screen.value = val2;
					break;
			}
		} else {
			if (val2 === null) {
				val2 = val1;
			}
			operator = input;
			val1 = "";
		}
	}
}

