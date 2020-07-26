import React, { Component } from 'react'

export class DragSelect extends Component {

    allowDrop = (e) =>  {
        e.preventDefault();
      }

    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
      }

    drop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }
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
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-2">
                        <div className="given">
                            Steve
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-3">
                        <div className="given">
                            Mark
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    <div className="pair pair-4">
                        <div className="given">
                            Larry
                        </div>
                        <div className="to-enter" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}>

                        </div>
                    </div>
                    
                </div>
                <div className="drag-btn_container mt-3">
                    <button id="draggable-btn1" className='drag-btn' draggable={true} onDragStart={(e)=>this.drag(e)}>Gates</button>
                    <button id="draggable-btn2" className='drag-btn' draggable={true} onDragStart={(e)=>this.drag(e)}>Zuckerberg</button>
                    <button id="draggable-btn3" className='drag-btn' draggable={true} onDragStart={(e)=>this.drag(e)}>Jobs</button>
                    <button id="draggable-btn4" className='drag-btn' draggable={true} onDragStart={(e)=>this.drag(e)}>Page</button>
                </div>
            </div>
        )
    }
}

export default DragSelect
