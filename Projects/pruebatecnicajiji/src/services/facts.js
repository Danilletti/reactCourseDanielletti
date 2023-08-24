const Gatos_Factos = 'https://catfact.ninja/fact'
export const getRandomFact = async (setFact) => {
    const res = await fetch(Gatos_Factos)
    const data = await res.json()
    const { fact } = data
    return fact
}