import { useEffect, useState } from "react"
import './index.css'

const Gatos_Factos = 'https://catfact.ninja/fact'
const UrlCato = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [gatos, setGatos] = useState()

    // useEffect(() => {
    //     fetch(Gatos_Images)
    //         .then(res => res())
    //         .then(img => setGatos(img.gatos))
    // }, [])

    useEffect(() => {
        fetch(Gatos_Factos)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    useEffect(() => {
        if (!fact) return
        // const firstWord = fact.split(' ')[0]//Metodo para obtener la primera palabra de una cadena de texto
        //.split tambien puede tener un segundo parametro que indica la cantidad de objetos que quieres obtener.
        // const firstWord = fact.split(' ', 3)[0]//Metodo para obtener la primera palabra de una cadena de texto
        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/ugly/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setGatos(url)
                // setGatos(`https://cataas.com${url}`)
            })
    }, [fact])




    return (
        <main className="contenido">
            <h1>App de Gatos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {gatos && <img src={`${UrlCato}${gatos}`} alt={`Imagen extraida de la API dependiente a las tres primeras
                palabras del ${fact}  `} />}
            </section>
        </main >
    )
}