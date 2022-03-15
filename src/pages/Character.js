import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../customHooks/useCharacter'
 
import './character.css'
 
const Character = () => {
const {id} = useParams()
console.log(id)
    //Custom hooks created for retriving particular data
    const { error, data, loading } = useCharacter(id)

    console.log({ error, loading, data })
    if (loading) {
        return <div>Loading......</div>
    }
    if (error) {
        return <div>Somthing went wrong!</div>
    }
    return (
        <div className='character'>
         <img src={data.character.image} width={650} height={750} alt={data.character.name}/>
         <div className='character-content'>
             <h1>{data.character.name}</h1>
             <p>{data.character.gender}</p>
            <div className='character-episode'>
                {
                    data.character.episode.map(row => {
                        return (
                            <div>{row.name} - <b>{row.episode}</b></div>
                        )
                    })
                }

            </div>
         </div>
        </div>
    )
}

export default Character