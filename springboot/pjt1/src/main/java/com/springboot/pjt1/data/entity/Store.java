package com.springboot.pjt1.data.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "store")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="STORE_SEQ")
    private long storeSeq;
    @Column
    private String photo;
    @Column
    private String video;
    @Column
    private String post;
    @Column
    private String voice;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    @Column
    private long createSeq;
    @Temporal(TemporalType.TIMESTAMP)
    private Date recentTime;
    @Column
    private long recentSeq;

    // mapping
    @ManyToOne
    @JoinColumn(name = "memberSeq")
    private Member member;

    public void setMember(Member member){
        this.member = member;

        if (!member.getStores().contains(this))
            member.getStores().add(this);
    }

}
