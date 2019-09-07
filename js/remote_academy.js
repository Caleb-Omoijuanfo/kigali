

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
