import MainLayout from '@/views/Layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    redirect: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Início',

        component: () =>
          import(
           '../views/Pages/Index.vue'
          ),
      }
    ],
  }
];

export default routes;
