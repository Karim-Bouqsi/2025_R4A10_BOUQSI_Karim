import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooksApiService } from '../../services/books-api.service';
import { Book } from '../../models/book';
@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  @Output() bookCreationEventEmitter = new EventEmitter<{ title: string; author: string; description: string }>();

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
  });

  constructor(private bookService: BooksApiService) {}
  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook({
        title: this.bookForm.value.title ?? '',
        author: this.bookForm.value.author ?? '',
        description: this.bookForm.value.description ?? '',
        coverUrl: 'https://placehold.co/150x200'
      }).subscribe(() => {
        console.log('Livre ajouté via API');
        this.bookForm.reset();
      });
    }
  }
  
}