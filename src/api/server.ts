const token = 'f7bf55215026bef5577c7404461774445e733dd66131c219'

export const liveData = async () => {
    let team_id = document.getElementById('team-dropdown') as HTMLSelectElement;
    let the_id = team_id.options[team_id.selectedIndex];
    let selected_id = the_id.value;
 
    const result = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/${selected_id}?lang=en%C2%AEion=us`);
    const data = await result.json()
    let name = Object.values(data.displayName);
    var string;
    string = name.toString();
    var teamName;
    teamName = string.replaceAll(",","")
    
    const proj_result = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/${selected_id}/projection?lang=en%C2%AEion=us`)
    const proj_data = await proj_result.json()
    let prob = Object.values(proj_data.chanceToWinThisWeek.toString());
    var prob_string;
    prob_string = prob.toString();
    var winProb;
    winProb = prob_string.replaceAll(",","")

    let wins = Object.values(proj_data.projectedWins.toString());
    var proj_wins;
    proj_wins = wins.toString();
    var projWins;
    projWins = proj_wins.replaceAll(",","")

    let output = document.getElementById("projection-output")

    output!.innerHTML = `The ${teamName} have a ${winProb} probability to win this week and are projected to get ${projWins} wins this season`
};


export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://nfl-backend.onrender.com/api/teams`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    add_team: async (data: any = {}) => {
        const response = await fetch(`https://nfl-backend.onrender.com/api/teams`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://nfl-backend.onrender.com/api/teams/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://nfl-backend.onrender.com/api/teams/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}