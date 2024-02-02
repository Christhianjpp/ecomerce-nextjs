import ProductFullView from '@/components/ProductFullView'

import SkeletonsProductFull from '@/components/dashboad/product/skeletons-productsFullView'
import React, { Suspense } from 'react'

const Producto = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <div>
            <div className='h-full'>
                <Suspense
                    key={id}
                    fallback={<SkeletonsProductFull />}>
                    {/* <AllProducts products={products} /> */}
                    <ProductFullView id={id} />
                </Suspense>

            </div>
        </div>
    )
}

export default Producto