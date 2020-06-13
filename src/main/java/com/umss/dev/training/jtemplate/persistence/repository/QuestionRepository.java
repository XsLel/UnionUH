package com.umss.dev.training.jtemplate.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.umss.dev.training.jtemplate.persistence.domain.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Integer> {

}
