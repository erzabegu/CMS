import { RenderChart, RenderImage, RenderText } from "reader/molecules"

interface Props {
    type: string;
    item: any;
    chartData: any;
    handleUpdate?(passedItem: any): void;
}


const RenderItems = ({ type, item, handleUpdate, chartData }: Props) => {
    switch (type) {
        case 'text':
            return <RenderText handleUpdate={handleUpdate} item={item} />
        case 'image':
            return <RenderImage item={item} handleUpdate={handleUpdate}/>
        case 'chart':
            return <RenderChart chartData={chartData} />
        default:
            break;
    }
}
export default RenderItems