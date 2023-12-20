import React from 'react'

const Sku = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <div>Sku{id}</div>
    )
}

export default Sku