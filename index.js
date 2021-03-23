const text = "learn programming in ease";
let index = 0;
function writeText(){
    
    document.body.innerText = text.slice(0,index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}
setInterval(writeText,300);
const fin = "this is my new job";
let ind = 0;
function myTexty (){
document.body.innerText = fin.slice(0,ind);
ind++;
if(ind> fin.length){
    ind = 0;
}
};
setInterval(myTexty,300)