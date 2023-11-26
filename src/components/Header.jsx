import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img width={400} draggable={false} height={400} src="/github2.png" className="header__logo" />
      <h1 className="header__title">Github Explorer</h1>
    </div>
  )
}

export default Header
