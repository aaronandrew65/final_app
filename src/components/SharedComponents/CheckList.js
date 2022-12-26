import React from 'react'
import Dataloop from './Dataloop'

export default function CheckList({ todos, checkBox }) {
    return (
        todos.map( todo => {
            return <Dataloop  key={todo.id} checkBox={checkBox} todo={todo} />
        })
    )
}