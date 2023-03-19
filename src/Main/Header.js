import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Youtube Logo"/>
      </div>

      <div className="header-center">
         <div className="search">
          <input type="text" placeholder="Search" className="search-box" />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>


</div>
      </div>
      <div className="header-right">
        <div className="user-info">
          <i className="far fa-comment-alt"></i>
          <i className="far fa-bell"></i>
          <img className="avatar" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg" alt="avatar"/>
        </div>
        <div className="upload">
          <button className="upload-btn">
            <i className="fas fa-long-arrow-alt-up"></i>
           {" "} Upload
          </button>
        </div>

      </div>


    </div>
  )
}


export default Header