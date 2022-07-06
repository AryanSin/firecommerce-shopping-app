import React from 'react'
import ReactPlayer from 'react-player'

function Task() {
    return (
        <div>
            <div className="LOGO"><h1>META-LOK</h1></div>
            <div>
                <ReactPlayer url="https://youtu.be/ei7kbQhK1hA" playing={true} controls={false}/>
            </div>
        </div>
    )
}

export default Task
