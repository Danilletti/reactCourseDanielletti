import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const addAt = (userName) => `@${userName}`

export function App() {
    return (
        <div className='app'>
            <TwitterFollowCard
                addAt={addAt}
                itsFollowing={true}
                userName="danilletti"
                name="Daniel Bautista"
            />

            <TwitterFollowCard
                addAt={addAt}
                itsFollowing={false}
                userName="blo2SonNT"
                name="Pepe "
            />

            <TwitterFollowCard
                addAt={addAt}
                itsFollowing={false}
                userName="midudev"
                name="Miguel Perez"
            />
        </div>

    )
}