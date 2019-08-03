var teamNames = ["Standard","Club Brugge","Anderlecht","Benfica","Porto","Sporting Lisbon","Barcelona","Real Madrid","Atletico Madrid","Chelsea"];

function teams() {
    for ( let x = 1; x <= 5 ; x++ ) {
        const team1 = generateTeam();
        let team2 = generateTeam();
        eraseScores();

        while (team2 === team1) {
            team2 = generateTeam();
        }

        if (x == 1) {
            document.getElementById("team-name-left-1").innerHTML = team1;
            document.getElementById("team-name-right-1").innerHTML = team2;
        } else if (x == 2) {
            document.getElementById("team-name-left-2").innerHTML = team1;
            document.getElementById("team-name-right-2").innerHTML = team2;
        } else if (x == 3) {
            document.getElementById("team-name-left-3").innerHTML = team1;
            document.getElementById("team-name-right-3").innerHTML = team2;
        } else if (x == 4) {
            document.getElementById("team-name-left-4").innerHTML = team1;
            document.getElementById("team-name-right-4").innerHTML = team2;
        } else {
            document.getElementById("team-name-left-5").innerHTML = team1;
            document.getElementById("team-name-right-5").innerHTML = team2;
        }
    }
}

function scores() {
    for ( let x = 1; x <= 5; x++ ) {
        const score1 = generateScore();
        const score2 = generateScore();

        if ( x == 1) {
            document.getElementById('score-left-1').innerHTML = score1;
            document.getElementById('score-right-1').innerHTML = score2;
        } else if ( x == 2) {
            document.getElementById('score-left-2').innerHTML = score1;
            document.getElementById('score-right-2').innerHTML = score2;
        } else if ( x == 3 ) {
            document.getElementById('score-left-3').innerHTML = score1;
            document.getElementById('score-right-3').innerHTML = score2;
        } else if ( x == 4 ) {
            document.getElementById('score-left-4').innerHTML = score1;
            document.getElementById('score-right-4').innerHTML = score2;
        } else {
            document.getElementById('score-left-5').innerHTML = score1;
            document.getElementById('score-right-5').innerHTML = score2;
        }
    }
}

function eraseScores() {
    for ( let x = 1; x <= 5; x++ ) {
        const score1 = " ";
        const score2 = " ";

        if ( x == 1) {
            document.getElementById('score-left-1').innerHTML = score1;
            document.getElementById('score-right-1').innerHTML = score2;
        } else if ( x == 2) {
            document.getElementById('score-left-2').innerHTML = score1;
            document.getElementById('score-right-2').innerHTML = score2;
        } else if ( x == 3 ) {
            document.getElementById('score-left-3').innerHTML = score1;
            document.getElementById('score-right-3').innerHTML = score2;
        } else if ( x == 4 ) {
            document.getElementById('score-left-4').innerHTML = score1;
            document.getElementById('score-right-4').innerHTML = score2;
        } else {
            document.getElementById('score-left-5').innerHTML = score1;
            document.getElementById('score-right-5').innerHTML = score2;
        }
    } 

}

function generateTeam() {
    const randomNumber = Math.floor((Math.random()*teamNames.length));
    return teamNames[randomNumber];
}

function generateScore() {
    const randomNumber = Math.floor((Math.random()*7));
    return randomNumber;    
}