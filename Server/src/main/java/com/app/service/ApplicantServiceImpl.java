package com.app.service;

import static com.app.utils.ApplicantHelper.findApplicantByUserId;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.multipart.MultipartFile;
//import com.amazonaws.services.s3.AmazonS3;

import com.app.entities.ApplicantEntity;
import com.app.entities.LanguageEntity;
import com.app.entities.SkillEntity;
import com.app.exception.ResourceNotFoundException;
import com.app.payload.response.ApiResponse;
import com.app.payload.response.ApplicantResponse;
import com.app.payload.response.LanguageResponse;
import com.app.payload.response.SkillResponse;
import com.app.repository.ApplicantRepository;
import com.app.repository.LanguageEntityRepository;
import com.app.repository.SkillEntityRepository;
import com.app.security.FindAuthenticationDetails;

@Service
@Transactional
public class ApplicantServiceImpl implements ApplicantService {

	@Autowired
	private ApplicantRepository applicantRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private FindAuthenticationDetails findUser;

	@Autowired
	private SkillEntityRepository skillRepo;

	@Autowired
	private LanguageEntityRepository languageRepo;

//	@Autowired
//	private UserEntityRepository userRepo;

//	@Autowired
//	private StorageService storageService;

//	@Autowired
//	private AmazonS3 s3Client;

//	@Value("${application.bucket.name}")
//  private String bucketName;

	/**
	 * getting profile details
	 */
	@Override
	public ApplicantResponse getProfileInfo() {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		ApplicantResponse response = mapper.map(applicant, ApplicantResponse.class);

//		if(applicant.getResumeLink().equals("deleted"))
//			response.setResumeLink("deleted");
//		else
//			response.setResumeLink(s3Client.getUrl(bucketName, applicant.getResumeLink()).toString());
//
//		if(applicant.getProfilePictureLink().equals("deleted"))
//			response.setProfilePictureLink("deleted");
//		else
//			response.setProfilePictureLink(
//				s3Client.getUrl(bucketName, applicant.getProfilePictureLink()).toString());

		return response;
	}

	/**
	 * getting all skills
	 */
	@Override
	public List<SkillResponse> getAllSkills() {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		return applicant.getSkills()
				.stream()
				.map(skill -> mapper.map(skill, SkillResponse.class))
				.collect(Collectors.toList());
	}

	/**
	 * getting all languages
	 */
	@Override
	public List<LanguageResponse> getAllLanguages() {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		return applicant.getLanguages()
				.stream()
				.map(language -> mapper.map(language, LanguageResponse.class))
				.collect(Collectors.toList());
	}

	/**
	 * updating applicant headline
	 */
	@Override
	public ApiResponse updateHeadLine(String headLine) {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		applicant.setResumeHeadLine(headLine);
		applicantRepo.save(applicant);

		return new ApiResponse("Applicant headline updated with id " + applicant.getId());
	}

	/**
	 * updating applicant skills
	 */
	@Override
	public ApiResponse updateSkills(Long skillId) {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		SkillEntity skillEntity = skillRepo.findById(skillId)
				.orElseThrow(() ->
						new ResourceNotFoundException("Skill", "id", skillId));

		applicant.removeSkill(skillEntity);
		applicantRepo.save(applicant);

		return new ApiResponse(
				"Applicant skills updated with applicant id " + applicant.getId());
	}

	/**
	 * update applicant language
	 */
	@Override
	public ApiResponse updateLanguage(List<LanguageResponse> languageList) {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		for (LanguageResponse language : languageList) {
			LanguageEntity languageEntity =
					languageRepo.getLanguage(language.getName(), language.getProficiency())
							.orElseThrow(() ->
									new ResourceNotFoundException("Language", "name", language.getName()));
			applicant.getLanguages().add(languageEntity);
		}

		applicantRepo.save(applicant);
		return new ApiResponse("Applicant language updated with id " + applicant.getId());
	}

	/**
	 * updating applicant summary
	 */
	@Override
	public ApiResponse updateProfileSmry(String summary) {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		applicant.setProfileSummary(summary);
		applicantRepo.save(applicant);

		return new ApiResponse("Applicant profile summary updated with id " + applicant.getId());
	}

	@Override
	public ApiResponse addSkill(Long skillId) {

		Long userId = findUser.getUserId();
		ApplicantEntity applicant = findApplicantByUserId(userId, applicantRepo);

		SkillEntity skillEntity = skillRepo.findById(skillId)
				.orElseThrow(() ->
						new ResourceNotFoundException("Skill", "id", skillId));

		applicant.getSkills().add(skillEntity);
		applicantRepo.save(applicant);

		return new ApiResponse(
				"Skill added to applicant skill list with applicant id " + applicant.getId());
	}
}
