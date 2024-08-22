import { useThemeColors } from '/@src/composable/useThemeColors'

const randomizeArray = function (arg: number[]) {
  const array = arg.slice()
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function useSalesSparksCharts() {
  const themeColors = useThemeColors()
  const sparklineData = [
    472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932,
    534, 615, 278, 546, 435, 192, 465,
  ]

  const spark1 = shallowRef({
    chart: {
      fontFamily: 'yekan',
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      height: 130,
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.primary],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: 'فروش کل',
        data: randomizeArray(sparklineData),
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'فروش کل',
      offsetX: 5,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title',
        color: themeColors.lightText,
      },
    },
    subtitle: {
      text: '9,374',
      offsetX: 5,
      style: {
        fontSize: '24px',
        fontWeight: '600',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  })

  const spark2 = shallowRef({
    chart: {
      fontFamily: 'yekan',
      id: 'sparkline2',
      group: 'sparklines',
      type: 'area',
      height: 130,
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.info],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: 'سود کل',
        data: randomizeArray(sparklineData),
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'سود کل',
      offsetX: 5,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title',
        color: themeColors.lightText,
      },
    },
    subtitle: {
      text: '24,273.3 تومان',
      offsetX: 5,
      style: {
        fontSize: '24px',
        fontWeight: '600',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  })

  const spark3 = shallowRef({
    chart: {
      fontFamily: 'yekan',
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      height: 130,
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.accent],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: 'سفارشات کل',
        data: randomizeArray(sparklineData),
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    title: {
      text: 'سفارشات کل',
      offsetX: 5,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title',
        color: themeColors.lightText,
      },
    },
    subtitle: {
      text: '4,361',
      offsetX: 5,
      style: {
        fontSize: '24px',
        fontWeight: '600',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  })

  const spark4 = shallowRef({
    chart: {
      fontFamily: 'yekan',
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      height: 130,
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.purple],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: 'سود تلفیقی',
        data: randomizeArray(sparklineData),
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    title: {
      text: 'سود تلفیقی',
      offsetX: 5,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title',
        color: themeColors.lightText,
      },
    },
    subtitle: {
      text: '16,264.37 تومان',
      offsetX: 5,
      style: {
        fontSize: '24px',
        fontWeight: '600',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  })
  return {
    spark1,
    spark2,
    spark3,
    spark4,
  }
}
