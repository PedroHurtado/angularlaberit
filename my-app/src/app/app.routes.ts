import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pagina1', loadComponent: () => import('./pages/pagina1/pagina1.component')
            .then((x) => x.Pagina1Component)
    },
    {
        path: 'pagina2', loadComponent: () => import('./pages/pagina2/pagina2.component')
            .then((x) => x.Pagina2Component)
    },
    {
        path: 'pagina3', loadComponent: () => import('./pages/pagina3/pagina3.component')
            .then((x) => x.Pagina3Component)
    },
];
