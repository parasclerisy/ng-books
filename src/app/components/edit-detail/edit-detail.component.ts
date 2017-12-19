import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from "../../services/book.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../../../model/book";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  public book: any;
  public editForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialogRef<EditDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getBookById(id);
    });
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name, Validators.required),
      author: new FormControl(this.data.author, Validators.required),
      published: new FormControl(this.data.published, Validators.required),
      pages: new FormControl(this.data.pages, Validators.required),
    });
  }

  public getBookById(id) {
    this.bookService.getBookById(id).then((bookDetail: Book) => {
      if (bookDetail && bookDetail[0]) {
        this.book = bookDetail[0];
      }
    }).catch((error) => { console.log("error", error); })
  }

}
