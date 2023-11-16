import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"
import { FormControl, MenuItem, InputLabel, Select, SelectChangeEvent } from '@mui/material'

import { useState } from "react"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseTeam } from '../redux/slices/RootSlice'

interface TeamFormProps {
  id?: string[]
}

const TeamForm = ( props:TeamFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  let [ open, setOpen ] = useState(false);

  open = open
    const handleClose = () => {
        setOpen(false)
        setTimeout( () => {window.location.reload()}, 500)
    }

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseTeam(data.team_name));

      server_calls.add_team(store.getState())
    }
  }

  const [team_name, setCover] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCover(event.target.value as string);
  }; //todo

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input {...register('name')} name='name' placeholder="Name" />
            </div>
            <div className="pt-3">
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Team Name</InputLabel>
              <Select
                // name='cover'
                {...register('team_name')}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={team_name}
                label="team_name"
                onChange={handleChange}
              >
                <MenuItem value={'Arizona Cardinals'}>Arizona Cardinals</MenuItem>
                <MenuItem value={'Atlanta Falcons'}>Atlanta Falcons</MenuItem>
                <MenuItem value={'Baltimore Ravens'}>Baltimore Ravens</MenuItem>
                <MenuItem value={'Buffalo Bills'}>Buffalo Bills</MenuItem>
                <MenuItem value={'Carolina Panthers'}>Carolina Panthers</MenuItem>
                <MenuItem value={'Chicago Bears'}>Chicago Bears</MenuItem>
                <MenuItem value={'Cincinatti Bengals'}>Cincinatti Bengals</MenuItem>
                <MenuItem value={'Cleveland Browns'}>Cleveland Browns</MenuItem>
                <MenuItem value={'Dallas Cowboys'}>Dallas Cowboys</MenuItem>
                <MenuItem value={'Denver Broncos'}>Denver Broncos</MenuItem>
                <MenuItem value={'Detroit Lions'}>Detroit Lions</MenuItem>
                <MenuItem value={'Green Bay Packers'}>Green Bay Packers</MenuItem>
                <MenuItem value={'Houston Texans'}>Houston Texans</MenuItem>
                <MenuItem value={'Indianapolis Colts'}>Indianapolis Colts</MenuItem>
                <MenuItem value={'Jacksonville Jaguars'}>Jacksonville Jaguars</MenuItem>
                <MenuItem value={'Kansas City Chiefs'}>Kansas City Chiefs</MenuItem>
                <MenuItem value={'Las Vegas Raiders'}>Las Vegas Raiders</MenuItem>
                <MenuItem value={'Los Angeles Chargers'}>Los Angeles Chargers</MenuItem>
                <MenuItem value={'Los Angeles Rams'}>Los Angeles Rams</MenuItem>
                <MenuItem value={'Miami Dolphins'}>Miami Dolphins</MenuItem>
                <MenuItem value={'Minnesota Vikings'}>Minnesota Vikings</MenuItem>
                <MenuItem value={'New England Patriots'}>New England Patriots</MenuItem>
                <MenuItem value={'New Orleans Saints'}>New Orleans Saints</MenuItem>
                <MenuItem value={'New York Giants'}>New York Giants</MenuItem>
                <MenuItem value={'New York Jets'}>New York Jets</MenuItem>
                <MenuItem value={'Philadelphia Eagles'}>Philadelphia Eagles</MenuItem>
                <MenuItem value={'Pittsburgh Steelers'}>Pittsburgh Steelers</MenuItem>
                <MenuItem value={'San Francisco 49ers'}>San Francisco 49ers</MenuItem>
                <MenuItem value={'Seattle Seahawks'}>Seattle Seahawks</MenuItem>
                <MenuItem value={'Tampa Bay Buccaneers'}>Tampa Bay Buccaneers</MenuItem>
                <MenuItem value={'Tennessee Titans'}>Tennessee Titans</MenuItem>
                <MenuItem value={'Washington Commanders'}>Washington Commanders</MenuItem>
              </Select>
              </FormControl>
            </div>
            <div className="flex p-1">
            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            onClick={handleClose}
            >
                Submit
            </Button>
            </div>
        </form>
    </div>
  )
}

export default TeamForm