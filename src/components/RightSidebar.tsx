import React from 'react'
import './RightSidebar.css';


function RightSidebar() {
  return (
    <div className='right-sidebar-main-content'>
      <div className="localization">
        <p>Select language</p>
        <div className="icons-localization">
          <i className='bx  bxs-globe-americas'  ></i> 
          <i className='bx  bxs-globe-americas'  ></i> 
        </div>
        <div className="difficulty-modes">
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar