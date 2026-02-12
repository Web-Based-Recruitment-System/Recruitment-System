//package com.app.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//
//import com.amazonaws.auth.AWSCredentials;
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//
///**
// * @Configuration: Indicates that this class provides bean
// *                 configurations. 
// *@Value("${cloud.aws.credentials.access-key}"):
// *                 Injects the value of the AWS access key from the
// *                 application.properties or application.yml
// *                 file.
// *@Value("${cloud.aws.credentials.secret-key}"): Injects the value of the AWS secret key from the
// *                 application.properties or application.yml
// *                 file. 
// *@Value("${cloud.aws.region.static}"): Injects the AWS region from the application.properties or application.yml file.
// * @Bean: Indicates that the method produces a bean to be managed by the Spring
// *        IoC container. AmazonS3 s3Client(): The method that creates and
// *        configures the Amazon S3 client bean. AWSCredentials: Represents AWS
// *        security credentials. BasicAWSCredentials: An implementation of
// *        AWSCredentials that takes AWS access key and secret key as parameters.
// *        AmazonS3ClientBuilder: A builder for creating an instance of AmazonS3,
// *        allowing configuration of various settings. withCredentials(new
// *        AWSStaticCredentialsProvider(credentials)) : Sets the AWS credentials
// *        for the S3 client. withRegion(region): Sets the AWS region for the S3
// *        client. build(): Builds the Amazon S3 client instance
// */
//public class StorageConfig {
//
//	@Value("${cloud.aws.credentials.access-key}")
//	private String accessKey;
//
//	@Value("${cloud.aws.credentials.secret-key}")
//	private String accessSecret;
//	@Value("${cloud.aws.region.static}")
//	private String region;
//
//	@Bean
//	public AmazonS3 s3Client() {
//		AWSCredentials credentials = new BasicAWSCredentials(accessKey, accessSecret);
//		return AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(credentials))
//				.withRegion(region).build();
//	}
//}
