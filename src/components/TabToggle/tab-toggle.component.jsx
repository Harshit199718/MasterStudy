import React from 'react'
import './tab-toggle.styles.scss'

function TabToggle(props) {
    return (
        <div className={`${props.active?"active-tab":""} tab-toggle d-flex justify-content-center align-items-center py-3`}>
            <h5 className="tab-title m-0">{props.tabTitle}</h5>
        </div>
    )
}

export default TabToggle
