import { useThemeColors } from '/@src/composable/useThemeColors'
import * as formatters from '/@src/utils/apex-formatters'

export function useCustomerEngagementChart() {
  const themeColors = useThemeColors()
  const customerEngagementChartOptions = shallowRef({
    series: [65],
    chart: {
      fontFamily: 'yekan',
      height: 160,
      type: 'radialBar',
      offsetX: -15,
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.accent, themeColors.secondary],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '13px',
            fontWeight: '600',
            color: themeColors.lightText,
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: undefined,
            formatter: formatters.asPercent,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['(30 days)'],
  })

  return {
    customerEngagementChartOptions,
  }
}
