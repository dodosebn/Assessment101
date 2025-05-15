import React from 'react'
import { ProductMaps } from '../components/ProductsMaps'
import UseCloth from '@/app/utils/useCloth'


const Page = () => {
  const travelItms = ProductMaps.filter(product => product.category === 'travel')

  return (
   <UseCloth whereWeAreImportingFrom={travelItms}/>
  )
}

export default Page;