let field = [];
let step = true;
let end = true;
const size = 3;
let win = {end: false, who: true};

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
    win = {end: false, who: true};

    return field;

}

const draw = (obj,symbol = true) => {
    if(win.end === false) {
        let symbolClass; 
        const x = obj.getAttribute('col');
        const y = obj.getAttribute('row');  
        if(symbol) {
            symbolClass  = "crest";
            field[x][y] = 1;
        } else {
            symbolClass = "zero";
            field[x][y] = -1;
        }
        obj.classList.add(symbolClass);
        console.log(field);
        check();
 
    }
}

document.getElementById('start').onclick = function(event) {
    field = init(size);
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
    }
}

const checkEnd = (s) => {
    if(s == 3) {
        win.end = true;
        win.who = true;
    } else if (s == -3) {
        win.end = true;
        win.who = false;
    }
}

const loop = () => {}

let check = () => {
    for(let i = 0;i < 3;i++) {
        let s = 0;
        for(let j = 0;j < 3;j++) {
            s = s + field[j][i];
        }
        checkEnd(s);
    }

    for(let i = 0;i < 3;i++) {
        let s = 0;
        for(let j = 0;j < 3;j++) {
            s = s + field[i][j];
        }
        checkEnd(s);
    }

    let j = 2;
    let s = 0;

    for(let i = 0;i < 3;i++) {
        s = s + field[i][j];
        j--;
        checkEnd(s);
    }

    j = 0;
    s = 0;

    for(let i = 0;i < 3;i++) {
        s = s + field[i][j];
        j++;
        checkEnd(s);
    }
    if (win.end) {

        const cong = document.getElementById("cong");
        if(win.who) {
            cong.innerHTML = "Крестики победили!";           
        } else {
            cong.innerHTML = "Нолики победили!";
        }
    }
}


