import React from 'react'
import { Topbar } from './Navigation.style'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { SiTrello } from "react-icons/si";
import { RiArrowDownSLine } from 'react-icons/ri'
import { AiOutlineSearch, AiOutlineInfoCircle } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { ImUserTie } from 'react-icons/im'


const Navigation = () => {
  return (
    <Topbar>
        <div className='LeftMenu'>
            <button className='MenuButtonWrapper'>
                <BsFillGrid3X3GapFill className='Icon'/>
            </button>
            <div className='LeftMenuItem'>
                <SiTrello/>&nbsp;
                <div>
                    Trello
                </div>
            </div>
            <div className='LeftMenuItem'>
                Workspaces <RiArrowDownSLine/>
            </div>
            <div className='LeftMenuItem'>
                Recent <RiArrowDownSLine/>
            </div>
            <div className='LeftMenuItem'>
                Starred <RiArrowDownSLine/>
            </div>
            <div className='LeftMenuItem'>
                Templates <RiArrowDownSLine/>
            </div>
            <div className='LeftMenuItem'>
                Create
            </div>
        </div>
        <div className='RightMenu'>
            <div className='SearchWrapper'>
                <AiOutlineSearch className='Search'/>
                <input type='search' placeholder='Search'/>
            </div>
            <button className='MenuButtonWrapper'>
                < AiOutlineInfoCircle className='Icon'/>
            </button>
            <button className='MenuButtonWrapper'>
                < IoMdNotificationsOutline className='Icon'/>
            </button>
            <div style={{width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                < ImUserTie className='Icon'/>
            </div>
        </div>
    </Topbar>
  )
}

export default Navigation