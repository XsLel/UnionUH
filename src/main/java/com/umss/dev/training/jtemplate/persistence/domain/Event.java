package com.umss.dev.training.jtemplate.persistence.domain;


import javax.persistence.*;

  
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String date;
    @ManyToMany(cascade = CascadeType.ALL)
    

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

   
    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDate(){
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }
}
  
