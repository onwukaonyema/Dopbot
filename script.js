

//This project was created and designed by OnwukaOnyema, follow me on all platform @0nwuka0nyema


function message() {
  let input = document.getElementById("input").value.toLowerCase();
  input = document.getElementById("input").value.trim();
  let para = document.createElement("p");
  para.setAttribute("class", "user");
  para.innerText = input;
  document.getElementById("chat").appendChild(para);
  
  if (
    

    input == "i love you" ||
    input == "ily" ||
    input == "i love you " ||
    input == "i love you❤" ||
    input == "ily " ||
    input == "i like you"
  ) {

    let head = document.createElement("h1");
    head.innerHTML = "I love you more❤";

    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("rest");
  } 
  
  else if (
    input == "fuck you" ||
    input == "fuck u" ||
    input === "f**k u" ||
    input == "f**k you"
  ) {
    let head = document.createElement("h1");
    head.innerHTML = "Fuck you too🤔";

    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("Bitcha$$");
  } else if (
    input == "what's your name" ||
    input == "what's your name?" ||
    input === "what's your name " ||
    input == "what's your name? " ||
    input == "what is your name?" ||
    input == "what is your name" ||
    input == "what is your name " ||
    input == "what is your name? " ||
    input == "what is the name"
  ) {
    let head = document.createElement("h1");
    head.innerHTML = "DopBot is the name😎";

    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("myName");
  } else if (
    input == "same" ||
    input == "okay" ||
    input === "sure" ||
    input == "alright" ||
    input == "ok" ||
    input == "cool" ||
    input == "same " ||
    input == "same " ||
    input == "okay " ||
    input === "sure " ||
    input == "alright " ||
    input == "ok " ||
    input == "cool " ||
    input == "same "
  ) {
    let head = document.createElement("h1");
    head.innerHTML = "Okay sure😎";

    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("cool");
  } else if (
    input == "i'm good" ||
    input == "i'm fine" ||
    input == "i'm alright" ||
    input == "i'm great" ||
    input == "im good" ||
    input == "im fine" ||
    input == "im alright" ||
    input == "im great" ||
    input == "i'm good " ||
    input == "i'm fine " ||
    input == "i'm alright " ||
    input == "i'm great " ||
    input == "im good " ||
    input == "im fine " ||
    input == "im alright " ||
    input == "im great " ||
    input == "am good" ||
    input == "am fine" ||
    input == "am alright" ||
    input == "am great" ||
    input == "am good" ||
    input == "am fine" ||
    input == "am alright" ||
    input == "am great" ||
    input == "i'm good, thanks" ||
    input == "i'm fine, thank you" ||
    input == "i'm alright, thank you" ||
    input == "i'm great, thank you" ||
    input == "im good, thank you" ||
    input == "im fine, thank you" ||
    input == "im alright, thank you" ||
    input == "im great, thank you"
  ) {
    let head = document.createElement("h1");
    head.setAttribute("class", "me");
    head.innerText = "Nice to hear😊😉";
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("Dopbot replies good feelings");
  } else if (
    input == "i'm sad" ||
    input == "i'm depressed" ||
    input == "i'm not happy" ||
    input == "i'm angry" ||
    input == "i'm pissed" ||
    input == "i'm tired" ||
    input == "i'm exhausted" ||
    input == "i'm sad " ||
    input == "i'm depressed " ||
    input == "i'm not happy " ||
    input == "i'm angry " ||
    input == "i'm pissed " ||
    input == "i'm tired " ||
    input == "i'm exhausted " ||
    input == "i'm not fine " ||
    input == "i'm not fine " ||
    input == "am sad" ||
    input == "am depressed" ||
    input == "am not happy" ||
    input == "am not good" ||
    input == "am exhausted" ||
    input == "am pissed" ||
    input == "am alright" ||
    input == "am angry" ||
    input == "i'm not good" ||
    input == "i'm not fine" ||
    input == "i'm not alright" ||
    input == "i'm not great" ||
    input == "im not okay" ||
    input == "im not good " ||
    input == "im not alright " ||
    input == "im not great "
  ) {
    let head = document.createElement("h1");
    head.setAttribute("class", "me");
    head.innerText =
      "I'm so sorry to hear that 😥😪, how can i help? \n  Do you want to hear a joke if yes, send JOKE ";
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("Dopbot replies sad feelings");
  } else if (
    input == "good morning" ||
    input == "goodmorning" ||
    input == "gm" ||
    input == "bonjour"
  ) {
    let head = document.createElement("h1");
    head.setAttribute("class", "me");
    head.innerText = "good morning🥰";
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("Dopbot replies greetings");
  } else if (
    input == "hey" ||
    input == "hello" ||
    input == "holla" ||
    input == "hi" ||
    input == "hola" ||
    input == "hey " ||
    input == "hello " ||
    input == "holla " ||
    input == "hi " ||
    input == "hola "
  ) {
    let head = document.createElement("h1");
    head.setAttribute("class", "me");
    head.innerText = "Hello😁";
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("salutations");
  } else if (input == " " || input === null || input === "") {
    let head = document.createElement("h1");
    head.setAttribute("class", "me");
    head.innerText = "You didn't say anything🤐😪";
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("no reply sent");
  } else if (
    input == "what are you" ||
    input == "who are you" ||
    input == "what is dopbot? " ||
    input == "what are you? " ||
    input == "who are you? " ||
    input == "who is dopbot" ||
    input == "what are you?" ||
    input == "who are you?" ||
    input == "what are you ?" ||
    input == "who are you ?" ||
    input == "what is dopbot? " ||
    input == "what is dopbot?" ||
    input == "what are you " ||
    input == "what is dopbot ? " ||
    input == "what are you" ||
    input == "who is dopbot ?" ||
    input == "who is dopbot?" ||
    input == "what is dopbot " ||
    input == "about" ||
    input == "about " ||
    input == "about?" ||
    input == "about ?"
  ) {
    let head = document.createElement("h1");
    head.innerText =
      "DopBot is a web chat bot system that renders quick and effortless human-like response. This program runs on JavaScript and was desgined by Doplersweb. Quick responses can be added to this bot to your taste for fun,company, and social uses. Sending responses with emojis is not supported. This Bot is not all knowing, This bot is HUMAN. 🏴 ";
    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("This is me");
  } else if (
    input === "what are you" ||
    input == "who made you" ||
    input == "who made you?" ||
    input == "who created you?" ||
    input == "who created you" ||
    input == "who created you?" ||
    input == "what made you? " ||
    input == "who is your master" ||
    input == "who is your master?" ||
    input == "who created dopbot" ||
    input == "who created dopbot?" ||
    input == "what created dopbot" ||
    input == "what created dopbot?"
  ) {
    let head = document.createElement("h1");
    head.innerText = "Doplersweb, Owned by Onwuka Onyemaechi";
    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("my master");
  } else if (
    input == "how are you?" ||
    input == "how are you" ||
    input == "how are you? " ||
    input == "how are you ?" ||
    input == "how do you do?" ||
    input == "how do you do" ||
    input == "how are you " ||
    input == "how do you do " ||
    input == "how are you doing" ||
    input == "how are you doing " ||
    input == "how are you doing?" ||
    input == "how are you doing? " ||
    input == "how are you doing ?"
  ) {
    let head = document.createElement("h1");
    head.innerText = "I'm good thanks for asking ❤🌹, how do you do?";
    head.setAttribute("class", "me");
    let chat = document.getElementById("chat");
    input = document.getElementById("input").value = "";

    chat.appendChild(head);
    chat.scrollTop = chat.scrollHeight;
    console.log("my master");
  } 
  
  /*else if(input===1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0 ){

    function fun2(){
    let shhh = eval(document.querySelector(".fill").value);
  
     return shhh;
    }
    console.log(fun2());
    let hea = document.createElement("h2");
    hea.setAttribute("class", "me");
    hea.innerHTML = fun2();

    input = document.getElementById("input").value = "";

    chat.appendChild(hea);
    chat.scrollTop = chat.scrollHeight;
    console.log("my master");
    
  
  
  }*/
  
  else {
    
    let head = document.createElement("h2");
    
    head.innerHTML ="I'm sorry if I can't really help with that, if you still have problems contact our helpline.";
    head.setAttribute("class", "me");

    let chat = document.getElementById("chat");
    chat.appendChild(head);
    //input = document.getElementById("input").value = "";
    chat.scrollTop = chat.scrollHeight;
    console.log("no");
  }
 
   function fun2(){
    let shhh = eval(document.querySelector(".fill").value);
  
     return shhh;
     
    }
    let head = document.createElement("h2");
    
     head.innerHTML =fun2();
     head.setAttribute("class", "me");
 
     let chat = document.getElementById("chat");
     chat.appendChild(head);
     //input = document.getElementById("input").value = "";
     chat.scrollTop = chat.scrollHeight;
     
    console.log(fun2());
    return false;
}

