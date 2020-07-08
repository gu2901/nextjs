import Link from 'next/link'
const { createEmitAndSemanticDiagnosticsBuilderProgram } = require("typescript")


const TimesLista = ({ listaTimes }) => {
    return (
      <ul>
        {listaTimes.map((time) => (
          <Link as={`${time.nomeTime}`} href="[otime]">
             
          <a>
          <li key={`${time.nomeTime}`}>{time.nomeTime}</li>
          </a>
          </Link>
        ))}
      </ul>
    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/times')
    const listaTimes = await res.json()
  
    return {
      props: {
        listaTimes,
      },
    }
  }

  export default TimesLista