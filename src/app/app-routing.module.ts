import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';

// définission de la constante pour les routes
const albumsRoutes: Routes = [
  {
  path: 'albums',
  component: AlbumsComponent
  },
  {
  path: '',
  redirectTo: '/albums',
  pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'album/:id',
  component: AlbumDescriptionComponent
  },
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
