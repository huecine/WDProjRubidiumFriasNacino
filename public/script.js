// --- DECLARATION ---

// Announcement Storage (Format: Array containing each announcement; Object containing title, image, caption)
let annc = [
  {
    title: "Launch of Little Critters",
    image: "img/annc/annc1.png",
    caption:
      "《  On December 23, 2024, Little Critters has finally launched its Alpha version! Try Now! 》 We are excited to show you the premise of Little Critters! Basic features include feeding, cleaning, petting, and resting your critter. Play the game by heading over to the EGG ICON at the navigation bar, or read the instructions first through the QUESTION MARK ICON above as well!",
  },
  {
    title: "Pet #1: Marmalade",
    image: "img/annc/annc2.png",
    caption:
      "《 With a striking orange hue and an beady eyes, Marmalade will bring joy to your Critter journey! 》 Hailing from Kajitsu Town, Marmalade is a sly tabby calico cat traversing through the streets in search for an owner. When no one is looking, she tends to steal treats and berries for her own pleasure. 𝘔𝘢𝘳𝘮𝘢𝘭𝘢𝘥𝘦 𝘪𝘴 𝘯𝘰𝘸 𝘢𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘈𝘭𝘱𝘩𝘢 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 𝘰𝘧 𝘓𝘪𝘵𝘵𝘭𝘦 𝘊𝘳𝘪𝘵𝘵𝘦𝘳𝘴.",
  },
];

// MENU TOGGLE

function menuToggle() {
  let menuWidth = document.getElementById("menu-main").style.width;
  if (menuWidth == "0") {
    menuWidth = "100%";
  } else {  
    menuWidth = "0";
  }
}

// CURRENCY VARIABLES
let cash = 0;

// SHOP VARIABLES
let shopinv = [];
let defaultShopinv = [];

function invInitialize() {
  if (localStorage.getItem("shopinv") == null) {
    shopinv = defaultShopinv;
    localStorage.setItem("shopinv", shopinv);
  }
  shopinv = localStorage.getItem("shopinv");
}

let shopitems = [
  {
    image: "shop/slow1.png",
    name: "Food Potion",
    price: "800",
    desc: "Slows down the rate of Hunger Bar decreasing by 2x",
  },
  {
    image: "shop/slow2.png",
    name: "Clean Potion",
    price: "800",
    desc: "Slows down the rate of Hygiene Bar decreasing by 2x",
  },
  {
    image: "shop/slow3.png",
    name: "Fun Potion",
    price: "800",
    desc: "Slows down the rate of Love Bar decreasing by 2x",
  },
  {
    image: "shop/slow4.png",
    name: "Energy Potion",
    price: "800",
    desc: "Slows down the rate of Sleep Bar decreasing by 2x",
  },
  {
    image: "shop/mult1.png",
    name: "Super Juice",
    price: "600",
    desc: "Multiplies effect of Rest action by 1.2x",
  },
  {
    image: "shop/mult2.png",
    name: "Chewy Ball",
    price: "600",
    desc: "Multiplies effect of Play action by 1.2x",
  },
  {
    image: "shop/mult3.png",
    name: "Grand Platter",
    price: "600",
    desc: "Multiplies effect of Feed action by 1.2x",
  },
  {
    image: "shop/mult4.png",
    name: "Fragrant Bomb",
    price: "600",
    desc: "Multiplies effect of Shower action by 1.2x",
  },
  {
    image: "shop/ultra1.png",
    name: "Huemazing Twinkle",
    price: "900",
    desc: "Multiplies effect of All actions by 1.5x",
  },
];

let gachaitems = [
  {
    name: "Temple Flower",
    image: "gacha/gacha1.png",
    description: "Doubles Feed Action",
  },
  {
    name: "Navy Bow",
    image: "gacha/gacha2.png",
    description: "Doubles Shower Action",
  },
  {
    name: "Stella Clip",
    image: "gacha/gacha3.png",
    description: "Doubles Play Action",
  },
  {
    name: "Solunae Clip",
    image: "gacha/gacha4.png",
    description: "Doubles Sleep Action",
  },
];

// GAME VARIABLES
// Bar Full / Bar Full Height = full bar. This is to track and change relative height in % via ratio between bar and stat bar
let barfull = document.getElementById("pet-prog-eat");
let barfullheight = parseInt(window.getComputedStyle(barfull).height);

// Bar = actual element / Bar Height = current height / Height Prc(Percent) = Relative Height in %
// Feed
let feedbar = document.getElementById("pet-move-eat");
let feedbarheight = parseInt(window.getComputedStyle(feedbar).height);
let feedheightprc = Math.round((feedbarheight / barfullheight) * 100);

// Shower
let showerbar = document.getElementById("pet-move-clean");
let showerbarheight = parseInt(window.getComputedStyle(showerbar).height);
let showerheightprc = Math.round((showerbarheight / barfullheight) * 100);

// Play
let playbar = document.getElementById("pet-move-love");
let playbarheight = parseInt(window.getComputedStyle(playbar).height);
let playheightprc = Math.round((playbarheight / barfullheight) * 100);

// Sleep
let sleepbar = document.getElementById("pet-move-rest");
let sleepbarheight = parseInt(window.getComputedStyle(sleepbar).height);
let sleepheightprc = Math.round((sleepbarheight / barfullheight) * 100);

// --- CODE ---

// GAME PORTION.
// setInterval functions ensure that the bars decrease even without user action (intervals in ms)
// Move functions are to decrease the pet stats
//          If height prc won't go negative after interval is decreasted (heightprc > interval-1), subtract interval
//          else if height prc is less than interval-1 but more than 0, automatically set to 0 to avoid negative
// Action functions (feed,etc.) are to replenish the pet stats
//          If height prc is less than 0 (meaning it still needs to be filled up), 10 is added to the stat

// Feed
window.setInterval(feedmove, 10000);

function feedmove() {
  let interval = 10;

  if (feedheightprc > interval - 1) {
    feedbar.style.height = feedheightprc - interval + "%";
    feedheightprc -= interval;
  } else if (feedheightprc > 0) {
    feedbar.style.height = 0 + "%";
    feedheightprc = 0;
  }

  document.getElementById("pet-move-eat-num").innerHTML = feedheightprc;
}

let feedLastClick = 0;
let feedDelay = 500;

function feed() {
  if (feedLastClick >= Date.now() - feedDelay) {
    window.alert("[FEED] 0.5 second cooldown!");
    return;
  }
  feedLastClick = Date.now();

  if (feedheightprc < 100) {
    feedheightprc = Number(feedheightprc) + 10;
    feedbar.style.height = feedheightprc + "%";
    document.getElementById("pet-move-eat-num").innerHTML = feedheightprc;
  }
}

// Shower
window.setInterval(showermove, 8000);

function showermove() {
  let interval = 2;

  if (showerheightprc > interval - 1) {
    showerbar.style.height = showerheightprc - interval + "%";
    showerheightprc -= interval;
  } else if (showerheightprc > 0) {
    showerbar.style.height = 0 + "%";
    showerheightprc = 0;
  }

  document.getElementById("pet-move-clean-num").innerHTML = showerheightprc;
}

let showerLastClick = 0;
let showerDelay = 500;

function shower() {
  if (showerLastClick >= Date.now() - showerDelay) {
    window.alert("[SHOWER] 0.5 second cooldown!");
    return;
  }
  showerLastClick = Date.now();

  if (showerheightprc < 100) {
    showerheightprc = Number(showerheightprc) + 10;
    showerbar.style.height = showerheightprc + "%";
    document.getElementById("pet-move-clean-num").innerHTML = showerheightprc;
  }
}

// play
window.setInterval(playmove, 12000);

function playmove() {
  let interval = 13;

  if (playheightprc > interval - 1) {
    playbar.style.height = playheightprc - interval + "%";
    playheightprc -= interval;
  } else if (playheightprc > 0) {
    playbar.style.height = 0 + "%";
    playheightprc = 0;
  }

  document.getElementById("pet-move-love-num").innerHTML = playheightprc;
}

let playLastClick = 0;
let playDelay = 500;

function play() {
  if (playLastClick >= Date.now() - playDelay) {
    window.alert("[PLAY] 0.5 second cooldown!");
    return;
  }
  playLastClick = Date.now();

  if (playheightprc < 100) {
    playheightprc = Number(playheightprc) + 10;
    playbar.style.height = playheightprc + "%";
    document.getElementById("pet-move-love-num").innerHTML = playheightprc;
  }
}

// Sleep
window.setInterval(sleepmove, 20000);

function sleepmove() {
  let interval = 5;

  if (sleepheightprc > interval - 1) {
    sleepbar.style.height = sleepheightprc - interval + "%";
    sleepheightprc -= interval;
  } else if (sleepheightprc > 0) {
    sleepbar.style.height = 0 + "%";
    sleepheightprc = 0;
  }

  document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc;
}

let sleepLastClick = 0;
let sleepDelay = 500;

function sleep() {
  if (sleepLastClick >= Date.now() - sleepDelay) {
    window.alert("[SLEEP] 0.5 second cooldown!");
    return;
  }
  sleepLastClick = Date.now();

  if (sleepheightprc < 100) {
    sleepheightprc = Number(sleepheightprc) + 10;
    sleepbar.style.height = sleepheightprc + "%";
    document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc;
  }
}

// ---------------------------------------------------------------------
// Check Function: function that runs constantly to ensure that if stat >= 100, there is a check mark
// also brings back the moving stat bar original style after it returns to a value above 25
// Save function: auto-saves pet stats

window.setInterval(check, 100);

function check() {
  document.getElementById("pet-move-eat-num").innerHTML = feedheightprc;
  document.getElementById("pet-move-clean-num").innerHTML = showerheightprc;
  document.getElementById("pet-move-love-num").innerHTML = playheightprc;
  document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc;

  // FEED
  if (feedheightprc >= 100) {
    document.getElementById("pet-move-eat-num").innerHTML = "✅";
  } else if (feedheightprc < 25) {
    document.getElementById("pet-move-eat").style.backgroundImage =
      "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-eat").style.backgroundImage =
      "radial-gradient(circle, #fecaff, #f283ff, #a500ff)";
  }
  // SHOWER
  if (showerheightprc >= 100) {
    document.getElementById("pet-move-clean-num").innerHTML = "✅";
  } else if (showerheightprc < 25) {
    document.getElementById("pet-move-clean").style.backgroundImage =
      "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-clean").style.backgroundImage =
      "radial-gradient(circle, #fecaff, #f283ff, #a500ff)";
  }
  // PLAY
  if (playheightprc >= 100) {
    document.getElementById("pet-move-love-num").innerHTML = "✅";
  } else if (playheightprc < 25) {
    document.getElementById("pet-move-love").style.backgroundImage =
      "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-love").style.backgroundImage =
      "radial-gradient(circle, #fecaff, #f283ff, #a500ff)";
  }

  // SLEEP
  if (sleepheightprc >= 100) {
    document.getElementById("pet-move-rest-num").innerHTML = "✅";
  } else if (sleepheightprc < 25) {
    document.getElementById("pet-move-rest").style.backgroundImage =
      "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-rest").style.backgroundImage =
      "radial-gradient(circle, #fecaff, #f283ff, #a500ff)";
  }
}

// ---------------------------------------------------------------------
// CHANGING PET NAME

let namebutton = document.getElementById("name-button"); // clicked to open/close input field
let petnamediv = document.getElementById("pet-name"); // displays name

// Runs to open input box.
function startName() {
  petnamediv.innerHTML = '<input value="' + petnamediv.innerText + '">';
  namebutton.setAttribute("onclick", "endName()");
  namebutton.innerHTML = "Done";
}

// Runs to change innerHTML of name and to close input box.
function endName() {
  petnamediv.innerHTML = petnamediv.querySelector("input").value;
  namebutton.setAttribute("onclick", "startName()");
  namebutton.innerHTML = "Change Name";
  // save into LocalStorage
  localStorage.setItem("petname", petnamediv.innerHTML);
}

// -----------------------------
// CHANGING ANNOUNCEMENTS
// Since annc is an array, every announcement is represented by an index in the array.
// Left button decreases index, right button increases index.

function switchAnnc(n) {
  // Initialization of index variable
  let index = -1;
  // For function finds current index of current announcement
  for (i in annc) {
    if (annc[i].title == document.getElementById("annc-title").innerHTML) {
      index = Number(i);
    }
  }
  index += n;
  // If index is not first or last announcement, change announcement
  if (index >= 0 && index < annc.length) {
    document.getElementById("annc-title").innerHTML = annc[index].title;
    document.getElementById("annc-img").setAttribute("src", annc[index].image);
    document.getElementById("annc-caption").innerHTML = annc[index].caption;
  }
}

// Block = show, none = hide
// When show social media button is clicked, display the social media list (SM-Content) by changing its display style
function showSM() {
  var show = document.getElementById("SM-Content");

  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

// When show source button is clicked, display the social media list (Source-Content) by changing its display style
function showSource() {
  var show = document.getElementById("Source-Content");

  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

// When show description button is clicked, display the social media list (Short-Desc-Content) by changing its display style
function showShortDesc() {
  var show = document.getElementById("Short-Desc-Content");

  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

// --------------------------

// STORAGE.
/* Storage will be done via LOCAL STORAGE. Accounts will not be implemented as of now
 but local storage will still save stats, pet name, and other features even if
 webpage is switched. */

// initialize stored values

// CASH GAIN

window.setInterval(cashgain, 5000);

function cashgain() {
  // cash = 0;
  cash = Number(cash);
  cash += 10;
  localStorage.setItem("cash", cash);
  document.getElementById("currency").textContent =
    localStorage.getItem("cash");
}

function cashsupergain() {
  // cash = 0;
  cash = Number(cash);
  cash += 1000000;
  localStorage.setItem("cash", cash);
  document.getElementById("currency").textContent =
    localStorage.getItem("cash");
}

let defaultStat = 80;
let defaultName = "Critter";
let defaultCash = 0;

window.setInterval(save, 100);

function save() {
  localStorage.setItem("feedstat", feedheightprc);
  localStorage.setItem("showerstat", showerheightprc);
  localStorage.setItem("playstat", playheightprc);
  localStorage.setItem("sleepstat", sleepheightprc);
  localStorage.setItem("cash", cash);
}

function dataInitialize() {
  // If no localStorage attribute exists, set to default (80% stat)
  if (localStorage.getItem("petname") == null) {
    petnamediv.innerHTML = defaultName;
    localStorage.setItem("petname", petnamediv.innerHTML);
  }
  if (localStorage.getItem("feedstat") == null) {
    feedheightprc = defaultStat;
    localStorage.setItem("feedstat", feedheightprc);
  }
  if (localStorage.getItem("showerstat") == null) {
    showerheightprc = defaultStat;
    localStorage.setItem("showerstat", showerheightprc);
  }
  if (localStorage.getItem("playstat") == null) {
    playheightprc = defaultStat;
    localStorage.setItem("playstat", playheightprc);
  }
  if (localStorage.getItem("showerstat") == null) {
    showerheightprc = defaultStat;
    localStorage.setItem("showerstat", showerheightprc);
  }
  if (localStorage.getItem("shopindex") == null) {
    localStorage.setItem("shopindex", 0);
  }

  cashInitialize();

  // Pet Name
  petnamediv.innerHTML = localStorage.getItem("petname");

  // Feed
  feedheightprc = localStorage.getItem("feedstat");
  feedbar.style.height = localStorage.getItem("feedstat") + "%";
  // Shower
  showerheightprc = localStorage.getItem("showerstat");
  showerbar.style.height = localStorage.getItem("showerstat") + "%";
  // Play
  playheightprc = localStorage.getItem("playstat");
  playbar.style.height = localStorage.getItem("playstat") + "%";
  // Sleep
  sleepheightprc = localStorage.getItem("sleepstat");
  sleepbar.style.height = localStorage.getItem("sleepstat") + "%";

  invInitialize();

  document.getElementById('free-name').setAttribute('value', localStorage.getItem('free-name'));
}

function cashInitialize() {
  if (localStorage.getItem("cash") == null) {
    cash = defaultCash;
    localStorage.setItem("cash", cash);
  }
  cash = localStorage.getItem("cash");
  document.getElementById("currency").textContent =
    localStorage.getItem("cash");

  invInitialize();
}

// -----------------------------
// Shop Items and Descriptions

function shopitemshow(n) {
  document.getElementById("imagedesc").setAttribute("src", shopitems[n].image);
  document.getElementById("namedesc").innerHTML = shopitems[n].name;
  document.getElementById("pricedesc").innerHTML = shopitems[n].price;
  document.getElementById("descdesc").innerHTML = shopitems[n].desc;
  localStorage.setItem("shopindex", n);
}

// -----------------------------
// Gacha System
// 100 cash default
// costs 200

// currency feature

function gacha() {
  gachaimage.style.display = "block";

  // If not enough cash, do not push through
  if (cash < 1000) {
    alert("Insufficient cash!");
    return;
  }
  
  
  // Gacha animation
  gachaimage.style.setProperty("background-image", "url(img/transparent.png)");
  gachaimage.setAttribute("src", "img/transparent.png");
  gachaimage.style.setProperty("animation-name", "gacha");
  gachaimage.style.setProperty("animation-duration", "0.5s");
  gachaimage.style.setProperty("animation-iteration-count", "infinite");
  
  // Random number 0-3 corresponding to each gacha item
  let random = Math.floor(Math.random() * 4);
  let chosen = gachaitems[random];
  

  window.setTimeout(function(){
    gachaimage.setAttribute("src", chosen.image);
    gachaimage.style.setProperty("animation-name","");
    if (shopinv.includes(chosen.name))
      {window.alert("You have rolled an item you already own! No cash has been deducted.")
      gachaimage.setAttribute("src", chosen.image);
      gachaimage.style.setProperty("animation-name","");
      return;} else {

    cash -= 1000;
    localStorage.setItem("cash", cash);
    document.getElementById("currency").textContent =
          localStorage.getItem("cash");
    modal.style.display = "block";
    document.getElementById("modal-content").textContent = "Congratulations! You have obtained a " + chosen.name + "!";

        // Modal animation
    modal.style.setProperty("animation-name","enlargen");
    modal.style.setProperty("animation-duration","1s");
    modal.style.setProperty("animation-fill-mode","forwards");
    document.getElementById("modal-title").textContent = "Gacha Results"

        // Update inventory
        shopinv += [chosen.name]
        localStorage.setItem("shopinv",shopinv)
        console.log(shopinv)
      }
  }  
    
  ,3000); // After animation is done (3-4 seconds) 

  
}

// Purchase Function

function purchase() {
  // Convert cash into number
  cash = Number(cash);
  let name = String(document.getElementById("namedesc").textContent);
  let n;

  // Find item in shopitems catalog
  for (i in shopitems) {
    if (shopitems[i].name == name) {
      n = i;
      break;
    }
  }
  // User has not selected item
  if (n == undefined) {
    window.alert("Please select an item!");
    return;
  }
  // If current cash is lower than price, alert
  if (cash < shopitems[n].price) {
    window.alert("Insufficient cash!");
    return;
  }
  // If item is already in inventory, alert
  if (shopinv.includes(shopitems[n].name)) {
    window.alert("You have already purchased this item!");
    return;
  }
  
  // Confirmation
  if (
    window.confirm(`Are you sure you want to purchase ${shopitems[n].name}?`) ==
    true
  ) {
    // Deduct price
    console.log(n);
    console.log(shopitems[n].price + "price");
    cash -= shopitems[n].price;
    localStorage.setItem("cash", cash);
    document.getElementById("currency").textContent =
      localStorage.getItem("cash");

    // Confirmation
    window.alert(`You have successfully purchased ${shopitems[n].name}!`);
  }

  // Update inventory
  shopinv += [shopitems[n].name]
  localStorage.setItem("shopinv",shopinv)
}

// Close modal when X is clicked
function closemodal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

chatWindow = document.getElementById('free-chatbox'); 
let xH = chatWindow.scrollHeight; 
chatWindow.scrollTo(0, xH);

if (!(localStorage.getItem('free-name'))) {
  (localStorage.setItem('free-name'),'Anon')
  document.getElementById('free-name').setAttribute('value', localStorage.getItem('free-name'));
}

// PASSWORD TOGGLING

function passwordToggle() {
  let x = document.getElementById("log-password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("log-toggle").innerHTML = "Hide Password";
  } else {
    x.type = "password";
    document.getElementById("log-toggle").innerHTML = "Show Password";
  }
}


