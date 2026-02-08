
const genButton = document.querySelector(".gen_btn");
const outputBox = document.querySelector(".outbox");
const canvasBg = document.querySelector("body");
const moodRightNow = document.querySelector("#mood-rn");
const container = document.querySelector(".container");



const moodData = {
    "sad" : {
        colors: [
            "#f9d423",
            "#001b2e",
            "#736a56",
            "#708090",
            "#5D3954",
            "#36454f",
            "#adaaba",
        ],
        quotes: [
            "Zindagi ki haqiqat toh sab jaante hai\n Magar dukh chuppane ka hunar kuch hi maante hain", 
            "Waqt ke hathon sab kuch kho dete hai\n Yehi hai zindagi, khwab ro dete hain",
            "Hansti hai duniya jab rota hai insaan \n Yehi hai zindagi ka sabse bada imtihaan",
            "Zindagi ke safar me gham hi gham mile \n Khusiyon ke lamhe bhi pal mein dhal gaye",
            "Zindagi ki kitaab me dard hi likhe gaye \n Hasne ke lamhe khwaboon me rakhe gaye",
            "Yeh zindagi bhi ajeeb tamasha hai \n Hansi ke peeche aansu ka raasta hai",
            "Mohobatt sabar ke siva kuch bhi nahin \n Mein ne har ishq ko intezaar karte dekha hai",
            "Na jee bhar ke dekha na baat ki \n Badi aarzu thi ek mulaqaat ki"
        ]
    },
    "happy" : {
        colors: [
            "#4b6cb7",
            "#40E0D0",
            "#FF7DAB",
            "#FF6F61",
            "#01BEFE",
            "#FF9A55",
            "#FFFD37"
        ],
        quotes: [
            "Tumhari muskaan se hi shuru hui hamari kahaani \n Muskurate rehna yahi akhri tamanna hai hamari",
            "Bhool jao beeta hua kal, Dil me basa lo aane wala pal \n Muskurawo chahe jo ho kal, Phir khushiyan hi layega aane wala pal",
            "Kabhi chupke se muskurake dekhna \n Dil par lage pehro ko hatake dekhna \n Ye zindagi hai teri....Khilkhila uthegi",
            "Phool bankar muskurana zindagi hai, Muskura ke gham bhulana zindagi hai \n Jeet kar koi khush ho toh kya hua, haar kar bhi kisi ke liya khushiyaan manana zindagi hai",
            "Kurbaan ho jau muskurahat par tumhare \n Ya ise dekh kar jeene ka koi bahana dundh lu",
            "Chalo muskurane ki wajah dundhte hai \m tum humein dundho hum tumhein dundhte hai",
            "Gham ko dil se aazad karna \n hansi se dil ko aabad karna"
        ]
    },
    "love" : {
        colors: [
            "#ff69b4",
            "#FFC3A0",
            "#CF9EE2",
            "#6B2D3E",
            "#FF0000",
            "#E6B7B3",
            "#D01760"
    ],
        quotes: [
            "Tum itna jo muskura rahe ho \n Kya gham hai jo chuupa rahe ho",
            "Hum ko maloom hai anjaam-e-tamanna kya hai \n Phir bhi khwaboon ko haqiqat me sajata hoon",
            "Teri aankhon me ho ik zid si jhalakti hai Faraz \n Main us zid ko bhi narmi se mitata hoon",
            "Tere lab se jo nikalte hai wohi khwaab hai Faraz \n Main inhi khwaabon ko raato me jaga leta hoon",
            "Duniya ki raah me khoye hai hazaron manzar \n Aur dil hai ke abhi tak kisi manzil pe nahin",
            "Waqt ki dhoop ne jalaya hai khwaab mera \n Par sada dete hain ye chaandni lamhe abhi",
            "Andheron ne humne aur bhi roshan kar diya \n Zulmaton ne meri aawaz ko parcham baksha"
        ]
    },
    "aura" : {
        colors: [
            "#8a2be2",
            "#FF00FF",
            "#DFFF00",
            "#002366",
            "#6A0DAD",
            "#39FF14",
            "#FF003F"
        ],
        quotes: [
            "Hum zakhm gehre dain gey \n Tum thoda sabar toh karo",
            "Shararatt karo, Saazishein nahi \n Hum Sharrif hai, Seedhe Nahin",
            "Mujh se nahin mil sake ga aap ka mizaaj \n Mujhe to gulaab bhi kaale hi pasand aate hai",
            "Hum ko mita sakay, yehi zamane me dum nahi \n Hum se zamana hota hai, zamane se hum nahi",
            "Hairan nahi hu bas dekh raha hu \n Kitne log giray hai mujhe giraane mein",
            "Humara apna ek Rutba hai \n Tum kon ho, isse hume koi farak nahi padta",
            "Nikle wo log meri shaqsiyat bigadney \n Kirdar jinka Khud hi maramat maang raha hai"
        ]
    },
    "broken" : {
        colors: [
            "#2f4f4f",
            "#7a7a7a",
            "#a1787d",
            "#doe1e1",
            "#2f4f4f",
            "#322d31",
            "#d2b48c"
        ],
        quotes: [
            "Agli baar milo toh haath nahi milana \n Tum thaam nhi paoge aur hum chhod nahi payenge.",
            "Mujhe kya pata mera dil kab toota \n Dil tootne par awaaz kaha hoti hai",
            "Ek galti roz kar rahe hai hum \n Jo milega nahi kabhi, uspe mar rahe hai hum",
            "Chaand jab haasil ho jata hai \n Tan uspe lage daag nazar aate hai",
            "Kaha se lau itna sabar \n Ki tu baat na kare aur mujhe farak bhi na pade",
            "Kathor itne hain ki sab kuch jhel lete hai \n Aur narm itne ki shabd bhi chubh jaate hai",
            "Kon ab is ghar ki dekhbhaal kare \n Har roz ek chizz tuut jaati hai"
        ]
    }
}

genButton.addEventListener("click", () => {
    const selectedMood = moodRightNow.value;


    const data = moodData[selectedMood]
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    const randomColor = data.colors[Math.floor(Math.random() * data.colors.length)];


    outputBox.innerText = randomQuote;
    canvasBg.style.backgroundColor = randomColor;
    canvasBg.style.transition = "1s all"
    container.style.color = "white";
    container.style.borderColor = "white";

})