package com.drivewave.API.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class AppConfig {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
    // @Bean
    // public AuthenticationManager
    // authenticationManager(AuthenticationConfiguration builder) throws Exception {
    // return builder.getAuthenticationManager();
    // }

    // @Bean
    // public PasswordEncoder PasswordEncoder() {
    // return new BCryptPasswordEncoder();
    // }
}
