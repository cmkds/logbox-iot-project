package com.springboot.pjt1.data.entity;

import jdk.jfr.ContentType;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "COMMENT_SEQ")
    private long commentSeq;
    @Column(nullable = false)
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date modifyTime;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date createTime;

    // mapping
    @ManyToOne
    @JoinColumn(name = "memberSeq")
    private Member member;
    public void setMember(Member member){
        this.member = member;
    }

    @ManyToOne
    @JoinColumn(name = "feedSeq")
    private Feed feed;
    public void setFeed(Feed feed){
        this.feed = feed;
    }
}
