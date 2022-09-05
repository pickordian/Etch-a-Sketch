
let grid_color = 'rgb(255,255,255)';
let g_grid_size = 0;
var func_a=[];
var active_button;
function SizeGrid(but_id, grid_size) {
    ClearGrid(active_button);
    active_button = but_id;
    const button = document.getElementById(but_id);
    button.style.backgroundColor = 'rgb(248, 223, 81)';
    button.style.color = 'rgb(0,0,0)';
    const grid_cont = document.querySelector('.grid-container');
    grid_cont.style.setProperty('grid-template-columns', 'repeat(' + grid_size + ',1fr)');
    grid_cont.style.setProperty('grid-template-rows', 'repeat(' + grid_size + ',1fr)');
    g_grid_size = grid_size;
    for (let i = 0; i < g_grid_size * g_grid_size; i++) {
        const new_grid = document.createElement('div');
        new_grid.classList.add('grid');
        new_grid.setAttribute('id', i);
        new_grid.setAttribute('onmousedown', 'MouseDown()');
        new_grid.setAttribute('onmouseup', 'MouseUp()');
        grid_cont.appendChild(new_grid);
    }
function ClearGrid(active_button) {
    if (active_button != null){
    const button = document.getElementById(active_button);
    button.style.backgroundColor = 'rgb(0,0,0)' ;
    button.style.color =  'rgb(248, 223, 81)';
    }
    func_a = [];
    const grid = document.querySelectorAll('.grid');
    grid.forEach(grid => {
        grid.remove();
    });
}}
function ResetGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach(grid => {
        grid.style.setProperty('background-color', 'rgb(255,255,255)');
    });
}
function SetColor() {
    const color = document.getElementById('i_color').value;
    grid_color = color;
}

function ColorGrid(i) {
    const grid = document.getElementById(i);
    grid.style.backgroundColor = grid_color;
}
function MouseDown() {
    for (let i = 0; i < g_grid_size * g_grid_size; i++) {
        const grid = document.getElementById(String(i));
        if (grid != null) {
            let func =  function () {
                ColorGrid(i);}
            func_a.push(func);
            grid.addEventListener("mouseenter", func_a[i] );
        }
    }
}
function MouseUp() {
    for (let i = 0; i < g_grid_size * g_grid_size; i++) {
        const grid = document.getElementById(String(i));
        if (grid != null) {
            grid.removeEventListener("mouseenter",func_a[i]);

        }
    }
}

