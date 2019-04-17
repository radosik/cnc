const field = [];
let step = true;
let end = true;
const size = 3;

const init = (size) => {

    const root = document.getElementById('root');
    root.innerHTML = '';

    let field = [];

    for (let i = 0;i < size;i++) {
        let row = document.createElement('div');
        row.className = 'row';        
        let arr_row = [];        
        for (let j = 0;j < size;j++) {
            let col = document.createElement('div');
            col.className = 'col';
            col.setAttribute('col', i);
            col.setAttribute('row', j);
            row.appendChild(col);
            arr_row.push(0);
        }
        root.appendChild(row);
        field.push(arr_row);
    }   
    return field;

}

const draw = (obj,symbol = true) => {
    let symbolClass;   
    if(symbol) {
        symbolClass  = "crest";
    } else {
        symbolClass = "zero";
    }
    obj.classList.add(symbolClass);
}

document.getElementById('start').onclick = function(event) {
    init(size);
}



document.getElementById('root').onclick = function(event) {
    //console.log(event.target);
    obj = event.target;
    if(obj.classList.contains("col")) {
        if (!obj.classList.contains("crest") && !obj.classList.contains("zero")) {
            draw(obj,step);
            if (step) {
                step = false;
            } else {
                step = true;    
            }
        }
        console.log(step);             
    }
}

let win = size;



