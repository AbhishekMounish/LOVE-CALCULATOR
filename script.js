function calculatelove(event){
     event.preventDefault();
     let container = document.querySelector('.container');
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();
    let resultbox = document.getElementById("result");
    if(!name1||!name2){
        resultbox.innerText = "Please Enter Both Names!🥲"
        container.classList.add("expanded"); 
        resultbox.classList.remove("expanded");
        
        return;
    }
    let combined = (name1 < name2) ? name1 + name2 : name2 + name1;
    let score =0;

    for(let i=0; i<combined.length; i++){
        score+= combined.charCodeAt(i);
    }

    let lovescore = score%101;

    let message="";

    if(lovescore>90){
        message = "This Pair Made in Heaven,Made for each other💖"

    }
    else if(lovescore>80){
        message="A perfect duo,a blend of love and passion🔥 "
    }
    else if(lovescore>55){
        message="There's a spark! Keep going! 😍 "
    }
    else if(lovescore>20){
        message= "May be just freinds 🙂  "
    } 
    else{
        message="Don't be sad,it's a game.Not 100% true😄"
    }
    resultbox.innerText = `${lovescore}% => ${message}`;
    resultbox.classList.add("expanded");
    container.classList.add("expanded"); 


}