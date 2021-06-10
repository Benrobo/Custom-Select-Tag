let select = document.querySelector(".select");
let caretImg = document.querySelector(".caret");
let optioncont = document.querySelector(".options-cont")
let loader = document.querySelector(".loader-cont")

const API = "https://corona.lmao.ninja/v2/countries/"

// Step 1
// when the select div is clicked  add an active class to the option container

select.onclick = (e)=>{
    optioncont.classList.toggle("active")
    // also add active class to the caret image
    caretImg.classList.toggle("active")
}


// Step 2
// Get all countries data from the above api
async function getData(){
    // Let show the loading animation giff first, then when the data get fetched, we hide the loading animation
    loader.style.display = "flex"
    let res = await fetch(API);
    let data = await res.json();
    data? loader.style.display = "none" : loader.style.display = "flex"
    
    // Step 2
    // Populate the option container with the data
    data.forEach((el)=>{
        let flag = el.countryInfo.flag
        let name = el.country;

        optioncont.innerHTML += `
            <button class="options">
                <input type="radio" class="radio">
                <img src="${flag}" alt="" class="flag">
                <p class="country-name">${name}</p>
            </button>
        `;
    })

    // Step 3
    // assign a clicked event to the options, when clicked we remove the active class from the caret and optionscont

    let options = document.querySelectorAll(".options");
    let seltxt = document.querySelector(".sel-txt")
    for(var i=0; i<options.length; i++){
        options[i].onclick = (e)=>{
            optioncont.classList.remove("active")
            caretImg.classList.remove("active")

            // Show the target element name when clicked in the select txt
            seltxt.innerHTML = e.target.querySelector(".country-name").innerHTML;
        }
    }
    
}

getData()


// Now let host this
