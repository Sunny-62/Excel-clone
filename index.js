var head=document.querySelector('#table-heading-row')
var the=document.createElement("th")
the.innerText;
head.appendChild(the);

var columns=26;
var currcell;
var cutvalue={};
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
    td.addEventListener("input",(event)=>{oninputfun(event)});


    tr.appendChild(td);
}
body.appendChild(tr);


}
function onfocusfun(event){
    console.log("in focus:",event.target.id);
    currcell=event.target;
    document.querySelector('#current-cell').innerText=event.target.id;
}
function oninputfun(event){
    console.log("on input:",event.target);
   updatejson(event.target);
}

var boldbtn=document.querySelector('#bold-btn')
var italicbtn=document.querySelector('#italic-btn')
var underlinebtn=document.querySelector('#underline-btn')
var textcolor=document.querySelector('#text-color')
var bgcolor=document.querySelector('#bg-color')
var leftalign=document.querySelector('#left-align')
var rightalign=document.querySelector('#right-align')
var centeralign=document.querySelector('#center-align')
var fontsize=document.querySelector('#font-size');
var fontfamily=document.querySelector('#font-family');
var cutbtn=document.querySelector('#cut-btn');
var copybtn=document.querySelector('#copy-btn');
var pastebtn=document.querySelector('#paste-btn');

var matrix=new Array(rows);
for(var i=0;i<rows;i++){
    matrix[i]=new Array(columns);
    for(var j=0;j<columns;j++){
        matrix[i][j]={};
    }
    }
console.log(matrix);



boldbtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.fontWeight=="bold"){
        currcell.style.fontWeight="normal"; 
    }
    else{
        currcell.style.fontWeight="bold";
    }
    updatejson(currcell);
})
italicbtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.fontStyle=="italic"){
        currcell.style.fontStyle="normal"; 
    }
    else{
        currcell.style.fontStyle="italic";
    }
    updatejson(currcell);
})
underlinebtn.addEventListener("click",()=>{
    console.log(currcell);
    if(currcell.style.textDecoration=="underline"){
        currcell.style.textDecoration=null; 
    }
    else{
        currcell.style.textDecoration="underline";
    }
    updatejson(currcell);
})
textcolor.addEventListener("input",()=>{
currcell.style.color=textcolor.value;
updatejson(currcell);
})
bgcolor.addEventListener("input",()=>{
    currcell.style.backgroundColor=bgcolor.value;
    updatejson(currcell);
    })
    leftalign.addEventListener("click",()=>{

currcell.style.textAlign="left";
updatejson(currcell);
    })
    rightalign.addEventListener("click",()=>{

        currcell.style.textAlign="right";
        updatejson(currcell);
            })
            centeralign.addEventListener("click",()=>{

                currcell.style.textAlign="center";
                updatejson(currcell);
                    })

      fontsize.addEventListener("change",()=>{
currcell.style.fontSize=fontsize.value;
updatejson(currcell);
      })  
      fontfamily.addEventListener("change",()=>{
        currcell.style.fontFamily=fontfamily.value;
        updatejson(currcell);
      })        
      cutbtn.addEventListener("click",()=>{
        cutvalue={
            style:currcell.style.cssText,
            text:currcell.innerText,
        };
        currcell.style.cssText=null;
        currcell.innerText=null;
        updatejson(currcell);
})
copybtn.addEventListener("click",()=>{
    cutvalue={
        style:currcell.style.cssText,
        text:currcell.innerText,
    };
    updatejson(currcell);

})
pastebtn.addEventListener("click",()=>{
    currcell.style.cssText=cutvalue.style;
    currcell.innerText=cutvalue.text;
    updatejson(currcell);
})
function updatejson(cell){
    var json={
        style:cell.style.cssText,
        text:cell.innerText,
        id:cell.id,
    }
    var id=cell.id.split("");
    console.log(id[0]);
    console.log(id[1]);
    var i=id[1]-1;
    var j=id[0].charCodeAt(0)-65;
    matrix[i][j]=json;
    console.log(" updated matrix",matrix);
}





//very very standard code you need not to worry about  the functioning of code

function downloadjson(){
    var jsonString=JSON.stringify(matrix);
    var blob=new Blob([],{type:"application/json"});
    var link=document.createElement("a");
    link.href=URL.revokeObjectURL(blob);
    link.download="data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.querySelector('#json-file').addEventListener("change",readJsonFile);
function readJsonFile(event){
    var file=event.target.files[0];
if(file){
    var reader=new FileReader();
    reader.onload=function(e){
        var fileContent=e.target.result;
        try{
            var jsonData=JSON.parse(fileContent);
            console.log(jsonData);
            matrix=jsonData;
            jsonData.forEach((row)=>{
                row.forEach((cell)=>{
                    if(cell.id){
                        var mycell=document.getElementById(cell.id);
                        mycell.innerText=cell.text;
                        mycell.style.cssText=cell.style;
                        Object.keys(cell).map((key)=>{
                            mycell.style[key]=cell[key];
                        });
                    }
                })
            })
        }
        catch(error){
            console.log("Error parsing JSON file:",error)
        }
    };

}

reader.readAsText(file);



}
//the end is here


