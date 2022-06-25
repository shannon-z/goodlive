import React, { Children, useState } from 'react'
import './style.less'
const Tabs = (props) => {
    const [currentIndex,setcurrentIndex]=useState(0)
    function tabClickHandle(index){
        setcurrentIndex(index)
    }
    function titleClass(index){
        return index===currentIndex?'Tab_title active':'Tab_title'
    }
    return (
        <div>
            <ul className='Tab_title_wrap'>
                {
                    React.Children.map(props.children, (ele, index) => {
                        return <li className={titleClass(index)} onClick={()=>tabClickHandle(index)} key={index}>{ele.props.label}</li>
                    })
                }
            </ul>
            <div>
                {
                    React.Children.map(props.children, (ele, index) => {
                        return <div>
                            {/* 读出子节点中两个tab的子结构 */}
                            {currentIndex===index? ele.props.children:''}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Tabs