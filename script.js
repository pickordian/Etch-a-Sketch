
let grid_color = 'rgb(255,255,255)';
let g_grid_size = 0;
var func_a=[];
function SizeGrid(grid_size) {
    ClearGrid();
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
function ClearGrid() {
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

