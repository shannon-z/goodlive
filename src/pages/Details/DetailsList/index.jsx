import React, { useEffect, useState } from 'react'
import DetailsView from '../DetailsView'
import api from '../../../api'
const DetailsList = (props) => {
    const [detailsData, setdetailsData] = useState({})
    useEffect(() => {
        api.details({
            id: props.id
        }).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.result)
                setdetailsData(res.data.result)
            }
        })
    }, [])
    return (
        <div>
            {detailsData.imgs ?
                <DetailsView detailsData={detailsData} /> :
                <div>等待数据</div>
            }
        </div>
    )
}

export default DetailsList