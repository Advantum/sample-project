package com.medical.journal.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
public class TestController {
	@RequestMapping("/api/welcome")
	public String greet() {
		return "Medical Journal API";
	}
}