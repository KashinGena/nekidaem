import React from 'react'


const TaskList = (props) => {
    const {innerRef,...rest}=props
    return (
        <div ref={innerRef} {...rest} >
            {props.children}
        </div>
    )
}

export default TaskList