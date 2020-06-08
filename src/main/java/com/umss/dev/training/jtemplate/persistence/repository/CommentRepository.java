package com.umss.dev.training.jtemplate.persistence.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import com.umss.dev.training.jtemplate.persistence.domain.Comment;


@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {

}
