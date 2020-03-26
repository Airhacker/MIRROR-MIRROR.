// Data
let data = {
  colors: {
    colorArr: ["1", "2", "3", "4"],
    colorDic: { 1: "white", 2: "black", 3: "red", 4: "blue" },
    colorDef: {
      white: "#F0FFFF",
      black: "#000000",
      red: "#8B0000",
      blue: "#6495ED"
    }
  }
};

// Global Variables
let shirtRealColor = [];
let pantsRealColor = [];
let shoesRealColor = [];

// Creates Cards
function main() {
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.className = "outfit";
    div.id = `${i}`;

    // Creates main outfit div
    document.getElementsByClassName("main-body")[0].appendChild(div);

    // Generate Random Colors for all items
    let tShirtColor = random();
    shirtRealColor[i] = tShirtColor;

    let pantsColor = random();
    pantsRealColor[i] = pantsColor;

    let shoesColor = random();
    shoesRealColor[i] = shoesColor;

    outfit(i, tShirtColor, pantsColor, shoesColor);
    saveBtn(i);
    description(i, tShirtColor, pantsColor, shoesColor);
  }
}

// Resposnible foor displaying svg of clothes
function outfit(num, tShirtColor, pantsColor, shoesColor) {
  let image = document.createElement("div");
  image.id = "img-out";

  // Create tshirt img
  tShirt = document.createElement("img");
  tShirt.src = "./static/images/shirt_" + tShirtColor + ".svg";
  //tShirt.style = "background-color:" + data.colors.colorDef[tShirtColor];

  // Creates pants img
  pants = document.createElement("img");
  pants.src = "./static/images/pants_" + pantsColor + ".svg";
  //pants.style = "background-color:" + data.colors.colorDef[pantsColor];

  // Creates shoes img
  shoes = document.createElement("img");
  shoes.src = "./static/images/shoes_" + shoesColor + ".svg";
  //shoes.style = "background-color:" + data.colors.colorDef[shoesColor];

  image.appendChild(tShirt);
  image.appendChild(pants);
  image.appendChild(shoes);

  document.getElementsByClassName("outfit")[num].appendChild(image);
}

// Responsible for try on button
function saveBtn(num) {
  // Make div with id of save
  let save = document.createElement("div");
  save.id = "img-save";

  // Creates text for try on button
  let saveText = document.createElement("a");
  saveText.href = "./profile.html";
  saveText.innerText = "Make your own";

  // Creates svg for try on button
  let saveImg = document.createElement("img");
  saveImg.src = "./static/images/arrow.svg";
  saveImg.alt = "Try on image";

  save.appendChild(saveText);
  save.appendChild(saveImg);

  // Appends item to outfit div
  document.getElementsByClassName("outfit")[num].appendChild(save);
}

// Responsible for the description portion of the card
function description(num, tShirtColor, pantsColor, shoesColor) {
  // Make div with id of description
  let desc = document.createElement("div");
  desc.id = "img-desc";

  // Puts the word description
  let heading = document.createElement("h4");
  heading.innerText = "Description: ";

  desc.appendChild(heading);

  // Puts paragraph on div
  let para = document.createElement("p");
  para.innerText = itemDesc(tShirtColor, pantsColor, shoesColor);

  desc.appendChild(para);

  // Appends item to outfit div
  document.getElementsByClassName("outfit")[num].appendChild(desc);
}

// Generates random color
function random() {
  randomIndex = Math.floor(Math.random() * 4);
  randColor = data.colors.colorArr[randomIndex];
  color = data.colors.colorDic[randColor];
  return color;
}

// Fills detail into description paragraph tag
function itemDesc(tShirtColor, pantsColor, shoesColor) {
  itemDescription =
    tShirtColor + " shirt," + pantsColor + " pants," + shoesColor + " shoes.";

  return itemDescription;
}

main();
