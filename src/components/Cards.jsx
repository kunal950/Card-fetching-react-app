import React from 'react'
import Card from "./Card"
const cards = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {data.map((photo,index) => (
        <Card key={index} url={photo.url} index={index+1}/>
      ))}
    </div>
  )
}

export default cards
