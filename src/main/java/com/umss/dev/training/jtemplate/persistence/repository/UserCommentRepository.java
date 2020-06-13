package com.umss.dev.training.jtemplate.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;


import com.umss.dev.training.jtemplate.persistence.domain.UserComment;

@Repository
public interface UserCommentRepository extends JpaRepository<UserComment,Integer> {

}
