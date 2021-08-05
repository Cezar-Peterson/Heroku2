package br.com.sa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MonumentoController {
    @GetMapping("/Monumento/monumento")
    public String monumento(){
        return "Monumento/monumento";
    }
}
