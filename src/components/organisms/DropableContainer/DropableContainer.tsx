import React from "react";
import { useDrop } from "react-dnd";

interface DropResult {
    name: string;
    children?: any;
    pageName: any;
}

const DropableContainer = ({ name, children, pageName }: DropResult) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({ name: name, pageName: pageName }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = '#fefefe'
    if (isActive) {
        backgroundColor = 'lightgrey'
    } else if (canDrop) {
        backgroundColor = 'lightgreen'
    }
    return <div ref={drop} role={'1'} style={{ backgroundColor }}>{children}</div>
}

export default DropableContainer