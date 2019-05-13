import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponentComponent } from './components/course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './components/module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './components/lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './components/topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './components/widget-list-component/widget-list-component.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [CourseServiceClient, LessonServiceClient, ModuleServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
