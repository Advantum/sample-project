package com.medical.journal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController

@Controller
public class TestController {
	@RequestMapping("/api/welcome")
	public String greet() {
		return "Medical Journal API";
	}
}