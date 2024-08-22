import { useThemeColors } from '/@src/composable/useThemeColors'

export function useOverallChart() {
  const themeColors = useThemeColors()
  const overallChartOptions = shallowRef({
    series: [
      {
        name: 'Condition (pt)',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      fontFamily: 'yekan',
      type: 'area',
      height: 280,
      offsetX: 20,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
    },
    colors: [themeColors.primary],
    labels: ['شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  })

  return {
    overallChartOptions,
  }
}
