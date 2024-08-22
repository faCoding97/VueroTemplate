import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo12Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'تکمیل شده',
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        name: 'در انتظار',
        data: [53, 32, 33, 52, 13, 44, 32],
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
      colors: [themeColors.info, themeColors.primary],
      title: {
        text: 'میله ای افقی چندگانه',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [1396, 1397, 1398, 1399, 1400, 1401, 1402],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    },
  })
}
