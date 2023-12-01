const topLoc = document.querySelector(".top");
const headLoc = document.querySelector("header");
const mainLoc = document.querySelector(".main-container");

const navLoc = document.querySelector(".navbar");
const bodyLoc = document.querySelector("body");
const expand = () => {
  navLoc.classList.toggle("clicked");
  bodyLoc.classList.toggle("background");
  mainLoc.classList.toggle("opaque");
  headLoc.classList.toggle("opaque");
  topLoc.classList.toggle("opaque");
};

const formLoc = document.querySelector(".glavni-form");
const nameLoc = document.querySelector(".name");
const gumbLoc = document.querySelector(".glavni-gumb");
const callLoc = document.querySelector(".call-to-action");

const openForm = () => {
  formLoc.classList.toggle("hidden");
  nameLoc.classList.toggle("hidden");
  gumbLoc.classList.toggle("hidden");
  callLoc.classList.toggle("vis-form");
};

const scrolaj = (targetY) => {
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};
const scrolajMi = () => {
  if (window.innerWidth > 1300) {
    scrolaj(850);
  } else {
    scrolaj(600);
    expand();
  }
};
const scrolajUsl = () => {
  if (window.innerWidth > 1300) {
    scrolaj(1600);
  } else {
    scrolaj(2450);
    expand();
  }
};
const scrolajPit = () => {
  if (window.innerWidth > 1300) {
    scrolaj(2600);
  } else {
    scrolaj(3700);
    expand();
  }
};
const scrolajKli = () => {
  if (window.innerWidth > 1300) {
    scrolaj(3500);
  } else {
    scrolaj(4900);
    expand();
  }
};
const scrolajKont = () => {
  if (window.innerWidth > 1300) {
    scrolaj(0);
    openForm();
  } else {
    scrolaj(0);
    expand();
    openForm();
  }
};

function checkScrollPosition() {
  var scrollThreshold = 200;
  var scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition >= scrollThreshold) {
    performAction();
  } else {
    removeAction();
  }
}
function performAction() {
  console.log(0);
  topLoc.classList.add("hidden");
  headLoc.classList.add("scrolled1");
  mainLoc.classList.add("scrolled2");
}

window.onscroll = function () {
  checkScrollPosition();
};

function removeAction() {
  console.log(1);
  topLoc.classList.remove("hidden");
  headLoc.classList.remove("scrolled1");
  mainLoc.classList.remove("scrolled2");
}

//funkcija za gibanje balona//
const content = document.querySelector(".main-container");
const contentHeight = content.innerHeight;
const mjehurPrvi = document.querySelector(".one");
const mjehurDrugi = document.querySelector(".two");
const mjehurTreci = document.querySelector(".three");
const mjehurCetvrti = document.querySelector(".four");

let positionPrviX = -100;
let positionPrviY = -100;

let positionDrugiX = 200;
let positionDrugiY = 400;

let positionTreciX = -200;
let positionTreciY = 800;

let positionCetvrtiX = -100;
let positionCetvrtiY = 2000;
const everything = document.querySelector(".content");
const intervalId = setInterval(() => {
  positionPrviX += 10;
  positionPrviY += 4;

  mjehurPrvi.style.left = positionPrviX + "px";
  mjehurPrvi.style.top = positionPrviY + "px";

  if (positionPrviX > window.innerWidth) {
    positionPrviX = -100;
  }
  if (positionPrviY > contentHeight) {
    positionPrviY = -100;
  }

  positionDrugiX += 10;
  positionDrugiY += 4;

  mjehurDrugi.style.left = positionDrugiX + "px";
  mjehurDrugi.style.top = positionDrugiY + "px";

  if (positionDrugiX > window.innerWidth) {
    positionDrugiX = -100;
  }
  if (positionDrugiY > contentHeight) {
    positionDrugiY = 400;
  }

  positionTreciX += 10;
  positionTreciY += 4;

  mjehurTreci.style.left = positionTreciX + "px";
  mjehurTreci.style.top = positionTreciY + "px";

  if (positionTreciX > window.innerWidth) {
    positionTreciX = -100;
  }
  if (positionTreciY > contentHeight) {
    positionTreciY = 800;
  }

  positionCetvrtiX += 10;
  positionCetvrtiY += 4;

  mjehurCetvrti.style.left = positionCetvrtiX + "px";
  mjehurCetvrti.style.top = positionCetvrtiY + "px";

  if (positionCetvrtiX > window.innerWidth) {
    positionCetvrtiX = -100;
  }
  if (positionCetvrtiY > contentHeight) {
    positionCetvrtiY = 2000;
  }
}, 50);

let keeper3 = 1;
let keepeer2 = 1;
let keeper1 = 1;

const bigDiv = document.querySelector(".cijeli");
function moveRight3() {
  if (keeper3 == 1) {
    bigDiv.style.transform = "translateX(-1500px)";
    keeper3 = 0;
  }
}

function moveLeft3() {
  if (keeper3 == 0) {
    bigDiv.style.transform = "translateX(0)";
    keeper3 = 1;
  }
}
function moveRight2() {
  if (keeper3 == 1) {
    bigDiv.style.transform = "translateX(-1500px)";
    keeper3 = 0;
  }
}

function moveLeft2() {
  if (keeper3 == 0) {
    console.log(1);
    bigDiv.style.transform = "translateX(0)";
    keeper3 = 1;
  }
}
function moveRight1() {
  if (keeper1 < 6) {
    console.log(keeper1);
    bigDiv.style.transform = "translateX(" + -400 * keeper1 + "px)";
    keeper1 += 1;
  }
}

function moveLeft1() {
  if (keeper1 > 1) {
    console.log(keeper1);
    let temp = keeper1 - 2;
    bigDiv.style.transform = "translateX(" + -400 * temp + "px)";
    if (keeper1 > 1) {
      keeper1 -= 1;
    }
  }
}

const moveRight = () => {
  if (window.innerWidth >= 1576) {
    console.log("rjeseno");
    moveRight3();
  } else if (window.innerWidth >= 800) {
    console.log("ne");
    moveRight2();
  } else if (window.innerWidth >= 300) {
    moveRight1();
  }
};

const moveLeft = () => {
  if (window.innerWidth >= 1576) {
    console.log("rjeseno");
    moveLeft3();
  } else if (window.innerWidth >= 900) {
    console.log("ne");
    moveLeft2();
  } else if (window.innerWidth >= 300) {
    moveLeft1();
  }
};
