import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo17Donuts() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [44, 55, 41, 17, 15]
  })

  return reactive({
    height: 290,
    type: 'donut',
    series,
    options: {
      title: {
        text: 'نمودار دونات',
      },
      chart: {
        fontFamily: 'yekan',
      },
      labels: ['تیم الف', 'تیم ب', 'تیم ث', 'تیم خ', 'تیم E'],
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              fontFamily: 'yekan',
              width: 280,
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
      legend: {
        position: 'right',
        horizontalAlign: 'center',
      },
    },
  })
}
