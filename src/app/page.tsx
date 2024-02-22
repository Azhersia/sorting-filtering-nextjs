import React from 'react'
import { getData } from '@/utils/handleDatabase'
import FilterComponent from '@/components/FilterComp'

export default async function page() {
  const data = await getData()


  // const sortedData = data.sort((a, b) => a - b)
  // console.log(sortedData)
  return (
    <div>

      <FilterComponent data={data} />

    </div>
  )
}
