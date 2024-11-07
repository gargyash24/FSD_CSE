// console.log("hiii")
// var a=12;
// console.log(a)
// if(a>10){
//     a=23
//     console.log("a inside "+a)
// }
// console.log("a outside "+a)

// let a = 12
// let v = "12"
// console.log(typeof a)
// console.log(typeof v)
// let today = Date()
// console.log(today)
// if(a===v){
//     console.log("Welcome")
// }
// else{
//     console.log("Hello")
// }
// let myname="yash"
// let college="ABESEC"
// let result = `hi my name is ${myname} and college is ${college}`
// console.log(result)
// const student={
//     name:"Yash",
//     college:"ABES",
//     course:"B.Tech"
// }
// console.log(student)
// function greet(msg="welcome"){
//     console.log("hiiiiiii "+msg)
// }
// greet()
// var bhai = 5;
// console.log(`hai kaisa hai ${bhai}`);
// const greet()=> console.log("saurav");

// console.log("Hello");
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText="hello js";
// // div[0].innerHTML="<h2 style=color:red>hello js </h2>"
// const h1=document.createElement("h1")
// h1.innerText="ABES ENGINEERING COLLEGE"
// console.log(h1);
// h1.style.backgroundColor="lightblue"
// h1.style.padding="20px"
// h1.style.marginLeft="40px"
// div[0].appendChild(h1)

// const img=document.createElement("img")
// img.src="cover.jpg"
// console.log(img)
// img.setAttribute("height","300px")
// img.setAttribute("width","300px")
// div[0].appendChild(img)
// div[0].removeChild(img)


// function getData(){
//     console.log("hi, inside the function")
//     div[0].innerHTML="<h2 style=color:red>hi, Event handled</h2>"
//     // div[0].innerText="hi, inside the getData"
// }
// const button=document.getElementsByClassName("btn")
// console.log(button)
// button[0].addEventListener("click",getData)

// const promise=new Promise((resolve,reject)=>{
//     let a=5
//     if (a>10){
//         resolve("Accepted")
//     }
//     else{
//         reject("Not Accepted")
//     }
// })
// promise.then((msg)=>(console.log(msg)))
// .catch((error)=>(console.log(error)))
// .finally(()=>console.log("All resources have closed"))

// const promise= new Promise((resolve,reject)=>{
//     resolve({name:"Yash Garg",stack:"Mern Stack"})
// })
// promise.then((data)=>(console.log(data)))
// .catch(x=>(console.log(x)))


const response=fetch("https://dummyjson.com/products")
response.then((data)=>{
    console.log(data)
    data.json().then((res)=>{
        console.log(res)
    })
})


// const btn=document.getElementById("btn")
// const search_box=document.getElementById("search_box")
// const submit=document.getElementById("submit")
// const no=document.getElementById("no")
// const bulbcontainer = document.getElementById("bulbcontainer")


// btn.addEventListener("click",function(){
//     btn.style.display="none";
//     search_box.style.display="block";

// });

// submit.addEventListener("click",()=>{

//     for (let i = 0; i < no.value; i++) {
//         const img = document.createElement("img"); 
//         const img1 = document.createElement("img"); 
//         img1.src = "./bulbon.jpg"; 
//         img1.style.display="none"
//         img.src = "./bulbnoton.png"; 
//         img.alt = "Image " + (i + 1);
//         img.width = 100; 
//         bulbcontainer.appendChild(img1); 
//         bulbcontainer.appendChild(img); 
//     }

//     // console.log(document.querySelectorAll('img'));
//     const lightImage = document.querySelectorAll("img")
//     const lightImag = document.querySelectorAll("img1")
//     console.log(lightImag);
    
//     const n=lightImage.length
//     for(let i=0;i<n;i++){

        
//         lightImage[i].addEventListener("click",()=>{
//             lightImage[i].style.display="none"
//             lightImag[i].style.display="block"
            
            
//         })
//     }
// });