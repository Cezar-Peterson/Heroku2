package br.com.sa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PredioController {
    @GetMapping("/predio/predio")
    public String predio(){
        return "predio/predio";
    }

    @GetMapping("/predio/predio2")
    public String predio2(){
        return "predio/predio2";
    }

    @GetMapping("/predio/predio3")
    public String predio3(){
        return "predio/predio3";
    }

    @GetMapping("/predio/predios")
    public String predios(){
        return "predio/predios";
    }
}
