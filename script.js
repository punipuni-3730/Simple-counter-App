var count = 2828;
var count = localStorage.getItem('Count');
let Result = document.getElementById("result");
result.innerHTML = parseInt(count);

function funccount(){
    var count = count + 1;
    var count = localStorage.saveItem('Count');
    Result.innerHTML = ('beforeend',`<h1>${count}回</h1>`)
}