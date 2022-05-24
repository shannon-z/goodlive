import React from 'react'

const BuyAndStoreView = () => {
    return (
        <div className="buy-store-container clear-fix">
            <div className="item-container float-left">
                {
                    // !isCollect ?
                    //     <button className="selected o" onClick={storeHandle}>已收藏</button>
                    //     :
                        <button className="selected">收藏</button>
                }
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div >
    )
}

export default BuyAndStoreView