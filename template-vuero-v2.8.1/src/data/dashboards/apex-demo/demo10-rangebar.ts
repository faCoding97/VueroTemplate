import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo10RangeBar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'شرکت های بزرگ',
        data: [
          {
            x: 'تیم الف',
            y: [1, 5],
          },
          {
            x: 'تیم ب',
            y: [4, 6],
          },
          {
            x: 'تیم ث',
            y: [5, 8],
          },
          {
            x: 'تیم خ',
            y: [3, 11],
          },
        ],
      },
      {
        name: 'خدمات',
        data: [
          {
            x: 'تیم الف',
            y: [2, 6],
          },
          {
            x: 'تیم ب',
            y: [1, 3],
          },
          {
            x: 'تیم ث',
            y: [7, 8],
          },
          {
            x: 'تیم خ',
            y: [5, 9],
          },
        ],
      },
    ]
  })

  return reactive({
    type: 'rangeBar',
    height: 280,
    series,
    options: {
      chart: {
        fontFamily: 'yekan',
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.primary,
        themeColors.orange,
        themeColors.purple,
        themeColors.primary,
      ],
      title: {
        text: 'ستون محدوده',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      dataLabels: {
        enabled: true,
      },
    },
  })
}
