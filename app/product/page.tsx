import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import ProductHeroBanner from '../components/ProductHeroBanner'

const product = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Breadcrumb/>
        <ProductHeroBanner/>
    </div>
  )
}

export default product
