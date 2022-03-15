import React from 'react'
import { useCharacters } from '../customHooks/useCharacters'

import './character.css'

const CharacterList = () => {

    //Custom hooks created for retriving particular data
const {error,data,loading} = useCharacters()

    console.log({ error, loading, data })
    if (loading) {
        return <div>Loading......</div>
    }
    if (error) {
        return <div>Somthing went wrong!</div>
    }
    return (
        <div className='character-list'>
            {
                data.characters.results.map(character => {
                    return (
                        <div key={character.id}>
                            <img  className='boxSize' src={character.image} alt={character.name} />
                            <h2>{character.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CharacterList