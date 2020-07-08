//importa meu componente, aqui é tipo só leitura de componentes
import Atomos from '../../AtomicComponentes/Atomos/Atomos'
import Link from 'next/link'


export default PageAtomos => {
    return (
        <div>
        <div>
        <Atomos />
        </div>
        <div>
        <Link href="/index">
        <a>Clique Aqui para VOLTAR</a>
        </Link>
        </div>
        </div>

    )
}