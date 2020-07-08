import React from 'react'
import {AtomoTimesTableDataRow, AtomoTimesTableHeadRow, AtomoTimesImgLogo, AtomoLabel, AtomoInputValue, AtomoInput, AtomoButton} from '../Atomos/Atomos'



export default Moleculas => {
    return(
        <div>
            <div>
                Table: <MoleculaTimesTable />
            </div>
            <div>
                Form: <MoleculaTimesForm />
            </div>
            <div>
                Botoes CUD: <MoleculaButtonsCUD />
            </div>
                       
            
        </div>
    )
}

export const MoleculaTimesTable = () => {
    return(
        <table className="molecula">
            <AtomoTimesTableHeadRow />
            <AtomoTimesTableDataRow />
        </table>
    )
}

export const MoleculaTimesForm = () => {
    return(
        <div className="molecula">
        <form action="">
        <AtomoTimesImgLogo />
    
            <AtomoLabel />
            <AtomoInputValue />
    
            <AtomoLabel />
            <AtomoInput />
    
            <AtomoLabel />
            <AtomoInput />
        </form>
        </div>
    )
}

export const MoleculaButtonsCUD = () =>{
    

    return(
        <div className="molecula">
        <AtomoButton>POST</AtomoButton>
        <AtomoButton>Update</AtomoButton>
        <AtomoButton>Delete</AtomoButton>
        </div>
    )
}