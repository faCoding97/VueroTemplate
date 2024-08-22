import { useThemeColors } from '/@src/composable/useThemeColors'

export function useLineStatsWidgetCharts() {
  const themeColors = useThemeColors()

  const lineStatsChartOptions = shallowRef({
    series: [
      {
        name: 'درآمد',
        data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
      },
    ],
    chart: {
      fontFamily: 'yekan',
      height: 250,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.accent],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return   val + 'تومان'
        },
      },
    },
  })

  return {
    lineStatsChartOptions,
  }
}
