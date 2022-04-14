import { useDrag } from 'react-dnd';
import styled from 'styled-components';

interface DropResult {
    name?: string;
    pageName?: string;
    fileDetails?: any;
    setFileDetails?: any;
    handleDroppableEvent?(dropResult: DropResult): void;
    children: any;
    tipi?: any;
}


const WidgetList = ({ fileDetails, handleDroppableEvent, children, tipi }: DropResult) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name: 'itemi' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                handleDroppableEvent({ ...dropResult, tipi: tipi })
                // alert(`You dropped ${item.name} into section: ${dropResult.name} page: ${dropResult.pageName} type: ${tipi}! `)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return <StyledWrapper ref={drag}>
        {children}
    </StyledWrapper>
}

export default WidgetList

const StyledWrapper = styled.div`
    display: flex;
    padding: 5px;
`