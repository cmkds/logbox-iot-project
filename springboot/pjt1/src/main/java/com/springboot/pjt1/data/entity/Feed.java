package com.springboot.pjt1.data.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "feed")
public class Feed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="FEED_SEQ")
    private long feedSeq;
    @Column
    private String content;
    @Column(nullable = false)
    private String post;
    @Column(nullable = false)
    private int heart;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifyTime;

    // mapping
    @OneToMany(mappedBy = "feed")
    private List<Comment> comments = new ArrayList<>();
    public void addComment(Comment comment){
        this.comments.add(comment);

        if(comment.getFeed() != this)
            comment.setFeed(this);
    }

    // member
    @ManyToOne
    @JoinColumn(name = "memberSeq")
    private Member member;

    public void setMember(Member member){
        this.member = member;

        if (!member.getFeeds().contains(this))
            member.getFeeds().add(this);
    }
}
