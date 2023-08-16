import { useState, useEffect } from "react"

export function TwitterFollowCard({ addAt, userName, name, initialIsFollowing }) {
    // const imagenSrc = `https://unavatar.io/${userName}`

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const [text, setText] = useState(isFollowing ? 'Siguiendo' : 'Seguir')
    const [buttonClassName, setButtonClassName] = useState(isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button')

    useEffect(() => {
        setIsFollowing(initialIsFollowing)
    }, [initialIsFollowing])

    useEffect(() => {
        setText(isFollowing ? 'Siguiendo' : 'Seguir')
        setButtonClassName(isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button')
    }, [isFollowing])

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    console.log(isFollowing)
    return (

        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-imagen'
                    src={`https://unavatar.io/${userName}`}
                    alt="El avatar general" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}