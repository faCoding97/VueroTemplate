// Add Icon
function renderPicture(data: any /* , cell: any, row: any */) {
  return `
        <div class="v-avatar">
            <img class="avatar" src="${data}" alt="">
        </div>
    `
}

// Name
function renderName(data: any /* , cell: any, row: any */) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`
}

// Position
function renderPosition(data: any /* , cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Status
function renderStatus(data: any /* , cell: any, row: any */) {
  return `
        <div class="status is-${data}">
            <i aria-hidden="true" class="fas fa-circle"></i>
            <span class="is-capitalize">${data}</span>
        </div>
    `
}

// Button
function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`
}

export const optionsUsers = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false },
  ],
  data: {
    headings: ['شناسه', 'تصویر', 'نام', 'موقعیت', 'وضعیت', 'اقدامات'],
    data: [
      [
        0,
        '/images/avatars/svg/vuero-1.svg',
        'علی زمانی',
        'مدیر پروژه',
        'busy',
        true,
      ],
      [1, '/demo/avatars/7.jpg', 'آلیا خرسندی', 'مهندس نرم افزار', 'offline', true],
      [2, '/demo/avatars/13.jpg', 'تارا سهرابی', 'طراح UI/UX', 'offline', true],
      [3, '/demo/avatars/5.jpg', 'مریم حسینی', 'مدیر پروژه', 'available', true],
      [
        4,
        '/images/avatars/placeholder-f.jpg',
        'Kaylee Jennings',
        'توسعه دهنده وب',
        'available',
        true,
      ],
      [5, '/demo/avatars/27.jpg', 'کاوان عسگری', 'مدیریت منابع انسانی', 'offline', true],
      [6, '/demo/avatars/22.jpg', 'دیبا لشکری', 'مدیر پروژه', 'offline', true],
      [
        7,
        '/images/avatars/placeholder-m.jpg',
        'Paul Morris',
        'توسعه دهنده بک اند',
        'available',
        true,
      ],
      [
        8,
        '/demo/avatars/23.jpg',
        'الناز تهامی',
        'مدیر پروژه',
        'available',
        true,
      ],
      [9, '/demo/avatars/28.jpg', 'احسان ناظری', 'توسعه دهنده وب', 'busy', true],
      [
        10,
        '/images/avatars/placeholder-f.jpg',
        'Shana Williams',
        'مدیر فروش',
        'offline',
        true,
      ],
      [
        11,
        '/images/avatars/placeholder-m.jpg',
        'Benjamin Hoffman',
        'مدیر پروژه',
        'offline',
        true,
      ],
      [12, '/demo/avatars/39.jpg', 'امید شاملو', 'توسعه دهنده وب', 'busy', true],
      [
        13,
        '/demo/avatars/21.jpg',
        'الیزابت رادی',
        'توسعه دهنده موبایل',
        'available',
        true,
      ],
      [14, '/demo/avatars/37.jpg', 'حمید محرابی', 'مدیر پروژه', 'available', true],
      [15, '/demo/avatars/31.jpg', 'Yasseen Amzi', 'تحلیلگر بیزینس', 'offline', true],
    ],
  },
}
