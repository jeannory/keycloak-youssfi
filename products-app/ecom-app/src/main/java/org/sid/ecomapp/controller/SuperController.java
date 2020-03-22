package org.sid.ecomapp.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;

public class SuperController {

    @ExceptionHandler(Exception.class)
    public String exceptionHandler(){
        return "errors";
    }
}
