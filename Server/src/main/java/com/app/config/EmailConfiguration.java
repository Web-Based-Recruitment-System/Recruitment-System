package com.app.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 * Configuration class for sending email through
 * java application to the user
 */
@Configuration
public class EmailConfiguration {

	@Value("${spring.mail.host:}")
	private String mailHost;
	
	@Value("${spring.mail.port:0}")
	private String mailPort;
	
	@Value("${spring.mail.username:}")
	private String userName;
	
	@Value("${spring.mail.password:}")
	private String userPassword;

	@Bean
	public JavaMailSender getMailSender()
	{
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

		// Prevent crash if email is not configured
		if (mailHost == null || mailHost.isEmpty()) {
			return mailSender;
		}

		mailSender.setHost(mailHost);
		mailSender.setPort(Integer.parseInt(mailPort));
		mailSender.setUsername(userName);
		mailSender.setPassword(userPassword);

		Properties props = mailSender.getJavaMailProperties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.auth", "true");

		return mailSender;
	}
}
