import { useThemeColors } from '/@src/composable/useThemeColors'

export function useSalesBarChart() {
  const themeColors = useThemeColors()

  const barData = shallowRef([
    {
      x: 'فروردین',
      y: 322,
    },
    {
      x: 'اردیبهشت',
      y: 459,
    },
    {
      x: 'خرداد',
      y: 212,
    },
    {
      x: 'تیر',
      y: 345,
    },
    {
      x: 'مرداد',
      y: 111,
    },
    {
      x: 'شهریور',
      y: 189,
    },
    {
      x: 'مهر',
      y: 498,
    },
    {
      x: 'آبان',
      y: 612,
    },
    {
      x: 'آذر',
      y: 451,
    },
    {
      x: 'دی',
      y: 248,
    },
    {
      x: 'بهمن',
      y: 306,
    },
    {
      x: 'اسفند',
      y: 366,
    },
  ])

  const barData2 = shallowRef([
    {
      x: 'فروردین',
      y: 25,
    },
    {
      x: 'اردیبهشت',
      y: 49,
    },
    {
      x: 'خرداد',
      y: 36,
    },
    {
      x: 'تیر',
      y: 84,
    },
    {
      x: 'مرداد',
      y: 64,
    },
    {
      x: 'شهریور',
      y: 131,
    },
    {
      x: 'مهر',
      y: 48,
    },
    {
      x: 'آبان',
      y: 144,
    },
    {
      x: 'آذر',
      y: 96,
    },
    {
      x: 'دی',
      y: 11,
    },
    {
      x: 'بهمن',
      y: 31,
    },
    {
      x: 'اسفند',
      y: 8,
    },
  ])

  const salesBarOptions = reactive<any>({
    series: [],
    chart: {
      fontFamily: 'yekan',
      height: 205,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.accent, themeColors.primary],
    dataLabels: {
      enabled: false,
    },
    noData: {
      text: 'ددر حال بارگزاری...',
    },
    xaxis: {
      type: 'category',
      tickPlacement: 'on',
      labels: {
        rotate: -45,
        rotateAlways: true,
      },
    },
  })

  return { barData, barData2, salesBarOptions }
}
