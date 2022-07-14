import React from 'react'
import { SideMenu } from './Sidebar.style'
import { FaUserFriends, FaAngleDoubleRight } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <SideMenu>
        <div className='SidemenuButtonWrapper'>
            <FaUserFriends/>
        </div>
        <div style={{backgroundColor: 'transparent', marginTop: '10px'}}>
            <FaAngleDoubleRight className='Icon'/>
        </div>
    </SideMenu>
  )
}

export default Sidebar