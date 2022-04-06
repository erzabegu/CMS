import React from 'react'
import { useDrag } from 'react-dnd';
import { Input } from 'reader/atoms'

interface DropResult {
    name?: string;
    pageName?: string;
    fileDetails?: any;
    setFileDetails?: any;
}

const WidgetList = ({ name, pageName, fileDetails, setFileDetails }: DropResult) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name: 'itemi' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into section: ${dropResult.name} page: ${dropResult.pageName}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    return <div ref={drag}>
        <Input
            type='text'
            defaultValue={'defaultName'}
        />
    </div>
}

export default WidgetList