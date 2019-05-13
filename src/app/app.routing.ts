import {Routes, RouterModule} from '@angular/router';
import {ModuleListComponentComponent} from './components/module-list-component/module-list-component.component';

const appRoutes: Routes = [
  {path: 'module', component: ModuleListComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
