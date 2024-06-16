import React from 'react'


// catch all route --> [...route]
// make it optional --> [[...route]]
const Post  = ({params}) => {
  //URL params == params
  console.log(params)
  return (
    <div>Post Item</div>
  )
}

export default Post 