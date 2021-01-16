import React from 'react'

const AnimeCard = ({anime}) => {
    return (
        <article classneme = "anime-card">
            <a 
            href={anime.url}
            target = "_blank"
            rel = "noreferrer">
            <figure>
                <img src={anime.url} alt="Anime Image"/>
            </figure>
            <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
