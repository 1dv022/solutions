"use strict";

/**
 * In this solution we don´t split the different function into different modules
 * We use this solution to get a simple overview since the code is the important stuff here
 */

function exercise01() {
    var tag = document.querySelector("#step01_hello");
    var textNode = document.createTextNode("Hello World!");
    tag.appendChild(textNode);
}

function exercise02() {
    var step02 = document.querySelector("#step02");
    var textNode = document.createTextNode("This is a sub headline");
    var headline = document.createElement("h3");
    headline.appendChild(textNode);
    step02.appendChild(headline);
}

function exercise03() {
    var headlines = document.querySelectorAll("h2");
    var textNode = document.createTextNode("Meh");
    var headline = document.createElement("h3");
    headline.appendChild(textNode);

    var parent = headlines[3].parentElement;
    parent.insertBefore(headline, parent.lastElementChild);
}

function exercise04() {
    var headline = document.querySelector("#step04 h2");
    headline.classList.add("red");
}

function exercise05() {
    var element = document.querySelector("#step05 .greybox");
    element.addEventListener("click", function listener() {
        var pElement = document.createElement("p");
        pElement.appendChild(document.createTextNode("You clicked!"));
        document.querySelector("#step05").appendChild(pElement);
        this.removeEventListener("mousedown", listener);
    });

}

function exercise06() {
    var frag = document.createDocumentFragment();

    // Create numerous list items, add to fragment
    var i;
    for (i = 0; i < 10; i += 1) {
        var li = document.createElement("li");
        li.innerHTML = "List item " + (i + 1);
        frag.appendChild(li);
    }

    document.querySelector("#list06").appendChild(frag);
}

function exercise07() {
    var liTemplate;
    var templateNode = document.querySelector("#step07-template");
    var i;
    for (i = 0 ; i < 5; i += 1) {
        liTemplate = document.importNode(templateNode.content, true);
        liTemplate.firstElementChild.querySelector("a").innerHTML = "Min länk";
        liTemplate.querySelector("a").setAttribute("href", "http://sunet.se");
        document.querySelector("#list07").appendChild(liTemplate);
    }
}

function exercise08() {
    var button = document.querySelector("#todolistform button");
    button.addEventListener("click", function clickListener() {
        var textValue = document.querySelector("#todolistform input").value;

        if (textValue.length > 0) {
            var li = document.createElement("li");
            var textNode = document.createTextNode(textValue);
            li.appendChild(textNode);
            var ul = document.querySelector("#todolist ul");
            ul.appendChild(li);
        }
    });
}

function exercise09() {
    var textBoxes = document.querySelectorAll("#step09 input");
    var username = textBoxes[0];
    var confirmUsername = textBoxes[1];
    var message = document.querySelector("#step09 p.validation");

    document.querySelector("#textboxes09").addEventListener("blur", function() {
        var uText = username.value;
        var cText = confirmUsername.value;

        if (uText.length > 0 && cText.length > 0) {
            if (uText === cText) {
                message.innerHTML = "Username OK";
            } else {
                message.innerHTML = "Username and confirm username is not the same";
            }

        } else {
            message.innerHTML = "";
        }
    }, true);

}

// Well this maybe look bad but for this exercise it OK. Simple to call simple to comment out.
exercise01();
exercise02();
exercise03();
exercise04();
exercise05();
exercise06();
exercise07();
exercise08();
exercise09();
