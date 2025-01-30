// --- DECLARATION ---

// Announcement Storage (Format: Array containing each announcement; Object containing title, image, caption)
let annc = 
  [
    {
      title: "Launch of Little Critters",
      image: "img/annc/annc1.png",
      caption: "《  On December 23, 2024, Little Critters has finally launched its Alpha version! Try Now! 》 We are excited to show you the premise of Little Critters! Basic features include feeding, cleaning, petting, and resting your critter. Play the game by heading over to the EGG ICON at the navigation bar, or read the instructions first through the QUESTION MARK ICON above as well!"
    },
    {
      title: "Pet #1: Marmalade",
      image: "img/annc/annc2.png",
      caption: "《 With a striking orange hue and an beady eyes, Marmalade will bring joy to your Critter journey! 》 Hailing from Kajitsu Town, Marmalade is a sly tabby calico cat traversing through the streets in search for an owner. When no one is looking, she tends to steal treats and berries for her own pleasure. 𝘔𝘢𝘳𝘮𝘢𝘭𝘢𝘥𝘦 𝘪𝘴 𝘯𝘰𝘸 𝘢𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘈𝘭𝘱𝘩𝘢 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 𝘰𝘧 𝘓𝘪𝘵𝘵𝘭𝘦 𝘊𝘳𝘪𝘵𝘵𝘦𝘳𝘴."
    }
  ]

// GAME VARIABLES
// Bar Full / Bar Full Height = full bar. This is to track and change relative height in % via ratio between bar and stat bar
let barfull = document.getElementById("pet-prog-eat")
let barfullheight = parseInt(window.getComputedStyle(barfull).height)

// Bar = actual element / Bar Height = current height / Height Prc(Percent) = Relative Height in %
// Feed
let feedbar = document.getElementById("pet-move-eat");
let feedbarheight = parseInt(window.getComputedStyle(feedbar).height)
let feedheightprc = Math.round((feedbarheight/barfullheight)*100)

// Shower
let showerbar = document.getElementById("pet-move-clean");
let showerbarheight = parseInt(window.getComputedStyle(showerbar).height)
let showerheightprc = Math.round((showerbarheight/barfullheight)*100)

// Play
let playbar = document.getElementById("pet-move-love");
let playbarheight = parseInt(window.getComputedStyle(playbar).height)
let playheightprc = Math.round((playbarheight/barfullheight)*100)

// Sleep
let sleepbar = document.getElementById("pet-move-rest");
let sleepbarheight = parseInt(window.getComputedStyle(sleepbar).height)
let sleepheightprc = Math.round((sleepbarheight/barfullheight)*100)

// --- CODE ---

// GAME PORTION.
// setInterval functions ensure that the bars decrease even without user action (intervals in ms)
// Move functions are to decrease the pet stats
//          If height prc won't go negative after interval is decreasted (heightprc > interval-1), subtract interval
//          else if height prc is less than interval-1 but more than 0, automatically set to 0 to avoid negative
// Action functions (feed,etc.) are to replenish the pet stats
//          If height prc is less than 0 (meaning it still needs to be filled up), 10 is added to the stat


// Feed
window.setInterval(feedmove, 5000)

function feedmove() {  
  let interval = 10;
  
  if (feedheightprc > interval-1) {
    feedbar.style.height = feedheightprc-interval+"%"
    feedheightprc -= interval;
  } else if (feedheightprc > 0) {
    feedbar.style.height = 0+"%"
    feedheightprc = 0;
  }
  
  document.getElementById("pet-move-eat-num").innerHTML = feedheightprc
}

function feed() {
  if (feedheightprc < 100) {
  feedheightprc = Number(feedheightprc)+10;
  feedbar.style.height = feedheightprc+"%"
  document.getElementById("pet-move-eat-num").innerHTML = feedheightprc 
  }
}

// Shower
window.setInterval(showermove, 2000)

function showermove() {  
  let interval = 2;

  if (showerheightprc > interval-1) {
    showerbar.style.height = showerheightprc-interval+"%"
    showerheightprc -= interval;
  }  else if (showerheightprc > 0) {
    showerbar.style.height = 0+"%"
    showerheightprc = 0;
  }

  document.getElementById("pet-move-clean-num").innerHTML = showerheightprc
}

function shower() {
  if (showerheightprc < 100) {
    showerheightprc = Number(showerheightprc) + 10;
    showerbar.style.height = showerheightprc+"%"
  document.getElementById("pet-move-clean-num").innerHTML = showerheightprc 
  }
}  

// play
window.setInterval(playmove, 6000)

function playmove() {  
  let interval = 13;

  if (playheightprc > interval-1) {
    playbar.style.height = playheightprc-interval+"%"
    playheightprc -= interval;
  } else if (playheightprc > 0) {
    playbar.style.height = 0+"%"
    playheightprc = 0;
  }

  document.getElementById("pet-move-love-num").innerHTML = playheightprc
}

function play() {
  if (playheightprc < 100) {
    playheightprc = Number(playheightprc) + 10;
    playbar.style.height = playheightprc+"%"
  document.getElementById("pet-move-love-num").innerHTML = playheightprc 
  }  
}

// Sleep
window.setInterval(sleepmove, 10000)

function sleepmove() {  
  let interval = 5;

  if (sleepheightprc > interval-1) {
    sleepbar.style.height = sleepheightprc-interval+"%"
    sleepheightprc -= interval;
  } else if (sleepheightprc > 0) {
    sleepbar.style.height = 0+"%"
    sleepheightprc = 0;
  }

  document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc
}

function sleep() {
  if (sleepheightprc < 100) {
    sleepheightprc = Number(sleepheightprc) + 10;
    sleepbar.style.height = sleepheightprc+"%"
  document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc 
  }
}
  
// ---------------------------------------------------------------------
// Check Function: function that runs constantly to ensure that if stat >= 100, there is a check mark
// also brings back the moving stat bar original style after it returns to a value above 25
// Save function: auto-saves pet stats

window.setInterval(check,100)

function check() {
  document.getElementById("pet-move-eat-num").innerHTML = feedheightprc;
  document.getElementById("pet-move-clean-num").innerHTML = showerheightprc;
  document.getElementById("pet-move-love-num").innerHTML = playheightprc;
  document.getElementById("pet-move-rest-num").innerHTML = sleepheightprc;
  
  // FEED
  if (feedheightprc >= 100) {
    document.getElementById("pet-move-eat-num").innerHTML = "✅"
  } else if (feedheightprc < 25) {
    document.getElementById("pet-move-eat").style.backgroundImage = "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-eat").style.backgroundImage = "radial-gradient(circle, #fecaff, #f283ff, #a500ff)"
  }
  // SHOWER
  if (showerheightprc >= 100) {
      document.getElementById("pet-move-clean-num").innerHTML = "✅"
    } else if (showerheightprc < 25) {
    document.getElementById("pet-move-clean").style.backgroundImage = "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
  } else {
    document.getElementById("pet-move-clean").style.backgroundImage = "radial-gradient(circle, #fecaff, #f283ff, #a500ff)"
  }
  // PLAY
  if (playheightprc >= 100) {
    document.getElementById("pet-move-love-num").innerHTML = "✅"
  } else if (playheightprc < 25) {
      document.getElementById("pet-move-love").style.backgroundImage = "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
    } else {
      document.getElementById("pet-move-love").style.backgroundImage = "radial-gradient(circle, #fecaff, #f283ff, #a500ff)"
    }
  
  // SLEEP
  if (sleepheightprc >= 100) {
    document.getElementById("pet-move-rest-num").innerHTML = "✅"
  } else if (sleepheightprc < 25) {
      document.getElementById("pet-move-rest").style.backgroundImage = "radial-gradient(circle, #6c34b2, #6729db, #1224ab)";
    } else {
      document.getElementById("pet-move-rest").style.backgroundImage = "radial-gradient(circle, #fecaff, #f283ff, #a500ff)"
    }
  }

// ---------------------------------------------------------------------
// CHANGING PET NAME


let namebutton = document.getElementById("name-button") // clicked to open/close input field
let petnamediv = document.getElementById("pet-name") // displays name

// Runs to open input box.
function startName() {
  petnamediv.innerHTML = '<input value="'+petnamediv.innerText+'">';
  namebutton.setAttribute('onclick','endName()');
  namebutton.innerHTML = "Done";
}

// Runs to change innerHTML of name and to close input box.
function endName() {
    petnamediv.innerHTML = petnamediv.querySelector('input').value;
  namebutton.setAttribute('onclick','startName()');
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
      index = Number(i) }
    };
  index += n;
  // If index is not first or last announcement, change announcement
  if (index>=0 && index<annc.length) {
  document.getElementById("annc-title").innerHTML = annc[index].title;
  document.getElementById("annc-img").setAttribute('src',annc[index].image);
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

// STORAGE.
/* Storage will be done via LOCAL STORAGE. Accounts will not be implemented as of now
 but local storage will still save stats, pet name, and other features even if
 webpage is switched. */

// initialize stored values

let defaultStat = 80;
let defaultName = "Critter";

window.setInterval(save,100);

function save() {
  localStorage.setItem("feedstat",feedheightprc)
  localStorage.setItem("showerstat",showerheightprc)
  localStorage.setItem("playstat",playheightprc)
  localStorage.setItem("sleepstat",sleepheightprc)
}

function dataInitialize() {
   // If no localStorage attribute exists, set to default (80% stat)
   if (localStorage.getItem("petname") == null) {
     petnamediv.innerHTML = defaultName;
     localStorage.setItem("petname", petnamediv.innerHTML);
   }
  if (localStorage.getItem("feedstat") == null) {
      feedheightprc = defaultStat;
      localStorage.setItem("feedstat",feedheightprc)
    }
   if (localStorage.getItem("showerstat") == null) {
     showerheightprc = defaultStat;
      localStorage.setItem("showerstat",showerheightprc)
    }
   if (localStorage.getItem("playstat") == null) {
     playheightprc = defaultStat;
      localStorage.setItem("playstat",playheightprc)
    }
   if (localStorage.getItem("showerstat") == null) {
     showerheightprc = defaultStat;
      localStorage.setItem("showerstat",showerheightprc)
    }

  
   // Pet Name
   petnamediv.innerHTML = localStorage.getItem("petname");

   // Feed
   feedheightprc = localStorage.getItem("feedstat");
   feedbar.style.height = localStorage.getItem("feedstat")+"%";
   // Shower
  showerheightprc = localStorage.getItem("showerstat");
  showerbar.style.height = localStorage.getItem("showerstat")+"%";
   // Play
  playheightprc = localStorage.getItem("playstat");
  playbar.style.height = localStorage.getItem("playstat")+"%";
   // Sleep
   sleepheightprc = localStorage.getItem("sleepstat");
  sleepbar.style.height = localStorage.getItem("sleepstat")+"%";
}



