let base = 0;
let ing1 = 0;
let ing2 = 0;
let ing3 = 0;
let ing4 = 0;

function cook() {

  //select bread  
  document.getElementById("bread").addEventListener("click", function(){
     if (base === "rice" || base === "cabbage") {
        document.getElementById("cookText").textContent = "";
          document.getElementById("cookText").textContent = "You've alredy selected this another base, please select another ingredient.";}
        else {
        base = "bread";
          document.getElementById("cookText").textContent = "You've selected bread. Please select the other ingredients you want to use."
        }
    
     
     }
  );

   //select rice
    document.getElementById("rice").addEventListener("click", function(){
       if (base === "bread" || base === "cabbage") {
            document.getElementById("cookText").textContent = "";
              document.getElementById("cookText").textContent = "You've alredy selected this another base, please select another ingredient.";} 
       else {
          base = "rice";
            document.getElementById("cookText").textContent = "You've selected rice. Please select the other ingredients you want to use."
          
       }
       
    });

   //select cabbage
   document.getElementById("cabbage").addEventListener("click", function(){
       if (base === "bread" || base === "rice") {
            document.getElementById("cookText").textContent = "";
              document.getElementById("cookText").textContent = "You've alredy selected this another base, please select another ingredient.";} 
       else {
          base = "cabbage";
            document.getElementById("cookText").textContent = "You've selected cabbage. Please select the other ingredients you want to use." }
   });

  //select beef
  document.getElementById("beef").addEventListener("click", function () {
    if (base === "rice" || base === "cabbage") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a beef recipe. Please select another base.";
    } else if (base === "bread") {
      ing1 = "beef";
      document.getElementById("cookText").textContent = 
        "You've selected beef. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });

  //select chicken
  document.getElementById("chicken").addEventListener("click", function () {
    if (base === "rice" || base === "cabbage") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a Dragon Meat recipe. Please select another base.";
    } else if (base === "bread") {
      ing1 = "chicken";
      document.getElementById("cookText").textContent = 
        "You've selected chicken. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });

  //select dragon meat
  document.getElementById("dragonMeat").addEventListener("click", function () {
    if (base === "rice" || base === "cabbage") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a Dragon Meat recipe. Please select another base.";
    } else if (base === "bread") {
      ing1 = "dragonMeat";
      document.getElementById("cookText").textContent = 
        "You've selected Dragon Meat. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });


  //select harpy egg
  document.getElementById("harpyEggs").addEventListener("click", function () {
    if (base === "bread" || base === "cabbage") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a Harpy Egg recipe. Please select another base.";
    } else if (base === "rice") {
      ing1 = "harpyEggs";
      document.getElementById("cookText").textContent = 
        "You've selected Harpy Egg. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });

  //select carrots
  document.getElementById("carrots").addEventListener("click", function () {
    if (base === "bread" || base === "rice") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a carrot recipe. Please select another base.";
    } else if (base === "cabbage") {
      ing1 = "carrots";
      document.getElementById("cookText").textContent = 
        "You've selected carrots. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });

  //select enoki mushrooms
  document.getElementById("enokiMushrooms").addEventListener("click", function () {
    if (base === "bread" || base === "rice") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a carrot recipe. Please select another base.";
    } else if (base === "cabbage" && ing1 === "carrots") {
      ing2 = "enokiMushrooms";
      document.getElementById("cookText").textContent = 
        "You've selected Enoki Mushrooms. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });


  //select walking mushrooms
  document.getElementById("walkingMushrooms").addEventListener("click", function () {
    if (base === "bread" || base === "rice") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a Walking Mushroom recipe. Please select another base.";
    } else if (base === "cabbage" && ing1 === "carrots" && ing2 === "enokiMushrooms") {
      ing3 = "walkingMushrooms";
      document.getElementById("cookText").textContent = 
        "You've selected Walking Mushrooms. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });

  //select tomatoes
  document.getElementById("tomatoes").addEventListener("click", function () {
    if (base === "bread" || base === "rice") {
      document.getElementById("cookText").textContent = 
        "This base doesn't have a Tomatoe recipe. Please select another base.";
    } else if (base === "cabbage" && ing1 === "carrots" && ing2 === "enokiMushrooms" && ing3 === "walkingMushrooms")  {
      ing4 = "tomatoes";
      document.getElementById("cookText").textContent = 
        "You've selected Tomatoes. If you're done, press the cook button. Otherwise, select another ingredient.";
    } else {
      document.getElementById("cookText").textContent = 
        "Please select a base first.";
    }
  });
  
//cook
  document.getElementById("buttonCook").addEventListener("click", function() {
    if (base === "bread" && ing1 === "beef"){
      document.getElementById("cookText").textContent = "You've cooked a Beef Bun.";
      document.getElementById("cookImage").innerHTML = `<img src = "img/food/beef bun.png">`;
    }

    else if (base === "bread" && ing1 === "chicken"){
      document.getElementById("cookText").textContent = "You've cooked a Chicken Bun.";
      document.getElementById("cookImage").innerHTML = `<img src = "img/food/chicken bun.png">`;
    }

    else if (base === "bread" && ing1 === "dragonMeat"){
      document.getElementById("cookText").textContent = "You've cooked a Dragon Bun.";
      document.getElementById("cookImage").innerHTML = `<img src = "img/food/dragon bun.png">`;
    }

    else if (base === "rice" && ing1 === "harpyEggs"){
      document.getElementById("cookText").textContent = "You've cooked a Harpy Egg over Rice.";
      document.getElementById("cookImage").innerHTML = `<img src = "img/food/eggOnRice.png">`;
    }

    else if (base === "cabbage" && ing1 === "carrots" && ing2 === "enokiMushrooms" && ing3 === "walkingMushrooms" && ing4 === "tomatoes"){
      document.getElementById("cookText").textContent = "You've cooked a Salad.";
      document.getElementById("cookImage").innerHTML = `<img src = "img/food/salad.png">`;
    }

    else {
      document.getElementById("cookText").textContent = "This is not a valid recipe.";
    }
    
  });

  //other
  document.getElementById("cheese").addEventListener("click", function () { document.getElementById("cookText").textContent = "You've selected cheese. There is no food with this ingredient yet. Please press the reset all ingredients button and try to cook something else."; });

  document.getElementById("potatoes").addEventListener("click", function () { document.getElementById("cookText").textContent = "You've selected potatoes. There is no food with this ingredient yet. Please press the reset all ingredients button and try to cook something else."; });
  
}

//reset
function reset() {
   base = 0;
   ing1 = 0;
   ing2 = 0;
   document.getElementById("cookText").textContent = "";
   document.getElementById("cookImage").innerHTML = "";
}





document.getElementById("rice").onclick = cook;
document.getElementById("bread").onclick = cook;
document.getElementById("potatoes").onclick = cook;
document.getElementById("walkingMushrooms").onclick = cook;
document.getElementById("enokiMushrooms").onclick = cook;
document.getElementById("chicken").onclick = cook;
document.getElementById("beef").onclick = cook;
document.getElementById("dragonMeat").onclick = cook;
document.getElementById("harpyEggs").onclick = cook;
document.getElementById("cabbage").onclick = cook;
document.getElementById("carrots").onclick = cook;
document.getElementById("cheese").onclick = cook;
document.getElementById("tomatoes").onclick = cook;
document.getElementById("buttonCook").onclick = cook;

function cashInitialize() {
  if (localStorage.getItem("cash") == null) {
    cash = defaultCash;
     localStorage.setItem("cash", cash);
   }
  cash = localStorage.getItem("cash")
  document.getElementById("currency").textContent =    localStorage.getItem("cash");
}