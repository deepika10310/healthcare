package com.example.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collections;
import java.util.Map;

@RestController
public class GreetingController {
    @GetMapping("/api/greeting")
    public Map<String, String> greeting() {
        return Collections.singletonMap("message", "Hello, World!");
    }
}
