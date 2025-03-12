var left = document.querySelector(".left");
var right = document.querySelector(".right");
var subContainer = document.querySelector(".sub-container");
var val=0;

left.addEventListener("click",()=>{
    let limit=(-1)*(4*1400); //limiting the slide transition
    if(val>limit)
    {
        subContainer.style.transform=`translateX(-${val}px)`;
        val+=1400;
    }
    else{
        val=0; //go to reverse
    }
})

right.addEventListener("click",()=>{
    // let limit=(-1)*(3*1400); //limiting the slide transition
    // if(val>=limit)
    // {
        subContainer.style.transform=`translateX(${val}px)`;
        val+=1400;
    // }
    // else{
    //     val=0; //go to reverse
    // }
})
