import "./styles.css";
import { component } from './initialLoad.js';

document.body.appendChild(component());
changeMenuContent(1); //initialize the menuContent window with the menu

const btn1 = document.getElementById("btn1");
btn1.onclick = function() {changeMenuContent(1)};
const btn2 = document.getElementById("btn2");
btn2.onclick = function() {changeMenuContent(2)};
const btn3 = document.getElementById("btn3");
btn3.onclick = function() {changeMenuContent(3)};

function changeMenuContent(button) {
    const menuDiv = document.getElementsByClassName("menuContent")[0];
    switch(button) {
        case 1:
            menuDiv.style.lineHeight = 2.5;
            menuDiv.innerHTML = "";

            const menuItem1 = document.createElement('div');
            menuItem1.classList.add("menuItem");
            menuItem1.innerHTML = "Cheeseburger";
            const menuPrice1 = document.createElement('span');
            menuPrice1.innerHTML = "50 €";
            menuItem1.appendChild(menuPrice1)
            menuDiv.appendChild(menuItem1);

            const menuItem2 = document.createElement('div');
            menuItem2.classList.add("menuItem");
            menuItem2.innerHTML = "Rainbow Tuna in Oil 150g";
            const menuPrice2 = document.createElement('span');
            menuPrice2.innerHTML = "82 €";
            menuItem2.appendChild(menuPrice2)
            menuDiv.appendChild(menuItem2);

            const menuItem3 = document.createElement('div');
            menuItem3.classList.add("menuItem");
            menuItem3.innerHTML = "Slice of ham";
            const menuPrice3 = document.createElement('span');
            menuPrice3.innerHTML = "24 €";
            menuItem3.appendChild(menuPrice3)
            menuDiv.appendChild(menuItem3);

            const menuItem4 = document.createElement('div');
            menuItem4.classList.add("menuItem");
            menuItem4.innerHTML = "Salmon Fillet";
            const menuPrice4 = document.createElement('span');
            menuPrice4.innerHTML = "102 €";
            menuItem4.appendChild(menuPrice4)
            menuDiv.appendChild(menuItem4);

            const menuItem5 = document.createElement('div');
            menuItem5.classList.add("menuItem");
            menuItem5.innerHTML = "Catnip";
            const menuPrice5 = document.createElement('span');
            menuPrice5.innerHTML = "22 €/g";
            menuItem5.appendChild(menuPrice5)
            menuDiv.appendChild(menuItem5);

            break;
        case 2:
            menuDiv.style.lineHeight = 1;
            menuDiv.innerHTML = "<span class=\"fineText\">\Our vision with food is to make art of it.</span><br>Eating regular boring cat food every day is not something we thrive to do. \<br> \<br> At Le Grand Restaurant De Chats you can rest assured you're being served exquisite food made with most pristine ingredients and expertise. \<br> \<br> <span class=\"fineText\">Every cat deserves to be treated to a spectacular meal every once in a while.</span> "; 
            break;
        case 3:
            menuDiv.style.lineHeight = 1;
            menuDiv.innerHTML = "Proceed to table reservation through this link.";
            const reserveLink = document.createElement('div');
            reserveLink.classList.add("reserveLink");
            reserveLink.innerHTML = "<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">Reserve table</a>";
            menuDiv.appendChild(reserveLink);
            break;

        default:
            alert("This should not happen.");
    }
}