let ptr=document.querySelector(".box1")

ptr.addEventListener("dblclick",()=>{
    let count=0;
    let count2=0;
    document.querySelector(".box1").innerHTML="";
    ptr.addEventListener("click",()=>{
        count++;
        document.getElementById("clicks").innerHTML=count;
        document.getElementById("cps").innerHTML=count/5;
    })

    // setInterval(() => {
    //     count2+=0.5;
    //     document.getElementById("cps").innerHTML=(count/count2);
    //     // count2+=0.1;
    // }, 500);
    setTimeout(() => {
        
        alert(`Your CPS is ${count/5}`);

        count=0;
        document.getElementById("clicks").innerHTML=0;
        document.getElementById("cps").innerHTML=0;
        count2=0;
    }, 5000);
}
)

