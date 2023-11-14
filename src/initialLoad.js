import Photo from './CwkqfFE.jpeg';

function component() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    headerDiv.innerHTML = "<p>Le Grand Restaurant De Chats</p>";

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    mainDiv.style.backgroundImage = Photo; // imported background photo

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    mainDiv.appendChild(menuDiv);

    const menuOptionsDiv = document.createElement('div');
    menuOptionsDiv.classList.add("menuOptions");
    menuOptionsDiv.style.paddingBottom = "5px";
    menuOptionsDiv.style.borderBottom = "2px solid black"

    const menuOption1 = document.createElement('div');
    menuOption1.classList.add("menuOption");
    menuOption1.id = "btn1";
    menuOption1.innerHTML = "Menu";
    const menuOption2 = document.createElement('div');
    menuOption2.classList.add("menuOption");
    menuOption2.id = "btn2";
    menuOption2.innerHTML = "Our Story";
    const menuOption3 = document.createElement('div');
    menuOption3.classList.add("menuOption");
    menuOption3.id = "btn3";
    menuOption3.innerHTML = "Book A Table";

    menuDiv.appendChild(menuOptionsDiv);
    menuOptionsDiv.appendChild(menuOption1);
    menuOptionsDiv.appendChild(menuOption2);
    menuOptionsDiv.appendChild(menuOption3);

    const menuContent = document.createElement('div');
    menuContent.classList.add("menuContent");
    
    menuDiv.appendChild(menuContent);

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(mainDiv);

    return contentDiv;
}

export { component }