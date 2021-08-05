package br.com.sa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PredioController {
    @GetMapping("/predio/predio")
    public String predio(){
        return "Predio/predio";
    }

    @GetMapping("/predio/predio2")
    public String predio2(){
        return "Predio/predio2";
    }

    @GetMapping("/predio/predio3")
    public String predio3(){
        return "Predio/predio3";
    }

    @GetMapping("/predio/predios")
    public String predios(){
        return "Predio/predios";
    }
}
