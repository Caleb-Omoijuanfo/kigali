var acc=document.getElementsByClassName("accordion");
var i;
for (i=0; i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var content=this.nextElementSibling;
            if (content.style.display==="block"){
                content.style.display="none";
            }else{
                content.style.display="block";
            }
    })
}

var acc=document.getElementsByClassName("subtopic");
var i;
for (i=0; i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("activate");
        var subcontent=this.nextElementSibling;
            if (subcontent.style.display==="block"){
                subcontent.style.display="none";
            }else{
                subcontent.style.display="block";
            }
    })
}