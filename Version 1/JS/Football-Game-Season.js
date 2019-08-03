// Football JS script to determ some results after one season
// ==========================================================

// --- Global Scoop Declaration ---------------------------------
var totalTeams = 16;         // Default playing teams
var teamsPlaying = [];       // Teams array
var competition = [];              // Teams playing against each other
var allGames = [];           // All possible games
var rule = 1;                // Default rule

// --- End Global Scoop Declaration -----------------------------

// --- Preparation / Structure Set-Up ---------------------------
// --- ============================== ---------------------------

// teamsPlaying = prompt("How many teams are playing? : ");  // Define how many teams are playing against eachother | Must be even !!
console.log(totalTeams + " Teams Playing");
generateTeams();            // Create all teams based on teamsPlaying
console.log("Initial Postions");
showTeamPositions();        // Show Position at start of the competition
generateGames();            // Create all possible games teams are playing against each other
gameDaysCreate();           // Create all game days
league();                   // Season Play


// --- FUNCTIONS BELOW -----------------------------------------
// --- =============== -----------------------------------------

function generateTeams() {
    for ( let x = 0; x < totalTeams; x++ ) {
       teamsPlaying.push({
           indx: x,
           team: ("Team " + (x+1)),
           position: (x+1),
           points: 0
       }); 
    } 
    console.log(teamsPlaying);
}

function showTeamPositions() {
    for ( let results = 0; results <= 15; results++) {
        teamsPlaying[results].position = (results+1);
        console.log((results+1) + " : " + teamsPlaying[results].team + " = " + teamsPlaying[results].points + " Points");          
    }
    //console.log();
}

function generateGames() {
    for ( let teamX = 0; teamX < totalTeams; teamX++ ) {
        for ( let teamY = 0; teamY < teamX; teamY++ ) {
                allGames.push( [teamX, teamY] );
        }
    }
    //console.log("All Possible Games");
    //console.log(allGames);
}

function gameDaysCreate() {
    let possibleGame = [];
    var teamLeft; 
    var teamRight;
    var tmpCompetitionDay = [];
    let result = false;
    //let tmpGames = [];

    for ( let competitionDay = 0; competitionDay < (totalTeams-1); competitionDay++ ) {    
        for ( let teamZ = 0; teamZ < (totalTeams/2); teamZ++ ) {
            result = false;
            while ( result == false ) {                // Check if teams already playing in competitionDay
                possibleGame = allGames[Math.floor((Math.random()*allGames.length))];  // Pick random game
                teamLeft = possibleGame[0];
                teamRight = possibleGame[1]; 
                if ( tmpCompetitionDay.indexOf(teamLeft) < 0 && tmpCompetitionDay.indexOf(teamRight) < 0) {
                    tmpCompetitionDay.push(teamLeft, teamRight);
                    competition.push({ "Competition Day": (competitionDay+1), "Teams": possibleGame });
                    result = true;                  
                }
            }

// STILL NEED TO REMOVE USED COMPETITION FROM THE ARRAY allGames !!!!

            //remove(); function remove(allGames, possibleGame) { const index = allGames.indexOf(possibleGame); allGames.splice(index, 1); }
            //console.log([possibleGame]);
            //tmpGames = allGames.filter(possibleGame); allGames = tmpGames;
            //allGames.splice([possibleGame],1);
            //remove(allGames, possibleGame);  // !?!?! remove() is not defined !?!?!?
            //console.log("Length : " + allGames.length);
        }
        tmpCompetitionDay = [];
    }
    console.log(competition);    
    //console.log(competition[99]);
    //console.log("Index 10: " + competition[10]); // WHY IS THIS GIVING [object Object] ???
}

function league() { 
    let team1 = 0;
    let team2 = 0;
    let gameDay = 0;
    let indx = 0;

    for ( let round = 1; round <= 2; round++ ) {
        for ( let totalGames = 1; totalGames <= (totalTeams-1); totalGames++ ) {
            for ( let gamesPerGameDay = 1; gamesPerGameDay <= (totalTeams/2); gamesPerGameDay++ ) {
                let game = competition[indx]; // Why undefined?!
                indx++;
                console.log(game);
            }
            gameDay++;
            console.log("Positions After Round : " + round + " - Game Day : " + gameDay);
            //showTeamPositions();
        }
    }


/*
    for ( let round = 1; round <= 2; round++) {  // Competition has 2 rounds
        for ( let competitionDay = 0; competitionDay <= (totalTeams-2); competitionDay++) {
            for ( let games = 0; games <= ((totalTeams/2)-1); games++) {
                    // Find the two teams from competition in teamsPlaying
                    // The index changes after each gameDay
                let game = teamsPlaying[competitionDay][games];  
                    console.log("Game : " + game);
                    //console.log("Game Players : " + teamsPlaying[competitionDay][games] + " - " + game);
                for ( let findTeam = 0; findTeam <= (totalTeams-1); findTeam++) {             
                    if ( teamsPlaying[findTeam].indx === game[0] ) {
                        team1 = findTeam;
                    } else if ( teamsPlaying[findTeam].indx === game[1]) {
                        team2 = findTeam;
                    }
                }
                //console.log("Playing teams : " + teamsPlaying[team1].team + " - " + teamsPlaying[team2].team);
                //console.log(game + " : Competition Day : " + (competitionDay+1) + " - " + "Game : " + (games+1));
                rules();
            }
        }
    }
*/
    function rules() {
        if ( rule == 1 ) {
            // Rule nº1 : 2nd position always lose 
            // Rule nº2 : highest position always win
            if ( teamsPlaying[team1].position == 2 ) {
                teamsPlaying[team2].points = teamsPlaying[team2].points + 3;
            } else if ( teamsPlaying[team2].position == 2 ) {
                teamsPlaying[team1].points = teamsPlaying[team1].points + 3;
            } else if ( teamsPlaying[team1].position <= teamsPlaying[team2].position ) {
                teamsPlaying[team1].points = teamsPlaying[team1].points + 3;
            } else {
                teamsPlaying[team2].points = teamsPlaying[team2].points + 3;
            }
        } else if ( rule == 2 ) {
            // Rule nº1 : 1st position always win
            // Rule nº2 : 2nd position always draw 
            // Rule nº3 : 3rd position always lose
            // Rule nº4 : highest position always win
            if ( teamsPlaying[team1].position == 1 ) {
                teamsPlaying[team1].points = teamsPlaying[team1].points + 3;
            } else if ( teamsPlaying[team2].position == 1 ) { 
                teamsPlaying[team2].points = teamsPlaying[team2].points + 3;
            } else if ( teamsPlaying[team1].position == 2 || teamsPlaying[team2].position == 2) {  
                teamsPlaying[team1].points = teamsPlaying[team1].points + 1;
                teamsPlaying[team2].points = teamsPlaying[team2].points + 1;
            } else if ( teamsPlaying[team1].position == 3 ) {                              
                teamsPlaying[team2].points = teamsPlaying[team2].points + 3;
            } else if ( teamsPlaying[team2].position == 3 ) {                             
                teamsPlaying[team1].points = teamsPlaying[team1].points + 3;
            } else if ( teamsPlaying[team1].position <= teamsPlaying[team2].position ) {    
                teamsPlaying[team1].points = teamsPlaying[team1].points + 3;
            } else {                                                        
                teamsPlaying[team2].points = teamsPlaying[team2].points + 3;
            }
        }
    }
}


