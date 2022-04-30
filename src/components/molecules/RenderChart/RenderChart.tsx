import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "reader/atoms"
import styled from "styled-components";
import { EditChartDialog } from "../EditChartDialog";

interface Props {
  item: any;
  handleUpdate(passedItem: any): void;
}

const RenderChart = ({ item, handleUpdate }: Props) => {

  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false)

  return <ChartWrapper>
    <DoughnutChart
      data={{ datasets: [{ data: item.data, backgroundColor: item.backgroundColor, borderWidth: item.borderWidth }] }}
      onClick={() => { setOpenEditDialog(!openEditDialog) }} />
    <EditChartDialog openEditDialog={openEditDialog} item={item} handleUpdate={handleUpdate} />
  </ChartWrapper>
}

export default RenderChart

const ChartWrapper = styled.div`
  height: 200px;
  width: 200px;
`