const token = 'b'

export const liveData = async () => {
    const result = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/6?lang=en%C2%AEion=us');
    const data = await result.json()
    let name = Object.values(data.displayName);
    var string;
    string = name.toString();
    var teamName;
    teamName = string.replaceAll(",","")
    console.log(teamName)
    let team_name = <HTMLElement> document.getElementById("team-name")
    // if (teamName === null){
    //     alert('oops')
    // } else {
    team_name!.innerHTML = `${teamName}`
    // }
};


export const server_call = {
    prem: async () => {
        const response = await fetch('https://livescore-sports.p.rapidapi.com/v1/competitions/standings?timezone=0&competition_id=65&locale=EN',
        {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-RapidAPI-Key': 'bd929a54a5mshd4ee0e0c74b3c52p1fd909jsn9aad530d729b',
		        'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        console.log(response.json())
    }
}

const url = 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd929a54a5mshd4ee0e0c74b3c52p1fd909jsn9aad530d729b',
		'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export default options





export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
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

    create: async (data: any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
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
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
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
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
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