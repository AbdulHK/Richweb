//Abdulellah Hakim
//D12122837
//Rich Web Lab 2 Question 1
//create a calclutor front end using DOM API

// Create calculator container
    let calculator = document.createElement("div");
    calculator.setAttribute('id',"calculator");
    calculator.setAttribute('style',"width:250px; fontstyle;100%; border;1px solid; padding:10px; boarderRadius:7px; margin:0 auto 0 auto; fontFamily;Verdana;");
    document.body.appendChild(calculator);

    let input = document.createElement("input");
    input.setAttribute('type',"text");
    input.placeholder = "0"; 
    input.setAttribute('style',"fontSize:2em; textAlign:right; borderradius:5px; width:250px; height:35px; marginbottom: 10px; padding:1%;");

    calculator.appendChild(input);

    let flex_container = document.createElement("div");
    flex_container.setAttribute('id',"flex-container");
    flex_container.setAttribute('style',"display:inline-flex;justifyContent:space-between;");
    flex_container.style.flexFlow = "row wrap";
    calculator.appendChild(flex_container);

    var characters = ["(", ")", "±", "÷", "7", 
                      "8", "9", "x", "4", "5", 
                      "6", "-", "1", "2", "3", 
                      "+", "0", ".", "C", "="];

    for (let i = 0; i < characters.length; i++) {
      let button = createButton(characters[i]);
      flex_container.appendChild(button);
    }

    function createButton(character) {
      let button = document.createElement("button"); 
      button.className = "flex-item";
      button.innerHTML = character;
      button.style.borderRadius = "5px";
      button.style.width = "50px";
      button.style.textAlign = "center";
      button.style.padding = ".5em";
      button.style.fontSize = "1em";
      button.style.flexGrow = "1";
      button.style.margin = "0 5px 5px 0";
      return button;
    }