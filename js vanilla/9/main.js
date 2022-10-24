let FilterInput = document.querySelector("#filterInput");

FilterInput.addEventListener("keyup",filterNames);


function filterNames(){
    let FilverValue = document.querySelector("#filterInput").value.toUpperCase();

    let ul = document.getElementById("names");

    let li = document.querySelectorAll("li.collection-item"); 

    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(FilverValue) >-1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
    }
}








