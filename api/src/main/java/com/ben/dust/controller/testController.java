package com.ben.dust.controller;

        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test")
public class testController {

    @GetMapping("/")
    public String test() {

        return "{\"success\":1}";
    }

}
