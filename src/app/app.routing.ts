import {Routes, RouterModule} from '@angular/router';
import {ModuleListComponentComponent} from './components/module-list-component/module-list-component.component';
import {CourseGridComponentComponent} from './components/course-grid-component/course-grid-component.component';
import {LessonTabsComponentComponent} from './components/lesson-tabs-component/lesson-tabs-component.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'course', pathMatch: 'full'},
  {path: 'course', component: CourseGridComponentComponent},
  {path: 'course/:courseId/module', component: ModuleListComponentComponent},
  {path: 'course/:courseId/module/:moduleId/lesson', component: ModuleListComponentComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: ModuleListComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
