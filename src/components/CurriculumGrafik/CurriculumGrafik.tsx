import React, { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';
import type { EChartsOption } from 'echarts-for-react/lib/types';

import GrafikImage from '../../assets/images/Grafik.png';
import { REQUEST_TYPE } from '../../constants/enums';
import { getRequestInit } from '../../helpers/RequestHelper';

import type { CurriculumGrafikType } from './CurriculumGrafik.types';

const CurriculumGrafik = (prop: CurriculumGrafikType) => {
  const [grafikOption, setGrafikOption] = useState<EChartsOption>();

  const option: EChartsOption = {
    legend: {
      orient: 'horizontal',
      top: '5%',
    },
    grid: {
      show: true,
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Total Curriculum Submitted',
        data: [],
        type: 'bar',
        label: {
          show: true,
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };

  const getGrafikData = async () => {
    setGrafikOption(null);
    const url = `${process.env.REACT_APP_API_URL}api/v1/Dashboard/get_dashboard_for_grafik_by_range_batch/${prop.batchStart}/${prop.batchEnd}`;
    const requestOption = getRequestInit(REQUEST_TYPE.get, null);

    return fetch(url, requestOption)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const barChartLabel: string[] = [];
        const barData: number[] = [];

        data.data.forEach((group: any) => {
          barChartLabel.push(group.batch);
          barData.push(group.value);
        });

        const modifiedData: EChartsOption = option;

        Object.keys(modifiedData).forEach((key, index) => {
          if (key === 'xAxis') {
            modifiedData[key].data = barChartLabel;
          }

          if (key === 'series') {
            modifiedData[key][0].data = barData;
          }
        });

        setGrafikOption(modifiedData);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    getGrafikData();
  }, []);

  return (
    <>
      <div className='p-3'>
        {/* <img src={GrafikImage} alt='grafik' className='block w-full' /> */}
        {grafikOption && <EChartsReact option={grafikOption} />}
      </div>
    </>
  );
};

export default CurriculumGrafik;
