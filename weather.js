var cookie = document.querySelector("#cookies");




function loading(){
    alert("Loading weather report...")
}

function remove(){
    cookie.remove();
}


function changeTemp(element){
    console.log(element.value);
    alert("work")
    for(var i=1; i<5; i++){
        var red = document.querySelector(".red"+i);
        var blue = document.querySelector(".blue"+i);

        var intRed = parseInt(red.innerHTML);
        var intBlue = parseInt(blue.innerHTML);

        if(element.value==2){
            red.innerHTML = Math.round(9/5 * intRed + 32);
            blue.innerHTML = Math.round(9/5 * intBlue + 32);
            
        }if(element.value==1){
            red.innerHTML = Math.round(5/9 * (intRed - 32));
            blue.innerHTML = Math.round(5/9 * (intBlue - 32));

        }
    }
}




// function changeTemp(element){
//     if(element.value==2){
//         var r1 = document.querySelector(".cel1 .red");
//         var b1 = document.querySelector(".cel1 .blue");
//         var r2 = document.querySelector(".cel2 .red");
//         var b2 = document.querySelector(".cel2 .blue");
//         var r3 = document.querySelector(".cel3 .red");
//         var b3 = document.querySelector(".cel3 .blue");
//         var r4 = document.querySelector(".cel4 .red");
//         var b4 = document.querySelector(".cel4 .blue");
//         // alert("work")
//         r1.innerHTML = "75℉";
//         b1.innerHTML = "65℉";
//         r2.innerHTML = "80℉";
//         b2.innerHTML = "66℉";
//         r3.innerHTML = "69℉";
//         b3.innerHTML = "61℉";
//         r4.innerHTML = "78℉";
//         b4.innerHTML = "70℉";
//     }
// }
