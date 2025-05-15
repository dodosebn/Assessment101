import React from 'react'
import { ProductMaps } from '../components/ProductsMaps'
import UseCloth from '@/app/utils/useCloth'


const Page = () => {
  const foodItms = ProductMaps.filter(product => product.category === 'Food')

  return (
  <UseCloth whereWeAreImportingFrom={foodItms}/>
  )
}

export default Page;