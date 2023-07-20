import React from 'react'

function Home() {
  return (
    <div className='d-flex p-2 bd-highlight'>
      <img src={process.env.PUBLIC_URL+"Netflix-1.jpg"} />
      {/* <img src={process.env.PUBLIC_URL+"netfx3.jpg"}/> */}

    </div>
  )
}

export default Home