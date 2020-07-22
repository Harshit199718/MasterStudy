import React, { Component } from 'react'
import './grey-input.styles.scss'

export class GreyInput extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {label,value,placeholder,type,onChange,textarea} = this.props
        return (
            <div className="grey-input">
                <label htmlFor=""> {label} </label>
                {
                    !textarea?
                    <input type={type} value={value} placeholder={placeholder} onChange={(e)=> onChange(e)}/>
                    :
                    <textarea name="" id="" placeholder={placeholder} onChange={(e)=> onChange(e)}>
                        {value}
                    </textarea>
                }
            </div>
        )
    }
}

export default GreyInput
