import { useThemeColors } from '/@src/composable/useThemeColors'
import { asMinutes, perSession, toString } from '/@src/utils/apex-formatters'

export function useDemo2Line() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'مدت زمان جلسه',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: 'بازدید از صفحه',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: 'بازدید کلی',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'line',
    series,
    options: {
      chart: {
        fontFamily: 'yekan',
        height: 280,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.accent, themeColors.info, themeColors.primary],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      title: {
        text: 'چند خطی',
        align: 'left',
      },
      legend: {
        tooltipHoverFormatter: function (val: string, opts: any) {
          return (
            val +
            ' - ' +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ''
          )
        },
        position: 'top',
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
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
      tooltip: {
        y: [
          {
            title: {
              formatter: asMinutes,
            },
          },
          {
            title: {
              formatter: perSession,
            },
          },
          {
            title: {
              formatter: toString,
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  })
}
