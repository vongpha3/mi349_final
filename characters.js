let char_list = [

    {id: "natasha", name: "Natasha Grazun", flavor: "The Girl in Question", img: "images/Test_Full_3.png", 
        desc: "Natasha (aka The Rat) is more comparable to a clever mouse: quiet, cunning, and always inquisitive. She has a habit of making your business her business and using her wit to solve them. Many are disarmed by her small and messy appearance, and all are in debate if the look is deliberate or from disinterest."},
    {id: "laurna", name: "Laurna Hase", flavor: "Bewildered Butcher", img: "images/Test_Full_2.png", 
        desc: "The apprentice butcher at The Boar's Den, Laurna's cleaving is as swift as her feet. Despite being timid as a rabbit, when the chips are down beware of her viewing you as her prey. One swing of her mighty custom cleaver will turn you into a fine meal for one of her customers."},
    {id: "laputa", name: "Laputa Lanhki", flavor: "The Scheming Snake", img: "images/Test_Full.png", 
        desc: "A woman of business and murder. You'll find her bartending at the Water Serpent nightclub if you're lucky enough to not have been turned to stone by her trusty bat \"Lil' Maddy\". The mystery of her hair seems to be one not even Natasha wants to investigate."},

]

let buttons = document.getElementsByClassName("head-shot");
let image = document.getElementById("fullbody");
let info = document.getElementById("text");
let children = info.children;

let char = null;

let index = 0;

function highlight(character) {

    char = document.getElementById(character);


    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].id === character) {

            char.style.opacity = 1;
            index = i;
            image.src = char_list[i].img;
            children[0].textContent = char_list[i].name;
            children[1].textContent = char_list[i].flavor;
            children[2].textContent = char_list[i].desc;
            continue;

        }
        
        buttons[i].style.opacity = 0.5;

    }

}

function arrowClick(direction) {

    if (direction === "left") {

        index--;

    } else {

        index++;

    }

    
    if (index > char_list.length - 1) {

        index = 0;

    }
    if (index < 0) {

        index = char_list.length - 1;

    }


    highlight(char_list[index].id);

}

function moveTo() {

    location.href = "characters.html";

}