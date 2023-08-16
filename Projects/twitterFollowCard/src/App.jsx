import React, { useEffect, useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const addAt = (userName) => `@${userName}`

export function App() {
    const seguidos = ['JuanRuiz04', 'whatevercamps', 'espe0204']
    const cuentas = ['JuanRuiz04', 'whatevercamps', 'espe0204', 'danilletti', 'blo2SonNT', 'Cm3va', 'CamilaQuimbaya']

    const [name1, setName1] = useState('midudev')
    const [follow1, setFollow1] = useState(false)
    const [name2, setName2] = useState('blo2SonNT')
    const [follow2, setFollow2] = useState(false)
    const [name3, setName3] = useState('danilletti')
    const [follow3, setFollow3] = useState(false)

    const clickCito = () => {
        const randomIndex1 = Math.floor(Math.random() * cuentas.length)
        const randomIndex2 = Math.floor(Math.random() * cuentas.length)
        const randomIndex3 = Math.floor(Math.random() * cuentas.length)
        setName1(cuentas[randomIndex1])
        setFollow1(seguidos.includes(cuentas[randomIndex1]))
        setName2(cuentas[randomIndex2])
        setFollow2(seguidos.includes(cuentas[randomIndex2]))
        setName3(cuentas[randomIndex3])
        setFollow3(seguidos.includes(cuentas[randomIndex3]))
    }

    useEffect(() => {
        setFollow1(seguidos.includes(name1));
    }, [name1]);
    useEffect(() => {
        setFollow2(seguidos.includes(name2));
    }, [name2]);
    useEffect(() => {
        setFollow3(seguidos.includes(name3));
    }, [name3]);

    return (
        <div className='app'>
            <TwitterFollowCard
                initialIsFollowing={follow1}
                addAt={addAt}
                userName={name1}
                name="Miguel Perez"
            />
            <TwitterFollowCard
                initialIsFollowing={follow2}
                addAt={addAt}
                userName={name2}
                name="Miguel Perez"
            />
            <TwitterFollowCard
                initialIsFollowing={follow3}
                addAt={addAt}
                userName={name3}
                name="Miguel Perez"
            />

            <button onClick={clickCito}>
                Cambio de User
            </button>
        </div>
    )
}
