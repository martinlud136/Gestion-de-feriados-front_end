import React from 'react'
import {Link} from 'react-router-dom'

function DiaFeriado({dia}){
    
    return(
        <div className="row">
            <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <Link to= {`/diasferiados/${dia._id}`}>
                    <span className="card-title">{dia.motivo}</span>
                </Link>
                <p>Mes: {dia.mes}</p>
                <p>Dia: {dia.dia}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DiaFeriado