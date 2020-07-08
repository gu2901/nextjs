import React from 'react'
import {OrganismoTimes} from '../Organismos/Organismos'
import {OrganismoJogos} from '../Organismos/Organismos'
import {OrganismoRodadas} from '../Organismos/Organismos'
import {OrganismoCampeonato} from '../Organismos/Organismos'



export const TemplateUnico = () => {
    return(
        <div>
            <OrganismoCampeonato />
            <OrganismoRodadas />
            <OrganismoJogos />
            <OrganismoTimes />
        </div>
    )
}