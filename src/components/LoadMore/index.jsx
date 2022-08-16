import React, { useEffect, useRef, useState } from 'react'
import "./style.less"
const LoadMore = (props) => {
    // 非受控组件，获取元素
    const more = useRef();
    const [loadTop, setloadTop] = useState(10000)
    useEffect(() => {
        // 视口高度
        let winHeight = document.documentElement.clientHeight;
        // 设置一个定时器
        let timer = null;
        function scrollHandle() {
            if (more.current) {
                setloadTop(more.current.getBoundingClientRect().top)
                if (timer) {
                    clearTimeout(timer)
                } else {
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                            props.onLoadMore()
                        }
                    }, 100)
                }
            }
        }
        // 如果滚动条滚动到了底层
        window.addEventListener("scroll", scrollHandle)
        return () => {
            // 取消事件的请求
            // window.removeEventListener("scroll", scrollHandle)
            // 清除定时器
            // clearTimeout(timer)
        }
    }, [loadTop])
    return (

        <div className='load' ref={more}>
            LoadMore
        </div>
    )
}

export default LoadMore