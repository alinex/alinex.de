
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'timeline', component: () => import('pages/timeline') },
      { path: 'projects', component: () => import('pages/projects') },
      { path: 'policy', component: () => import('pages/policy') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
