package com.simpleAdmin.config;

/**
 *  Spring Security 5.3.3에서 공식 지원하는 PasswordEncoder 구현 클래스들은 아래와 같다.
	BcryptPasswordEncoder : Bcrypt 해시 함수를 사용하여 비밀번호 암호화
	Argon2PasswordEncoder : Argon2 해시 함수를 사용하여 비밀번호 암호화
	Pbkdf2PasswordEncoder : Pbkdf2 해시 함수를 사용하여 비밀번호 암호화
	SCryptPasswordEncoder : SCrypt 해시 함수를  사용하여 비밀번호 암호화
 * @author Administrator
 *
 *  이번에는 BcryptPasswordEncoder 클래스를 사용하여 암호화 예제를 진행할 것이고, 
 *  먼저 내부코드를 살펴보면 아래와 같다
 */
public interface PasswordEncoder {

	// 비밀번호 단방향 암호화
	String encode(CharSequence rawPassword);
    
        // 암호화되지 않은 비밀번호(raw)와 암호화된 비밀번호(encode)가 일치하는지 비교
	boolean matches(CharSequence rawPassword, String encodedPassword);

	// 기본적으로 false를 return, Custom하게 구현할 경우 이를 기반으로 더 강력한 암호화 구현
	default boolean upgradeEncoding(String encodedPassword) {
		return false;
	}
}