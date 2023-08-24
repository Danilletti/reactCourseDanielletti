import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    const { gatos } = useCatImage({ fact: 'cat' })

    return (
        <>
            {gatos && <img src={gatos} />}
        </>
    )
}