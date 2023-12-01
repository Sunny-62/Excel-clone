var head=document.querySelector('#table-heading-row')
var the=document.createElement("th")
the.innerText;
head.appendChild(the);

var columns=26;
var currcell;
for(var column=0;column<columns;column++){
    var the=document.createElement("th")
     the.innerText=String.fromCharCode(column+65);
     head.appendChild(the);

}
var body=document.querySelector('#table-body')
var rows=100;
for(var row=0;row<rows;row++){
    var tr=document.createElement('tr');
    var th=document.createElement('th');
    th.innerText=(row+1);
    tr.appendChild(th);
    
for(var col=0;col<columns;col++){
    var td=document.createElement('td');
    td.setAttribute("contenteditable",'true');
    td.setAttribute("spellcheck",'false');
    td.setAttribute("id",`${String.fromCharCode(col+65)}${row+1}`);
    td.addEventListener("focus",(event)=>{onfocusfun(event)});


    tr.appendChild(td);
}
body.appendChild(tr);


}
function onfocusfun(event){
    console.log("in focus:",event.target.id);
    currcell=event.target;
    document.querySelector('#current-cell').innerText=event.target.id;
}
var boldbtn=document.querySelector('#bold-btn')
var italicbtn=document.querySelector('#italic-btn')
var underlinebtn=document.querySelector('#underline-btn')
var textcolor=document.querySelector('#text-color')
var bgcolor=document.querySelector('#bg-color')
var leftalign=document.querySelector('#left-align')
var rightalign=document.querySelector('#right-align')
var centeralign=document.querySelector('#center-align')

boldbtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.fontWeight=="bold"){
        currcell.style.fontWeight="normal"; 
    }
    else{
        currcell.style.fontWeight="bold";
    }
})
italicbtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.fontStyle=="italic"){
        currcell.style.fontStyle="normal"; 
    }
    else{
        currcell.style.fontStyle="italic";
    }
})
underlinebtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.textDecoration=="underline"){
        currcell.style.textDecoration=null; 
    }
    else{
        currcell.style.textDecoration="underline";
    }
})
textcolor.addEventListener("change",()=>{
currcell.style.color=textcolor.value;
})
bgcolor.addEventListener("change",()=>{
    currcell.style.backgroundColor=bgcolor.value;
    })
    leftalign.addEventListener("click",()=>{

currcell.style.textAlign="left";
    })
    rightalign.addEventListener("click",()=>{

        currcell.style.textAlign="right";
            })
            centeralign.addEventListener("click",()=>{

                currcell.style.textAlign="center";
                    })
                    
                
        




