var head=document.querySelector('#table-heading-row')
var the=document.createElement("th")
the.innerText;
head.appendChild(the);

var columns=26;
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
    document.querySelector('#current-cell').innerText=event.target.id;
}







//})