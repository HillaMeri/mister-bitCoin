import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { ContactResolveService } from './services/contact-resolve.service';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'add',
    // resolve: { contact: ContactResolveService },
    component: EditContactComponent
  },
  {
    path: 'edit/:id',
    resolve: { contact: ContactResolveService },
    component: EditContactComponent
  },
  {
    path: 'chart',
    component: StaticPageComponent
  },
  {
    path: 'contact/:id',
    resolve: { contact: ContactResolveService },
    component: ContactDetailsComponent
  },
  {
    path: 'contact',
    component: ContactAppComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
