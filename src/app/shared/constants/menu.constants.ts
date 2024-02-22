import { MenuItem } from '../interfaces/menu-item.interface';

export const MENU: MenuItem[] = [
  {
    title: 'Services',
    route: 'services',
    icon: 'bi-building',
    children: [
      {
        title: 'Media',
        route: 'media',
        icon: 'bi-collection-play',
        children: [
          {
            title: 'Gallery',
            route: 'gallery',
            icon: 'bi-card-image',
          },
          {
            title: 'Native advertising',
            route: 'advertising',
            icon: 'bi-wechat',
          },
        ],
      },
      {
        title: 'Careers',
        route: 'home',
        icon: 'bi-joystick',
        children: [
          {
            title: 'Frontend Development',
            route: 'frontend',
            icon: 'bi-tv',
            children: [
              {
                title: 'Angular',
                route: 'angular',
                icon: 'bi-arrow-through-heart',
              },
              {
                title: 'React',
                route: 'react',
                icon: 'bi-heartbreak',
              },
              {
                title: 'Vue',
                route: 'vue',
                icon: 'bi-heartbreak',
              },
            ],
          },
          {
            title: 'Backend Development',
            route: 'backend',
            icon: 'bi-database-check',
          },
          {
            title: 'Business Analytic',
            route: 'analytic',
            icon: 'bi-lightbulb',
          },
          {
            title: 'Project manager',
            route: 'manager',
            icon: 'bi-kanban',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    route: 'about',
    icon: 'bi-star',
    children: [
      {
        title: 'Events',
        route: 'events',
        icon: 'bi-calendar-event',
      },
      {
        title: 'News',
        route: 'news',
        icon: 'bi-trophy',
      },
      {
        title: 'Social',
        route: 'social',
        icon: 'bi-instagram',
      },
    ],
  },
  {
    title: 'Contact us',
    route: 'contacts',
    icon: 'bi-telephone',
  },
];
