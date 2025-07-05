package com.library.controller;

import com.library.service.BookService;

public class BookController {

    private BookService bookService;

    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    public void requestBook(String bookName) {
        System.out.println("BookController: Request received for book - " + bookName);
        bookService.addBook(bookName);
    }
}
