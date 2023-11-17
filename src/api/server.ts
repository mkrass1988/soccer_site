const token = 'f7bf55215026bef5577c7404461774445e733dd66131c219'

export const liveData = async () => {
    let team = document.getElementById('team-id')
    const result = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/${team}?lang=en%C2%AEion=us`);
    const data = await result.json()
    let name = Object.values(data.displayName);
    var string;
    string = name.toString();
    var teamName;
    teamName = string.replaceAll(",","")
    let team_name = <HTMLElement> document.getElementById("team-name")
    // if (teamName === null){
    //     alert('oops')
    // } else {
    team_name!.innerHTML = `${teamName}`
    // }
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