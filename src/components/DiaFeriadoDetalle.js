import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../Context'

function DiaFeriadoDetalle(){
    const {id} = useParams()
    const {diasFeriados} = useContext(Context)
    const diaSeleccionado = diasFeriados.find(dia=> dia._id === id)
    const {motivo,tipo,info} = diaSeleccionado
    return(
        <div className="row center">
            <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{motivo}</span>
                <p>Tipo: {tipo}</p>
                <a href={`${info}`}>info: {info}</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DiaFeriadoDetalle