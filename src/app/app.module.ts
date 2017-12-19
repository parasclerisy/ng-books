import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from "./app/app.component";
import { Routing } from "./routes.module";
import { BookService } from "./services/book.service";
import { BooksComponent } from "./components/books/books.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { EditDetailComponent } from './components/edit-detail/edit-detail.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from "./services/event.service";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    EditDetailComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    NgxPaginationModule,
    OrderModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [BookService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
