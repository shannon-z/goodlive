import React from 'react'
import "./style.less"
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as collectActions from '../../../redux/actions/collect'
const BuyAndStoreView = (props) => {
    const dispatch = useDispatch()
    function storeHandle() {
        if (props.user.token) {
            //允许收藏
            if (isCollected()) {
                //已经收藏了
                dispatch(collectActions.removeCollect(props.id))
            } else {
                //未收藏
                dispatch(collectActions.setCollect(props.id))
            }
        }
        else {
            //请登录
            props.history.push('/login')
        }
    }
    function isCollected() {
        let collects = props.collects
        let id = props.id
        return collects.some(item => {
            return item == id
        })
    }
    return (
        <div className="buy-store-container">
            <div className="item-container float-left">
                {
                    isCollected()?<button className="selected o" onClick={storeHandle}>已经收藏了</button>:<button className="selected" onClick={storeHandle}>收藏</button>
                }
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div >
    )
}

export default withRouter(BuyAndStoreView) 