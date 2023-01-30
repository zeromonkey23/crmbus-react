import React, { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';
import type { EChartsOption } from 'echarts-for-react/lib/types';

import GrafikPieUrl from '../../assets/images/GrafikPie.png';
import { REQUEST_TYPE } from '../../constants/enums';
import { getRequestInit } from '../../helpers/RequestHelper';
import type { CurriculumGrafikPieParams } from '../CurriculumGrafik/CurriculumGrafik.types';

import { CurriculumGrafikPieData } from './GrafikPie.types';

const GrafikPie = () => {
  const [grafikOption, setGrafikOption] = useState<CurriculumGrafikPieData>();

  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Curriculum Development Progress',
        type: 'pie',
        radius: ['30%', '60%'],
        color: ['#e74c3c', '#1abc9c', '#f1c40f', '#2980b9', '#2ecc71'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: '{b} ({c})',
          position: 'outside',
          overflow: 'break',
        },
        labelLayout: {
          moveOverlap: 'shuffleY',
          draggable: true,
        },
        labelLine: {
          show: true,
          showAbove: true,
          length: 10,
          smooth: true,
        },
        data: [], // this.pieData,
        height: 290,
      },
    ],
  };

  const getGrafikData = () => {
    const url = `${process.env.REACT_APP_API_URL}api/v1/Dashboard/get_dashboard_for_grafik/`;
    const payload: CurriculumGrafikPieParams = {
      bacth: '',
      status: '',
      institutionId: [],
      acadCareer: [],
      acadOrg: [],
      acadProg: [],
      acadGroup: [],
    };
    const requestOption = getRequestInit(REQUEST_TYPE.post, payload);

    return fetch(url, requestOption)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const pieData: any[] = [];

        data.data.forEach((value: { value: string; phaseName: string }) => {
          const paired: any = {
            value: value.value,
            name: value.phaseName,
          };

          pieData.push(paired);
        });

        const tempGrafikOption = option;
        Object.keys(tempGrafikOption).forEach((key) => {
          if (key === 'series') {
            tempGrafikOption[key][0].data = pieData;
          }
        });

        setGrafikOption(tempGrafikOption);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  useEffect(() => {
    getGrafikData();
  }, []);

  return (
    <>
      <div>
        {grafikOption && <EChartsReact option={grafikOption}></EChartsReact>}
      </div>
    </>
  );
};

export default GrafikPie;
