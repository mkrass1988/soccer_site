import React from 'react'
import { liveData } from '../api/server'

function Contact() {
  return (
        <div className="d-flex flex-row p-2">
            <h1>Who did you say your favorite team was?</h1>
            <div className="p-2">
                <select className="p-2 btn btn-secondary text-white bg-black rounded" name="month" id="team-dropdown" aria-expanded="false">
                    <option value={'22'}>Arizona Cardinals</option>
                    <option value={'1'}>Atlanta Falcons</option>
                    <option value={'33'}>Baltimore Ravens</option>
                    <option value={'2'}>Buffalo Bills</option>
                    <option value={'29'}>Carolina Panthers</option>
                    <option value={'3'}>Chicago Bears</option>
                    <option value={'4'}>Cincinatti Bengals</option>
                    <option value={'5'}>Cleveland Browns</option>
                    <option value={'6'}>Dallas Cowboys</option>
                    <option value={'7'}>Denver Broncos</option>
                    <option value={'8'}>Detroit Lions</option>
                    <option value={'9'}>Green Bay Packers</option>
                    <option value={'34'}>Houston Texans</option>
                    <option value={'11'}>Indianapolis Colts</option>
                    <option value={'30'}>Jacksonville Jaguars</option>
                    <option value={'12'}>Kansas City Chiefs</option>
                    <option value={'13'}>Las Vegas Raiders</option>
                    <option value={'24'}>Los Angeles Chargers</option>
                    <option value={'14'}>Los Angeles Rams</option>
                    <option value={'15'}>Miami Dolphins</option>
                    <option value={'16'}>Minnesota Vikings</option>
                    <option value={'17'}>New England Patriots</option>
                    <option value={'18'}>New Orleans Saints</option>
                    <option value={'19'}>New York Giants</option>
                    <option value={'20'}>New York Jets</option>
                    <option value={'21'}>Philadelphia Eagles</option>
                    <option value={'23'}>Pittsburgh Steelers</option>
                    <option value={'25'}>San Francisco 49ers</option>
                    <option value={'26'}>Seattle Seahawks</option>
                    <option value={'27'}>Tampa Bay Buccaneers</option>
                    <option value={'10'}>Tennessee Titans</option>
                    <option value={'28'}>Washington Commanders</option>
                </select>
            </div>
            <div className="p-2">
                <button className="p-2 btn btn-secondary bg-black text-white rounded" type="button" aria-expanded="false" onClick={liveData}>
                Some Projection Stuff
                </button>
            </div>
            <div className="flex p-5">
                <p id="projection-output" className="d-inline-flex p-2"></p>
            </div>
    </div>
  )
}

export default Contact