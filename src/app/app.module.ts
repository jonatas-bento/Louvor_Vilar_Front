import { TemplateComponent } from './Cancoes/Template/Template.component';
import { EventosService } from './../services/eventos.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { CancoesComponent } from './Cancoes/Cancoes.component';
import { CarrosselComponent } from 'src/shared/Carrossel/Carrossel.component';
import { NavBarComponent } from 'src/shared/NavBar/NavBar.component';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { EnsaiosService } from 'src/services/ensaios.service';
import { MembrosService } from 'src/services/membros.service';
import { SongsService } from 'src/services/songs.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CancoesComponent,
    TemplateComponent,
    CarrosselComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: environment.root,
    },
    EnsaiosService,
    EventosService,
    MembrosService,
    SongsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
