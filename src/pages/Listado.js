import React,{useContext} from 'react'
import {Context} from '../Context'
import DiaFeriado from '../components/DiaFeriado'

function Listado(){
    const {diasFeriados} = useContext(Context)

    const diasFeriadosArr = diasFeriados.map(dia=>{
        return <DiaFeriado key={dia._id} dia={dia}/>
    })
    return(
        <div className= 'container center'>
            {diasFeriadosArr}
        </div>
    )
}

export default Listado