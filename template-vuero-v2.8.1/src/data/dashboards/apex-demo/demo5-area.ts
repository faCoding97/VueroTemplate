import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo5Area() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'تکمیل شده',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'در انتظار',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'area',
    series,
    options: {
      chart: {
        fontFamily: 'yekan',
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.primary, themeColors.info, themeColors.purple],
      title: {
        text: 'چند منطقه',
        align: 'left',
      },
      legend: {
        position: 'top',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  })
}
