import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo11Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Spaceships',
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ]
  })

  return reactive({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        fontFamily: 'yekan',
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.primary],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      title: {
        text: 'میله افقی',
        align: 'left',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'کره جنوبی',
          'کانادا',
          'انگلستان',
          'هلند',
          'ایتالیا',
          'فرانسه',
          'ژاپن',
          'آمریکا',
          'چین',
          'آلمان',
        ],
      },
    },
  })
}
