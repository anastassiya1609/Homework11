

// // Part 1
// // 1
// document.title = "Paramonova Anastassiya";

// // 2
// const header = document.getElementById("header");

// const headerTitle = header.querySelector("h1");

// headerTitle.textContent = "Изучение JavaScript";

// // 3
// const menuLink = document.querySelectorAll(".menu-link");

// for (let i = 0; i < menuLink.length; i++) {
//     const nameLink = menuLink[i].textContent;
//     console.log( nameLink);
// }

// // 4
// const featuresList = document.querySelector(".features-list");

// const featuresListItem = featuresList.querySelectorAll("li");

// featuresListItem[1].innerHTML = "Поддержка<b> API</b>"



// Part 2
// task 1
const sectionInfo = document.getElementById("info");

const unorderedList = document.createElement("ul");

const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];

for (const item of items) {
    const unorderedListItem = document.createElement("li");
    unorderedListItem.textContent = item;
    unorderedList.append(unorderedListItem);
}

sectionInfo.append(unorderedList);

// task 2
const header = document.getElementById("header");

const headerLink = document.createElement("a");
headerLink.textContent = "Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
headerLink.setAttribute("href", "https://www.instagram.com/anastassi.pavlovna/profilecard/?igsh=MThnOXpkODF6ZGhwNQ==");
headerLink.setAttribute("target", "_blank");

header.append(headerLink);

// task 3
const mainSection = document.getElementById("main");

const newSectionn = document.createElement("section");
newSectionn.className = "dynamic";

const newSectionnTitle = document.createElement("h2");
newSectionnTitle.textContent = "Обучение JavaScript";

const newSectionnParagraph = document.createElement("p");
newSectionnParagraph.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

newSectionn.prepend(newSectionnTitle, newSectionnParagraph);

mainSection.prepend(newSectionn);

// task 4
const firstParagraph = sectionInfo.querySelector("p");
sectionInfo.removeChild(firstParagraph);

// task 5
const footer = document.getElementById("footer");
footer.innerHTML="";



