import { useThemeColors } from '/@src/composable/useThemeColors'

export function useProfitChart() {
  const themeColors = useThemeColors()

  const profitChartOptions = shallowRef({
    series: [
      {
        name: 'نسبت',
        data: [2.3, 3.1, 4.0, 10.1, 4.0],
      },
    ],
    chart: {
      fontFamily: 'yekan',
      height: 265,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: string) {
        return val + '%'
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: string) {
          return val + '%'
        },
      },
    },
    colors: [themeColors.primary, themeColors.secondary, themeColors.orange],
    title: {
      text: 'تکامل سود',
      align: 'left',
    },
  })

  return {
    profitChartOptions,
  }
}
