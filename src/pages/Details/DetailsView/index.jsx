import React, { useEffect, useState } from 'react'
import PubHeader from '../../../components/PubHeader'
import Swiper from '../../../components/Swiper'
import Tabs from '../../../components/Tabs'
import BuyAndStore from '../BuyAndStore'
import './style.less'
import Comment from '../Comment'
const DetailsView = (props) => {
    const detailsData = props.detailsData
    // const comments=props.comments.data
    // const hasMore=props.comments.hasMore
    return (
        <div>
            <PubHeader title="详情页" />
            <div>
                <Swiper banners={props.detailsData.imgs} />
                <Tabs>
                    <div label="详情">
                        <div className='detail-info'>
                            <h3>{detailsData.title}</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{detailsData.price} /月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{detailsData.info.type}</span>
                                        <p>房屋类型</p>
                                    </li>
                                    <li>
                                        <span>{detailsData.houseType}</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>类型：{detailsData.info.type}</p>
                                    <p>朝向：{detailsData.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>楼层：{detailsData.info.level}</p>
                                    <p>装修：{detailsData.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{detailsData.info.years}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div label="评价">
                        <Comment/>
                    </div>
                </Tabs>

            </div>

            <div>
                <BuyAndStore id={props.id} />
            </div>
        </div>
    )
}

export default DetailsView