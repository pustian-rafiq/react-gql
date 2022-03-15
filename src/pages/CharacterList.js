import React from 'react'
import { useQuery, gql} from '@apollo/client'
import './character.css'

const GET_CHARACTERS = gql`
query{
    characters{
        results{
            id
            name
            image
        }
    }
}
`

const CharacterList = () => {
    const { error, data, loading } = useQuery(GET_CHARACTERS)

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