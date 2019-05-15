//Tal newwwwwwwwwwwww
var size=80;
var boxes=[];
var letters=['A','B','C','D'];
var y=0; 
//var main = document.getElementsByTagName("main")[0];
var main = document.getElementById('mainid');
var letter1, letter2;
var counter=0;
var rememberbox;

document.getElementById("Makesboxes").onclick = function() {
    
   
   for( var x=0;x<3;x++,size+=20,y++){

    boxes[y]= document.createElement("section");
    main.appendChild( boxes[y]);
   
    boxes[y].style.cssFloat = "Left";
    boxes[y].style.height   = size + "px";
    boxes[y].style.width    = size + "px";
    boxes[y].style.background = "black";
    boxes[y].style.margin   = "64px";
    boxes[y].style.color="black";
    boxes[y].style.fontSize = "64px";
    boxes[y].style.display  = "flex";
    boxes[y].style.alignItems = "center";
    boxes[y].style.textAlign = "center";

 
    

    boxes[y].id=y; // the index of the box
    var c=y%4;     // for random

    document.getElementById(y).addEventListener("click",colorsign);
    

   switch (c) {
           case 0:
            document.getElementById(y).innerHTML=letters[0];
           break;
           case 1:
            document.getElementById(y).innerHTML=letters[1];
           break;
            case 2:
           document.getElementById(y).innerHTML=letters[2];
           break;
            case 3:
           document.getElementById(y).innerHTML=letters[3];
           break;
     
}

}

function colorsign() {
    this.style.color="white";
    
    if(counter == 0) {
        rememberbox=this.id;
        letter1 = this.innerHTML;
      //  console.log("letter 1 is: "+letter1);
        counter++;
       // console.log("id is: "+this.id);
       
    }
    
    else {
        console.log("id is: "+this.id);
        counter = 0;
        letter2 = this.innerHTML;
       console.log("letter 1 is: "+letter1);
        console.log("letter 2 is: "+letter2);
      //  console.log("box is now: " + this.innerHTML);
        
        
        if(letter1 == letter2) {
           console.log("box is same: " );
           boxes[rememberbox].style.color = "#EBEF18";
           this.style.color = "#EBEF18";
           document.getElementById(rememberbox).removeEventListener("click",colorsign);
           document.getElementById(this.id).removeEventListener("click",colorsign);
           boxes[rememberbox].style.background = "rgb(179, 0, 0)";
           this.style.background = "rgb(179, 0, 0)";

        }
        else{

            boxes[rememberbox].style.color = "black";
            
           this.style.color = "black";

        }
    }
   

}
   
  
}

 

