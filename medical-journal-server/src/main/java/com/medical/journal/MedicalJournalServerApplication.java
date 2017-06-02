package com.medical.journal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
public class MedicalJournalServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicalJournalServerApplication.class, args);
	}
}
