// TODO: add code here

window.addEventListener("load", function(){
    // TODO: fetch planets JSON
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
        console.log(json); // it's good practice to log the response object to see it's shape.
        
        // Bonus Mission 1 - Display the astronauts sorted from most to least time in space.
        json.sort((a, b) => (a.hoursInSpace > b.hoursInSpace ? -1 : 1));
        

        let container = document.getElementById("container");
        let astronautCount = 0;
        
        for (i = 0; i < json.length; i++) {
            // Bonus Mission 3 - Add a count of astronauts to the page.
            astronautCount +=1;
            // Bonus Mission 2 - Make the "Active: true" text green, for astronauts that are still active (active is true).
            if (json[i].active === true) {
                container.innerHTML += `<div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style="color: green;">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>`;
            } else {
                container.innerHTML += `<div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style="color: red;">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>`;
            }
            
        }
        // Bonus Mission 3 - Add a count of astronauts to the page.
        container.innerHTML += `<h2>Astronaut Count: ${astronautCount}</h2>`
        });
    });
});