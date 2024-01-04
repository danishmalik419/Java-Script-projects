let count = 1;
function fun(data){  
    if(count<=9){
        if(count%2 == 0){
            document.getElementById(data.id).innerHTML = "0";
            document.getElementById(data.id).style.color= "red";
        }else{
            document.getElementById(data.id).innerHTML = "X";
            document.getElementById(data.id).style.color= "green";
        }
        count++;
        
    }else{
        alert("Play again no winner in this game");
         setTimeout(function () {
            location.reload(); 
        }, 1000);
    }
    check();
}

function check(){
    const divContent = {
        div1: document.getElementById("div1").innerHTML,
        div2: document.getElementById("div2").innerHTML,
        div3: document.getElementById("div3").innerHTML,
        div4: document.getElementById("div4").innerHTML,
        div5: document.getElementById("div5").innerHTML,
        div6: document.getElementById("div6").innerHTML,
        div7: document.getElementById("div7").innerHTML,
        div8: document.getElementById("div8").innerHTML,
        div9: document.getElementById("div9").innerHTML
    };

    // Check for a winner
    if (
        (divContent.div1 !== '' && divContent.div1 == divContent.div2 && divContent.div2 == divContent.div3) ||
        (divContent.div1 !== '' && divContent.div1 == divContent.div4 && divContent.div4 == divContent.div7) ||
        (divContent.div1 !== '' && divContent.div1 == divContent.div5 && divContent.div5 == divContent.div9) ||
        (divContent.div2 !== '' && divContent.div2 == divContent.div5 && divContent.div5 == divContent.div8) ||
        (divContent.div3 !== '' && divContent.div3 == divContent.div6 && divContent.div6 == divContent.div9) ||
        (divContent.div4 !== '' && divContent.div4 == divContent.div5 && divContent.div5 == divContent.div6) ||
        (divContent.div3 !== '' && divContent.div3 == divContent.div5 && divContent.div5 == divContent.div7) ||
        (divContent.div7 !== '' && divContent.div7 == divContent.div8 && divContent.div8 == divContent.div9)
    ) {
        const winnerMessage = document.getElementById("winnerMessage");
     // Assuming you have the 'count' variable defined somewhere
        
        const winnerColor = count % 2 === 0 ? 'green' : 'red';
        const winnerText = count % 2 === 0 ? 'X' : 'O';
        
        winnerMessage.innerHTML = `Player <span style="color: ${winnerColor};">${winnerText}</span> is the winner!`;
        
        setTimeout(function () {
            location.reload();
        }, 1000);
        
    }
    
}

