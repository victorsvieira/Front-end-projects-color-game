import React from 'react'
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className='left-sidebar-main-content' >
        <div className="score-board">
            <div className="points-board">
            <i className='bx  bxs-star'></i> 
                <p>25541</p>
            </div>
            <div className="error-board">
                <i className='bx  bxs-x-circle'  ></i> 
                <p>19</p>
            </div>
        </div>
        <div className="game-modes">
            <button>
                RGB
            </button>
            <button>
                HEX
            </button>
            
            <button>
                HSL
            </button>
        </div>
        <div className="storage-settings">
            <button>
                Save score
            </button>
            <button>
                Reset Score
            </button>
        </div>

    </div>
  )
}

export default LeftSidebar