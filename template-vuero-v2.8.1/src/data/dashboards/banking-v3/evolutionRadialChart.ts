import { useThemeColors } from '/@src/composable/useThemeColors'

export function useEvolutionRadialChart() {
  const themeColors = useThemeColors()

  const evolutionRadialOptions = {
    series: [54],
    chart: {
      fontFamily: 'yekan',
      height: 220,
      type: 'radialBar',
    },
    colors: [themeColors.accent, themeColors.orange, themeColors.orange],
    title: {
      text: 'تکامل بیت کوین (BTC).',
      align: 'left',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 15,
            fontSize: '13px',
            fontFamily: 'Roboto, sans-serif',
            color: themeColors.lightText,
            formatter: function () {
              return ['(30 روز)']
            },
          },
          value: {
            color: themeColors.accent,
            offsetY: -20,
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
          },
        },
      },
    },
    labels: ['Median Ratio'],
  }

  return {
    evolutionRadialOptions,
  }
}
