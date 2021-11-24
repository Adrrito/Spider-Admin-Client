import React from 'react'
import { Button } from 'react-bootstrap'

export default function CategoryHome(props) {
    const { _id, children } = props.categories

    return (

        <Button onClick={() => props.handleBtn(_id)} variant="light" className="mx-1">{_id} </Button>

    )
}
