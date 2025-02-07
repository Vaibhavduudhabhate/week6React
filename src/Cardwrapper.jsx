import React from 'react'

const Cardwrapper = () => {
  return (
    <div>
      <Card innercomponent={<TextComponent />} />
      <Card2>
        <div>
            Children logic card
        </div>
      </Card2>
    </div>
  )
}

function Card({ innercomponent }) {
    return <div style={{border:"2px solid black"}}>
       {innercomponent}
    </div>
}
function Card2({ children }) {
    return <div style={{border:"2px solid black"}}>
       {children}
    </div>
}
function TextComponent() {
    return <div>
        Hi there
    </div>
}


export default Cardwrapper
