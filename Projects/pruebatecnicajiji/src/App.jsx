import './index.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/otro'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { gatos } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main className="contenido">
            <h1>App de Gatos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {gatos && <img src={gatos} alt={`Imagen extraida de la API dependiente a las tres primeras
                palabras del ${fact}  `} />}
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
                <Otro />
            </section>
            <div>
                <button onClick={handleClick} >Vaya dato Crack</button>
            </div>

        </main >
    )
}