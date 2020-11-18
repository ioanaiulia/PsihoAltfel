import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SenzitivityComponent } from './sensitive-process/senzitivity/senzitivity.component';
import { PerceptionComponent } from './sensitive-process/perception/perception.component';
import { ReprezentationComponent } from './sensitive-process/reprezentation/reprezentation.component';
import { ThinkingComponent } from './superior-process/thinking/thinking.component';
import { MemoryComponent } from './superior-process/memory/memory.component';
import { ImaginationComponent } from './superior-process/imagination/imagination.component';
import { MotivationComponent } from './reglatory-process/motivation/motivation.component';
import { WillnessComponent } from './reglatory-process/willness/willness.component';
import { AttentionComponent } from './reglatory-process/attention/attention.component';
import { AffectionComponent } from './reglatory-process/affection/affection.component';
import { AboutPersonalityComponent } from './personality/about-personality/about-personality.component';
import { TemperamentComponent } from './personality/temperament/temperament.component';
import { CharacterComponent } from './personality/character/character.component';
import { SkillsComponent } from './personality/skills/skills.component';
import { CreativityComponent } from './personality/creativity/creativity.component';
import { AboutPsychicActivitiesComponent } from './psychic-activities/about-psychic-activities/about-psychic-activities.component';
import { LanguageComponent } from './psychic-activities/language/language.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  {path: 'about-personality', component: AboutPersonalityComponent },
  {path: 'character', component: CharacterComponent },
  {path: 'creativity', component: CreativityComponent },
  {path: 'temperament', component: TemperamentComponent },
  {path: 'skills', component: SkillsComponent},
  {path: 'about-psychic-activities', component: AboutPsychicActivitiesComponent},
  {path: 'language', component: LanguageComponent},
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
    AboutPersonalityComponent,
    TemperamentComponent,
    CharacterComponent,
    SkillsComponent,
    CreativityComponent,
    AboutPsychicActivitiesComponent,
    LanguageComponent,
    DropdownDirective
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
