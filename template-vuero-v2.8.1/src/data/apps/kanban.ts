import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
export interface KanbanTask {
  id: string
  title: string
  state: string
  dueDate: string
  participants: VAvatarProps[]
}

export function useKanban() {
  const tasks = reactive([
    {
      id: '1',
      title: 'ایجاد نمونه اولیه با احراز هویت JWT',
      state: 'new',
      dueDate: '3 هفته',
      participants: [
        {
          color: 'warning',
          picture: '/demo/avatars/7.jpg',
        },
      ],
    },
    {
      id: '2',
      title: 'با استفاده از React یک کامپوننت لیست کار طراحی کنید',
      state: 'new',
      dueDate: '3 هفته',
      participants: [
        {
          color: 'info',
          picture: '/images/avatars/svg/vuero-1.svg',
        },
      ],
    },
    {
      id: '3',
      title: 'پیاده سازی کاربران REST API',
      state: 'progress',
      dueDate: '3روز',
      participants: [
        {
          color: 'danger',
          picture: '/demo/avatars/12.jpg',
        },
        {
          color: undefined,
          picture: '/demo/avatars/26.jpg',
        },
        {
          color: undefined,
          picture: '/demo/avatars/19.jpg',
        },
      ],
    },
    {
      id: '4',
      title: 'وایرفریم های پروژه را بررسی کنید',
      state: 'progress',
      dueDate: '1 هفته',
      participants: [
        {
          color: 'success',
          picture: '/demo/avatars/13.jpg',
        },
      ],
    },
    {
      id: '5',
      title: 'پیاده سازی فوتر جدید در تمام صفحات',
      state: 'progress',
      dueDate: '5روز',
      participants: [
        {
          color: 'info',
          picture: '/demo/avatars/16.jpg',
        },
      ],
    },
    {
      id: '6',
      title: 'پروژه های REST API را پیاده سازی کنید',
      state: 'ready',
      dueDate: '2روز',
      participants: [
        {
          color: 'warning',
          picture: '/images/avatars/svg/vuero-1.svg',
        },
      ],
    },
    {
      id: '7',
      title: 'طراحی مجدد صفحه لندینگ ',
      state: 'completed',
      dueDate: 'به موقع',
      participants: [
        {
          color: 'success',
          picture: '/demo/avatars/12.jpg',
        },
      ],
    },
    {
      id: '8',
      title: 'پیاده سازی پروژه های REST API ',
      state: 'completed',
      dueDate: 'به موقع',
      participants: [
        {
          color: 'danger',
          picture: '/demo/avatars/18.jpg',
        },
        {
          picture: '/demo/avatars/9.jpg',
        },
      ],
    },
    {
      id: '9',
      title: 'راه اندازی تکثیر پایگاه داده',
      state: 'completed',
      dueDate: 'به موقع',
      participants: [
        {
          color: 'primary',
          picture: '/demo/avatars/13.jpg',
        },
      ],
    },
    {
      id: '10',
      title: 'راه اندازی برنامه آزمایشی Firebase',
      state: 'completed',
      dueDate: 'به موقع',
      participants: [
        {
          color: 'warning',
          picture: '/demo/avatars/16.jpg',
        },
      ],
    },
  ])

  const search = shallowRef('')

  const filteredTasks = computed(() => {
    if (!search.value) {
      return tasks as KanbanTask[]
    } else {
      return tasks.filter((item) => {
        return item.title.match(new RegExp(search.value, 'i'))
      }) as KanbanTask[]
    }
  })

  const participants = computed(() => {
    return tasks.reduce<VAvatarProps[]>((accumulator, task) => {
      for (const participant of task.participants) {
        const exists = accumulator.find((value) => {
          return value.picture === participant.picture
        })

        if (!exists) {
          accumulator.push(participant as VAvatarProps)
        }
      }

      return accumulator
    }, [])
  })

  const newTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'new')
  })
  const progressTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'progress')
  })
  const readyTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'ready')
  })
  const reviewTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'review')
  })
  const completedTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'completed')
  })

  return {
    tasks,
    participants,
    newTasks,
    progressTasks,
    readyTasks,
    reviewTasks,
    completedTasks,
    search,
    filteredTasks,
  }
}
