import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo3Line() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'اعضای جدید',
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
      },
    ]
  })

  return reactive({
    type: 'line',
    height: 280,
    series,
    options: {
      chart: {
        fontFamily: 'yekan',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'stepline',
      },
      colors: [themeColors.primary],
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'نمودار مرحله ای',
        align: 'left',
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        categories: [
          'فروردین',
          'اردیبهشت',
          'خرداد',
          'تیر',
          'مرداد',
          'شهریور',
          'مهر',
          'آبان',
          'آذر',
          'دی',
          'بهمن',
          'اسفند',
        ],
      },
    },
  })
}
