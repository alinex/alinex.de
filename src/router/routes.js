
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'timeline', component: () => import('pages/timeline') },
      { path: 'projects', component: () => import('pages/projects') },
      { path: 'contact', component: () => import('pages/contact') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
