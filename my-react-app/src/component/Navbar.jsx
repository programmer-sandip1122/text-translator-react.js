import React from 'react'

export default function Navbar() {
  return (
   <>
  <div className="navbar">
        <div className="container">
          <div className="logo">
            <p>Text converter</p>
          </div>

          <div className="main">
            <ul>
              <li>Home</li>
              <li>Blog</li>
             <Link to="/about">About</Link>
              <li>Contact</li>
            </ul>
          </div>

          <div className="searchbar">
            <input type="text" placeholder="Search Here" id="searchbar" />
            <button>Search</button>
          </div>

          <div className="loginbar">
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>

 

   </>
  )
}
