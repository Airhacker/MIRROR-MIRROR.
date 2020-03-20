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

// Creates Cards
function main() {
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.className = "outfit";

    let image = document.createElement("div");
    image.id = "img-out";
    outfit();

    document.getElementsByClassName("main-body")[0].appendChild(div);
    document.getElementsByClassName("outfit")[i].appendChild(image);

    saveBtn(i);
    description(i);
  }
}

function outfit() {}

// Responsible for try on button
function saveBtn(num) {
  // Make div with id of save
  let save = document.createElement("div");
  save.id = "img-save";

  // Creates text for try on button
  let saveText = document.createElement("a");
  saveText.href = "./profile.html";
  saveText.innerText = "Try On";

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
function description(num) {
  // Make div with id of description
  let desc = document.createElement("div");
  desc.id = "img-desc";

  // Puts the word description
  let heading = document.createElement("h4");
  heading.innerText = "Description: ";

  desc.appendChild(heading);

  // Puts paragraph on div
  let para = document.createElement("p");
  para.innerText = itemDesc();

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
function itemDesc() {
  itemDescription =
    random() + " shirt," + random() + " pants," + random() + " shoes.";

  return itemDescription;
}

main();
