import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [diasFeriados, setDiasFeriados] = useState([])

    const url = "/diasferiados"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDiasFeriados(data))
    }, [])
    console.log(diasFeriados)
    return (
        <Context.Provider value={{diasFeriados}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}