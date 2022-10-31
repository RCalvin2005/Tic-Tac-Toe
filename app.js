grids = [0, 0, 0, 0, 0, 0, 0, 0, 0];
turn = 0;
winner = false;

// Resets the grid
function reset()
{
    grids = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 0;
    winner = false;
    for (var i = 0; i < 9; i++)
    {
        let id = "#grid" + i;
        document.querySelector(id).innerText = "";
    }
    lines = document.querySelectorAll(".lines");
    for (var i = 0; i < 8; i++)
    {
        lines[i].style.display = "none";
    }
}

// Updates the grid cell
function clicked(i) {
    let id = "#grid" + i;
    var grid = document.querySelector(id);
    if (grid.innerText == "" && !winner)
    {
        if (turn % 2 == 0)
        {
            grid.style.color= "#EB1E1B";
            grid.innerText = "X";
            grids[i] = 1;
        }
        else
        {
            grid.style.color = "black";
            grid.innerText = "O";
            grids[i] = 2;
        }
        turn++;
        winner = check();
    }
}

// Checks for a winner
function check()
{
    var test = 1;
    var id = "";
    // Check horizontals
    for (var a = 0; a < 9; a += 3)
    {
        test = 1;
        id = "#line" + ((a / 3) + 1);
        for (var b = 0; b < 3; b++)
        {
            test *= grids[a + b];
        }
        if (test == 1 || test == 8)
        {
            document.querySelector(id).style.display = "block";
            return true;
        }
    }

    // Check verticals
    for (var a = 0; a < 3; a++)
    {
        test = 1;
        id = "#line" + (a + 4);
        for (var b = 0; b < 9; b += 3)
        {
            test *= grids[a + b];
        }
        if (test == 1 || test == 8)
        {
            document.querySelector(id).style.display = "block";
            return true;
        }
    }

    // Check left-right diagonal
    test = 1;
    id = "#line7";
    for (var a = 0; a < 9; a += 4)
    {
        test *= grids[a];
    }
    if (test == 1 || test == 8)
    {
        document.querySelector(id).style.display = "block";
        return true;
    }

    // Check right-left diagonal
    id = "#line8";
    test = 1;
    for (var a = 2; a < 7; a += 2)
    {
        test *= grids[a];
    }
    if (test == 1 || test == 8)
    {
        document.querySelector(id).style.display = "block";
        return true;
    }

    return false;
}