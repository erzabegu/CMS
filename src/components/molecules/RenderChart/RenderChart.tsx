import { DoughnutChart } from "reader/atoms"
import styled from "styled-components";

interface Props {
  chartData?: any;
  item: any;
}

const RenderChart = ({ chartData, item }: Props) => {
  return <ChartWrapper>
    {chartData && <DoughnutChart data={chartData} />}
  </ChartWrapper>
}

export default RenderChart

const ChartWrapper = styled.div`
  height: 200px;
  width: 200px;
`