let x = 0 , o = 0 , t = 0 ;
game();
function game(){       
    let counter = 0 , clicked00 = false , clicked01 = false , clicked02 = false , clicked10 = false , clicked11 = false
     , clicked12 = false , clicked20 = false , clicked21 = false , clicked22 = false;
    const board = [
        [ , , ],
        [ , , ],
        [ , , ]
    ];
    const table = document.querySelector("#board");
    table.innerHTML = `
    <tr id="row1">
        <td id="pos00"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos01" class="mid"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos02"><button type="button" class="btn btn-outline-secondary"></button></td>
    </tr>
    <tr id="row2">
        <td id="pos10"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos11" class="mid"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos12"><button type="button" class="btn btn-outline-secondary"></button></td>
    </tr>
    <tr>
        <td id="pos20"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos21" class="mid"><button type="button" class="btn btn-outline-secondary"></button></td>
        <td id="pos22"><button type="button" class="btn btn-outline-secondary"></button></td>
    </tr>`;  
    //row 1
    document.querySelector("#pos00").onclick = function(){
        if(clicked00 === false){
            afterClick(0 , 0 , counter);
            counter++;
            clicked00 = true;
            checkAndFinish(counter);
            }
    }
    document.querySelector("#pos01").onclick = function(){
        if(clicked01 === false){
            afterClick(0 , 1 , counter);
            counter++;
            clicked01 = true;
            checkAndFinish(counter);
        }
    }
    document.querySelector("#pos02").onclick = function(){
        if(clicked02 === false){
            afterClick(0 , 2 , counter);
            counter++;
            clicked02 = true;
            checkAndFinish(counter);
        }
    }
    //row 2
    document.querySelector("#pos10").onclick = function(){
        if(clicked10 === false){  
            afterClick(1 , 0 , counter);
            counter++;
            clicked10 = true;
            checkAndFinish(counter);
        }    
    }
    document.querySelector("#pos11").onclick = function(){
        if(clicked11 === false){    
            afterClick(1 , 1 , counter);
            counter++;
            clicked11 = true;
            checkAndFinish(counter);
        }    
    }    
    document.querySelector("#pos12").onclick = function(){
        if(clicked12 === false){
            afterClick(1 , 2 , counter);
            counter++;
            clicked12 = true;
            checkAndFinish(counter);
        }    
    }
    //row 3
    document.querySelector("#pos20").onclick = function(){
        if(clicked20 === false){    
            afterClick(2 , 0 , counter);
            counter++;
            clicked20 = true;
            checkAndFinish(counter);
        }    
    }
    document.querySelector("#pos21").onclick = function(){
        if(clicked21 === false){
            afterClick(2 , 1 , counter);
            counter++;
            clicked21 = true;
            checkAndFinish(counter);
        }    
    }
    document.querySelector("#pos22").onclick = function(){
        if(clicked22 === false){    
            afterClick(2 , 2 , counter);
            counter++;
            clicked22 = true;
            checkAndFinish(counter);
        }    
    }
    function afterClick(row , col , counter){
        if(counter % 2 === 0){
            board[row][col] = 'x';
        }
        else{
            board[row][col] = 'o';
        }
        document.querySelector(`#pos${row}${col}`).innerHTML = `<span>${board[row][col]}</span>`;
    }
    function checkAndFinish(counter){
        if((board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') || (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') || (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') || (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') || (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') || (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') || (board[1][1] === 'x' && board[0][0] === 'x' && board[2][2] === 'x') || (board[1][1] === 'x' && board[2][0] === 'x' && board[0][2] === 'x')){
            x++;
            document.querySelector("#xWins").innerHTML = `${x}`;
            document.querySelector("#board").innerHTML = `
                <h2>Player x win</h2>
                <button id="options" type="button" class="btn btn-outline-success">New game</button>
                <a href="main.html"><button id="options" type="button" class="btn btn-outline-danger">Reset</button></a>`;
                document.querySelector(".btn-outline-success").onclick = function(){
                    game();
                }
        }
        else if((board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') || (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') || (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') || (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') || (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') || (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') || (board[1][1] === 'o' && board[0][0] === 'o' && board[2][2] === 'o') || (board[1][1] === 'o' && board[2][0] === 'o' && board[0][2] === 'o')){
            o++;
            document.querySelector("#oWins").innerHTML = `${o}`;
            document.querySelector("#board").innerHTML = `
                <h2>Player o win</h2>
                <button id="options" type="button" class="btn btn-outline-success">New game</button>
                <a href="main.html"><button id="options" type="button" class="btn btn-outline-danger">Reset</button></a>`;
                document.querySelector(".btn-outline-success").onclick = function(){
                    game();
                }
        }
        else if (counter >= 9){
            t++;
            document.querySelector("#tie").innerHTML = `${t}`;
            document.querySelector("#board").innerHTML = `
                <h2>Tie</h2>
                <button id="options" type="button" class="btn btn-outline-success">New game</button>
                <a href="main.html"><button id="options" type="button" class="btn btn-outline-danger">Reset</button></a>`;
                document.querySelector(".btn-outline-success").onclick = function(){
                    game();
                }
        }        
    }
}