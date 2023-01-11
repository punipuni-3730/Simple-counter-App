if(localStorage.getItem('count') == null) {
    localStorage.setItem("count","0");
}
num = parseInt(localStorage.count)
result.innerHTML = `<h1>${num}回</h1>`


function funccount() {
    num = parseInt(localStorage.count)
    localStorage.count = (num + 1);
    result.innerHTML = `<h1>${localStorage.count}回</h1>`
}

function funcreturn() {
    num = parseInt(localStorage.count)
    if(num > 0) 
        { 
            localStorage.count = (num - 1);
            result.innerHTML = `<h1>${localStorage.count}回</h1>`;
        }
    else{;}
}
function funcreset() {
    localStorage.setItem("count","0")
    result.innerHTML = `<h1>${localStorage.count}回</h1>`
}
