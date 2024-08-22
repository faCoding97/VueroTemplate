import { useThemeColors } from '/@src/composable/useThemeColors'
import { asKDollar } from '/@src/utils/apex-formatters'

export function useDemo8Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'سود خالص',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'درآمد',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'جریان ازاد نقدینگی',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
      },
      yaxis: {
        title: {
          text: ' (هزار) تومان',
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      title: {
        text: 'میله های متعدد',
        align: 'left',
      },
      tooltip: {
        y: {
          formatter: asKDollar,
        },
      },
    },
  })
}
