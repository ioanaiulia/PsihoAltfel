import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AffectionComponent } from './body/reglatory-process/affection/affection.component';
import { AttentionComponent } from './body/reglatory-process/attention/attention.component';
import { MotivationComponent } from './body/reglatory-process/motivation/motivation.component';
import { WillnessComponent } from './body/reglatory-process/willness/willness.component';
import { PerceptionComponent } from './body/sensitive-process/perception/perception.component';
import { ReprezentationComponent } from './body/sensitive-process/reprezentation/reprezentation.component';
import { SenzitivityComponent } from './body/sensitive-process/senzitivity/senzitivity.component';
import { ImaginationComponent } from './body/superior-process/imagination/imagination.component';
import { MemoryComponent } from './body/superior-process/memory/memory.component';
import { ThinkingComponent } from './body/superior-process/thinking/thinking.component';
import { HomeComponent } from './header/home/home.component';
import { PersonalityComponent } from './body/personality/personality.component';
import { PsychicActivitiesComponent } from './body/psychic-activities/psychic-activities.component';

const appRoutes: Routes = [
  {path: 'personality', component: PersonalityComponent},
  {path: 'psychic-activities', component: PsychicActivitiesComponent},
  {path: 'affection', component: AffectionComponent},
  {path: 'attention', component: AttentionComponent},
  {path: 'motivation', component: MotivationComponent},
  {path: 'willness', component: WillnessComponent},
  {path: 'perception', component: PerceptionComponent},
  {path: 'reprezentation', component: ReprezentationComponent},
  {path: 'senzitivity', component: SenzitivityComponent},
  {path: 'imagination', component: ImaginationComponent},
  {path: 'memory', component: MemoryComponent},
  {path: 'thinking', component: ThinkingComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SenzitivityComponent,
    PerceptionComponent,
    ReprezentationComponent,
    ThinkingComponent,
    MemoryComponent,
    ImaginationComponent,
    MotivationComponent,
    WillnessComponent,
    AttentionComponent,
    AffectionComponent,
    PersonalityComponent,
    DropdownDirective,
    FooterComponent,
    BodyComponent,
    PsychicActivitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
