import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav>
            <div className="nav-wrapper teal">
            <Link to='/'><a href="#" className="brand-logo center">Listado feriados 2020</a></Link>
            </div>
        </nav>
    )
}

export default Header