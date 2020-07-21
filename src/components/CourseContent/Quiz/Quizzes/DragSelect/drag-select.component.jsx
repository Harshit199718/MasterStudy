import React, { Component } from 'react'

export class DragSelect extends Component {
    render() {
        return (
            <div className='mb-4'>
                <h5 className="question mb-3">
                    Which of the indicated programming languages can create mobile sentences?
                </h5>
                <div className="options">

                    <div className="pair pair-1">
                        <div className="given">
                            Bill
                        </div>
                        <div className="to-enter">

                        </div>
                    </div>
                    <div className="pair pair-2">
                        <div className="given">
                            Steve
                        </div>
                        <div className="to-enter">

                        </div>
                    </div>
                    <div className="pair pair-3">
                        <div className="given">
                            Mark
                        </div>
                        <div className="to-enter">

                        </div>
                    </div>
                    <div className="pair pair-4">
                        <div className="given">
                            Larry
                        </div>
                        <div className="to-enter">

                        </div>
                    </div>
                    
                </div>
                <div className="drag-btn_container mt-3">
                    <button className='drag-btn'>Gates</button>
                    <button className='drag-btn'>Zuckerberg</button>
                    <button className='drag-btn'>Jobs</button>
                    <button className='drag-btn'>Page</button>
                </div>
            </div>
        )
    }
}

export default DragSelect
