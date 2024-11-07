const button = document.getElementsByClassName('btn')
const srch = document.getElementsByClassName('srch')
const submit = document.getElementById('submit')
const no = document.getElementById('no')
const content = document.getElementById("content")

button[0].addEventListener("click",()=>{
    button[0].style.display="none"
    srch[0].style.display="block"
})
submit.addEventListener("click",()=>{
    content.innerHTML = ''
    for(let i=0;i<no.value;i++){
        const imgoff = document.createElement("img")
        imgoff.src="offbulb.png"
        imgoff.alt = "Image" + (i+1)
        imgoff.width=100
        imgoff.classList.add('bulb-off')
        
        const imgon = document.createElement("img")
        imgon.src="offbulb.png"
        imgon.style.display="none"
        imgon.alt = "Image" + (i+1)
        imgon.width=100
        imgon.classList.add('bulb-off')

        content.appendChild(imgoff)
        content.appendChild(imgon)
    }
    const bulbsOff = document.querySelectorAll(".bulb-off");
    // console.log(bulbsOff);
    
    const bulbsOn = document.querySelectorAll(".bulb-on");

    
    bulbsOff.forEach((bulbOff, index) => {
        bulbOff.addEventListener("click", () => {
            bulbOff.style.display = "none"; 
            bulbsOn[index].style.display = "inline-block";
        });
    });
})



// submit.addEventListener("click", () => {
//     // Clear previous bulbs if any
//     bulbcontainer.innerHTML = '';

//     for (let i = 0; i < no.value; i++) {
//         // Create the "off" bulb image
//         const imgOff = document.createElement("img");
//         imgOff.src = "./bulbnoton.png"; 
//         imgOff.alt = "Bulb Off " + (i + 1);
//         imgOff.width = 100;
//         imgOff.classList.add('bulb-off'); 

        
//         const imgOn = document.createElement("img");
//         imgOn.src = "./bulbon.jpg"; 
//         imgOn.style.display = "none"; 
//         imgOn.alt = "Bulb On " + (i + 1);
//         imgOn.width = 100;
//         imgOn.classList.add('bulb-on'); 

        
//         bulbcontainer.appendChild(imgOff); 
//         bulbcontainer.appendChild(imgOn); 
//     }

//     const bulbsOff = document.querySelectorAll(".bulb-off");
//     const bulbsOn = document.querySelectorAll(".bulb-on");

    
//     bulbsOff.forEach((bulbOff, index) => {
//         bulbOff.addEventListener("click", () => {
//             bulbOff.style.display = "none"; 
//             bulbsOn[index].style.display = "inline-block";
//         });
//     });
// });