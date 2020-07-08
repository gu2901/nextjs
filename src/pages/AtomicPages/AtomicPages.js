//importa meu componente, aqui é tipo só leitura de componentes
import Link from 'next/link'


export default PageAtomos => {
    return (
        <div>
             <div>
                <Link as="/AtomicPages/PageAtomos" href='/AtomicPages/PageAtomos'>
                <a>Atomos</a>
                </Link>
            </div>
             <div>
                <Link as="/AtomicPages/PageMoleculas" href='/AtomicPages/PageMoleculas'>
                <a>Moleculas</a>
                </Link>
            </div>
             <div>
                <Link as="/AtomicPages/PageOrganismos" href='/AtomicPages/PageOrganismos'>
                <a>Organismos</a>
                </Link>
            </div>
        </div>
    )
}