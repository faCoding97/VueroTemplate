import { useThemeColors } from '/@src/composable/useThemeColors'

export function useReputationChart() {
  const themeColors = useThemeColors()
  const reputationChartOptions = shallowRef({
    series: [65],
    chart: {
      fontFamily: 'yekan',
      height: 140,
      type: 'radialBar',
      offsetX: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.primary],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%',
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
            fontSize: '12px',
            fontWeight: 400,
            offsetY: 5,
            color: themeColors.lightText,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontFamily: 'Roboto, sans-serif',
            color: themeColors.primary,
            fontSize: '16px',
            offsetY: 5,
          },
        },
      },
    },
    labels: ['Progress'],
  })

  return {
    reputationChartOptions,
  }
}
