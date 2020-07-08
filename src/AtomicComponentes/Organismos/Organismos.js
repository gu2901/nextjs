import React from 'react'
import {MoleculaTimesTable, MoleculaTimesForm, MoleculaButtonsCUD} from '../Moleculas/Moleculas'


export default Organismos => {
    return(
        <div>
            <div>
            Times: <OrganismoTimes />
            </div>
            Campeonatos: <OrganismoCampeonato />
            Rodadas: <OrganismoRodadas />
            Jogos: <OrganismoJogos />
        </div>
    )
}

export const OrganismoTimes = () => {
    return(
        <div className="organismo">
            <MoleculaTimesTable />
            <MoleculaTimesForm />
            <MoleculaButtonsCUD />
        </div>
    )
}

export const OrganismoCampeonato = () => {

    return (
        <div className="organismo">
            Organismo Campeonato
        </div>
    )
}
export const OrganismoRodadas = () => {

    return (
        <div className="organismo">
            Organismo Rodadas
        </div>
    )
}
export const OrganismoJogos = () => {

    return (
        <div className="organismo">
            Organismo Jogos
        </div>
    )
}