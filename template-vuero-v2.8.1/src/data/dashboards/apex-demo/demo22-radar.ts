import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo22Radar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'سری 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ]
  })

  return reactive({
    height: 350,
    type: 'radar',
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
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      title: {
        text: 'نمودار رادار',
      },
      xaxis: {
        categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      },
    },
  })
}
