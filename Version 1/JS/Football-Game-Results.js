// Footbal JS script to determ some results after season 
let maximumTeams = 16;  // Define how many teams are playing against eachother | Must be even !!
let team = [            // All Teams
    { "indx": 0, "name": "Club Brugge", "position": 1, "points": 0 },
    { "indx": 1, "name": "Anderlecht", "position": 2, "points": 0 },
    { "indx": 2, "name": "Standard", "position": 3, "points": 0 },
    { "indx": 3, "name": "KRC Genk", "position": 4, "points": 0 },
    { "indx": 4, "name": "AA Gent", "position": 5, "points": 0 },
    { "indx": 5, "name": "Antwerp", "position": 6, "points": 0 },
    { "indx": 6, "name": "KV Oostende", "position": 7, "points": 0 },
    { "indx": 7, "name": "Cercle Brugge", "position": 8, "points": 0 },
    { "indx": 8, "name": "Charleroi", "position": 9, "points": 0 },
    { "indx": 9, "name": "KAS Eupen", "position": 10, "points": 0 },
    { "indx": 10, "name": "STVV", "position": 11, "points": 0 },
    { "indx": 11, "name": "Zulte Waregem", "position": 12, "points": 0 },
    { "indx": 12, "name": "KV Kortrijk", "position": 13, "points": 0 },
    { "indx": 13, "name": "KSC Lokeren", "position": 14, "points": 0 },
    { "indx": 14, "name": "Waasland-Beveren", "position": 15, "points": 0 },
    { "indx": 15, "name": "Excel Moeskroen", "position": 16, "points": 0 }
]

// Create all possible matchess - All teams playing against eachother once
let allGamesCreate = [];
    for ( let teamX = 0; teamX < maximumTeams; teamX++ ) {
        for ( let teamY = 0; teamY < teamX; teamY++ ) {
                allGamesCreate.push( [teamX, teamY] );
        }
    }
//console.log(allGamesCreate);

// Create all Game Days
let allGameDays = [];
let teams = [];
let possibleGame = [];
let teamLeft = [];
let teamRight = [];
let aGCLength = allGamesCreate.length; 
for ( let gameDay = 0; gameDay < (maximumTeams-1); gameDay++ ) {    
    for ( let teamZ = 0; teamZ < (maximumTeams/2); teamZ++ ) {
        possibleGame = allGamesCreate[Math.floor((Math.random()*allGamesCreate.length))];
        teamLeft = possibleGame[0];
        teamRight = possibleGame[1];

            console.log("Game Day: " + (gameDay+1) + " - Possible Game: " + possibleGame);
            teams.push([gameDay][possibleGame]);
            console.log(teams);
    }
}

let allGames = [                                                             // All possible matches per round
    [[0, 15], [1, 14], [2, 13], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]],  // 1
    [[7, 15], [0, 14], [1, 13], [2, 12], [3, 11], [4, 10], [5, 9], [6, 8]],  // 2
    [[6, 15], [7, 14], [0, 13], [1, 12], [2, 11], [3, 10], [4, 9], [5, 8]],  // 3
    [[5, 15], [6, 14], [7, 13], [0, 12], [1, 11], [2, 10], [3, 9], [4, 8]],  // 4
    [[4, 15], [5, 14], [6, 13], [7, 12], [0, 11], [1, 10], [2, 9], [3, 8]],  // 5
    [[3, 15], [4, 14], [5, 13], [6, 12], [7, 11], [0, 10], [1, 9], [2, 8]],  // 6
    [[2, 15], [3, 14], [4, 13], [5, 12], [6, 11], [7, 10], [0, 9], [1, 8]],  // 7
    [[1, 15], [2, 14], [3, 13], [4, 12], [5, 11], [6, 10], [7, 9], [0, 8]],  // 8
    [[0, 7], [1, 6], [2, 5], [3, 4], [15, 14], [13, 12], [10, 8], [11, 9]],  // 9
    [[0, 6], [1, 5], [2, 4], [3, 7], [15, 13], [14, 12], [10, 9], [11, 8]],  // 10
    [[0, 5], [1, 4], [2, 3], [7, 6], [15, 12], [14, 11], [13, 10], [8, 9]],  // 11
    [[0, 4], [1, 3], [2, 6], [5, 7], [15, 11], [14, 10], [13, 9], [12, 8]],  // 12
    [[0, 3], [1, 2], [4, 7], [5, 6], [15, 10], [14, 9], [13, 8], [12, 11]],  // 13
    [[0, 2], [1, 7], [3, 6], [4, 5], [15, 9], [14, 8], [13, 11], [12, 10]],  // 14
    [[0, 1], [2, 7], [3, 5], [4, 6], [15, 8], [14, 13], [12, 9], [10, 11]],  // 15
]

// Start Postion Before season
for ( let results = 0; results <= 15; results++) {
    team[results].position = (results+1);
    console.log((results+1) + " : " + team[results].name + " = " + team[results].points);          
}
console.log();

// Let's play ... The Game is on!
for ( let round = 1; round <= 2; round++) {
    for ( let gameDay = 0; gameDay <= 14; gameDay++) {
        for ( let games = 0; games <= 7; games++) {
                // Find the two teams from allGames in team
                // The index changes after each gameDay
            let game = allGames[gameDay][games];
            let team1 = 0;
            let team2 = 0;
            for ( let findTeam = 0; findTeam <=15; findTeam++) {             
                if ( team[findTeam].indx === game[0] ) {
                    team1 = findTeam;
                } else if ( team[findTeam].indx === game[1]) {
                    team2 = findTeam;
                }
            }
            console.log("Playing teams : " + team[team1].name + " - " + team[team2].name);
            console.log(game + " : Games Day : " + (gameDay+1) + " - " + "Game : " + (games+1));

            let rules1 = function() {
                    // Rule nº1 : 2nd position always lose 
                    // Rule nº2 : highest position always win
                if ( team[team1].position == 2 ) {
                    team[team2].points = team[team2].points + 3;
                } else if ( team[team2].position == 2 ) {
                    team[team1].points = team[team1].points + 3;
                } else if ( team[team1].position <= team[team2].position ) {
                    team[team1].points = team[team1].points + 3;
                } else {
                    team[team2].points = team[team2].points + 3;
                }
            }
            let rules2 = function() {
                    // Rule nº1 : 1st position always win
                    // Rule nº2 : 2nd position always draw 
                    // Rule nº3 : 3rd position always lose
                    // Rule nº4 : highest position always win
                if ( team[team1].position == 1 ) {
                    team[team1].points = team[team1].points + 3;
                } else if ( team[team2].position == 1 ) { 
                    team[team2].points = team[team2].points + 3;
                } else if ( team[team1].position == 2 || team[team2].position == 2) {  
                    team[team1].points = team[team1].points + 1;
                    team[team2].points = team[team2].points + 1;
                } else if ( team[team1].position == 3 ) {                              
                    team[team2].points = team[team2].points + 3;
                } else if ( team[team2].position == 3 ) {                             
                    team[team1].points = team[team1].points + 3;
                } else if ( team[team1].position <= team[team2].position ) {    
                    team[team1].points = team[team1].points + 3;
                } else {                                                        
                    team[team2].points = team[team2].points + 3;
                }
            }
            rules1();
            //rules2();
            console.log("Index: " + game[0] + " - " + team[team1].name + " : " + team[team1].points + " points - Position : " + team[team1].position);
            console.log("Index: " + game[1] + " - " + team[team2].name + " : " + team[team2].points + " points - Position : " + team[team2].position);
            console.log();
        } 
    // Sort Team new positions
        team.sort((a, b) => Number(b.points) - Number(a.points));
    // Results After Game Day
        for ( let results = 0; results <= 15; results++) {
            team[results].position = (results+1);
            console.log((results+1) + " : " + team[results].name + " = " + team[results].points);          
        }
        console.log(); console.log("*** End of all matches of Game Day: " + (gameDay+1) + " / round: " + round + " ***"); console.log();         
    }
}
console.log("Difference of " + (team[0].points - team[1].points) + " points");


