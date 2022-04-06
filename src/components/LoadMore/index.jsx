import React, { useEffect, useRef } from 'react'

const LoadMore = () => {
    const more=useRef();
    useEffect(() => {
        // 视口高度
        const winHeight=document.documentElement.clientHeight;
        window.addEventListener("scroll",()=>{
            if(more.current){
                if(winHeight>more.current.getBoundingClientRect().top){
                    console.log("ok")
                }
            }
        })
    }, [])
    return (
        <div ref={more}>

        </div>
    )
}

export default LoadMore