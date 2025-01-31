let myCount=document.querySelector(".myCount");
let computerCount=document.querySelector(".computerCount")
let boxImg=document.querySelectorAll("img")
let p=document.querySelector("#text")

let mycount=0;
let comcount=0;

let loadlocal=localStorage.getItem("point")||{}
let dbdata=JSON.parse(localStorage.getItem("point"));

if(dbdata){
    myCount.innerHTML=dbdata.myPoint
computerCount.innerHTML=dbdata.computerPoint
}

function choice(){
    let option=["stone","paper","scissors"]
let computerChoice=option[Math.floor(Math.random() * option.length)];
return computerChoice;
}

boxImg.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        let computerChoice=choice()
        let myClick=e.target.id;
       if(myClick==computerChoice){
        p.innerHTML="Draw"
       }
       else if(myClick=="stone"){
        if(computerChoice=="paper"){
             p.innerHTML="Computer Win";
             comcount++;
             computerCount.innerText=comcount;
        }
        else{
            p.innerHTML="You Win"
            mycount++
            myCount.innerText=mycount;
        }
       }
       else if(myClick=="paper"){
        if(computerChoice=="scissors"){
            p.innerHTML="Computer Win";
            comcount++;
            computerCount.innerText=comcount;
       }
       else{
           p.innerHTML="You Win"
           mycount++;
           myCount.innerText=mycount;
         }
       }
       else if(myClick=="scissors"){
        if(computerChoice=="stone"){
            p.innerHTML="Computer Win";
            comcount++;
            computerCount.innerText=comcount;
       }
       else{
           p.innerHTML="You Win"
           mycount++;
           myCount.innerText=mycount;
       }
       }
       
       loadlocal.myPoint=mycount;
       loadlocal.computerPoint=comcount;
 
       localStorage.setItem("point",JSON.stringify(loadlocal))
       
        
    })
})
