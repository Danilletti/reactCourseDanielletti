import { useEffect, useState } from "react"

const UrlCato = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [gatos, setGatos] = useState()
    useEffect(() => {
        if (!fact) return
        // const firstWord = fact.split(' ')[0]//Metodo para obtener la primera palabra de una cadena de texto
        //.split tambien puede tener un segundo parametro que indica la cantidad de objetos que quieres obtener.
        // const firstWord = fact.split(' ', 3)[0]//Metodo para obtener la primera palabra de una cadena de texto
        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setGatos(url)
                // setGatos(`https://cataas.com${url}`)
            })
    }, [fact])
    return { gatos: `${UrlCato}${gatos}` }
}