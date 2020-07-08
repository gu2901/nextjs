import React, { useEffect, Fragment } from 'react';
import {useState} from 'react'
import styled from 'styled-components'



export default Atomos =>{

    return(
        <div>
            <div>
            Label:<AtomoLabel />
            </div>
            <div>
            Input Value: <AtomoInputValue />
            </div>
            <div>
            Input: <AtomoInput />
            </div>
            <div>
            Button: <AtomoButton />
            </div>
            <div>
            TableHead: <AtomoTimesTableHeadRow />
            </div>
            <div>
            TableData: <AtomoTimesTableDataRow />
            </div>
            <div>
            Img: <AtomoTimesImgLogo />
            </div>
        </div>
    )
}


export function AtomoLabel({valorInicial}){
//Aqui vai os States e a Store
    const [valor,setValor] = useState(valorInicial)

//Aqui vai o CSS
    const LabelStyled = styled.label`
    color: orangered;
    `
//Aqui vai o JS, useEffect, useState


//Esse é o Componente Final em HTML
    return(<LabelStyled  className="atomo" htmlFor="">meu Label</LabelStyled>)
}

export const AtomoInputValue = () =>{
    //Aqui vai o CSS
    const InputLabelStyled = styled.label`
        color: blue;
        font-size:12px;
    `

    //Aqui vai o JS
// useEffect, useState

    //Esse é o Componente Final em HTML
    return(<InputLabelStyled  className="atomo" value="as">valor</InputLabelStyled>)
}


export const AtomoInput = () =>{
    const InputStyled = styled.input`
    color: red;
    font-size: 50px;
    `
    return(<InputStyled  className="atomo" type="text"/>)   
}


export const AtomoButton = () =>{
    const ButtonStyled = styled.button`
    color: red;
    font-size: 18px;
    `
    return(<ButtonStyled  className="atomo">meu botao</ButtonStyled>)
}


// Atomos que são usados apenas no Organismo: Times
export const AtomoTimesTableHeadRow = () => {
    const TableHeadStyled = styled.th`
     border: 1px solid black;
    `
    const TableRow = styled.tr`
     border: 1px solid black;
    `

    return (<TableRow  className="atomo">
                <TableHeadStyled>Time</TableHeadStyled>
                <TableHeadStyled>Lastname</TableHeadStyled>
                <TableHeadStyled>Lastname</TableHeadStyled>
                <TableHeadStyled>Age</TableHeadStyled>
            </TableRow>)
}


export const AtomoTimesTableDataRow = () => {
    const TableRow = styled.tr`
    
    `
    const TableData = styled.td`
    border: 1px solid black;
    `

    return (       
            <TableRow  className="atomo">
                <TableData>Jill</TableData>
                <TableData>Smith</TableData>
                <TableData>Smith</TableData>
                <TableData>Smith</TableData>
                <TableData>Smith</TableData>
                <TableData>50</TableData>
            </TableRow>
    )
}

export const AtomoTimesImgLogo = () =>{
    const ImgStyled = styled.img`
        width: 40px;
        height: 40px;
    `

    return(<ImgStyled  className="atomo" src="" alt="minha img aqui"></ImgStyled>)
}

