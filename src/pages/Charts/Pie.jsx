import React from "react";
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, Legend, PieSeries } from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";


const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie Chart" title="Project Cost Breakdown" />
      <AccumulationChartComponent
        id="pie-chart"
        legendSettings={{ visible:true, background: "#fff" }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        tooltip={{ enable: true }}
        dataLabel={{
          visible: true,
          name: 'text',
          position: 'Inside',
          font: {
            fontWeight: '600',
            color: '#fff',
          },
        }}
      >
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective 
            dataSource={pieChartData} 
            xName='x' 
            yName='y' 
            type='Pie'
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>

    </div>
  )
};

export default Pie;

