let submit = document.getElementById("submit");

function myLineUp(event) {
    console.log("submitted");
    /*Checks which status radio was selected*/
    if (document.getElementById("status-draft").checked)
    {
        console.log("Draft");
    }
    else 
    {
        console.log("Final");
    }

    /*Checks the drop-menu date selected*/
    let date = document.getElementById("date-options").value;
    console.log(date);

    /*Checks the checkbox options selected, played it safe with lots of if statements*/
    if (document.getElementById("player1").checked)
    {
        console.log("Aarav Agarwal");
    }
    if (document.getElementById("player2").checked)
    {
        console.log("Ava Johnson");
    }
    if (document.getElementById("player3").checked)
    {
        console.log("Julio Ortiz");
    }
    if (document.getElementById("player4").checked)
    {
        console.log("Liam Rubio");
    }
    if (document.getElementById("player5").checked)
    {
        console.log("Emma Witherspoon");
    }
}

submit.addEventListener("click", myLineUp);