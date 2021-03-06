import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ManagePageComponent } from './components/manage-page/manage-page.component';
import { SearchComponent } from './components/search/search.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlertDialogComponent } from './share/components/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './share/components/confirm-dialog/confirm-dialog.component';
import { DaumAddressComponent } from './share/components/daum-address/daum-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagePageComponent,
    SearchComponent,
    UserListComponent,
    UserDialogComponent,
    UserDetailComponent,
    ToolbarComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
    DaumAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    UserDialogComponent,
    AlertDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
