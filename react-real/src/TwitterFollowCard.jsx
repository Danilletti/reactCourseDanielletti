export function TwitterFollowCard({ addAt, userName, name, itsFollowing }) {
    // const imagenSrc = `https://unavatar.io/${userName}`
    const text = itsFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = itsFollowing ? 'Siguiendo' : 'Seguir'

    console.log(itsFollowing)
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
                <button className='tw-followCard-button'>
                    {text}
                </button>
            </aside>
        </article>
    )
}