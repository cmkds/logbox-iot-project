package com.springboot.pjt1.data.dao;

import com.springboot.pjt1.data.entity.Heart;

import java.util.Optional;

public interface HeartDAO {
    Heart insertHeart(Heart heart) throws Exception;
    Heart SelectHeartById(long heartSeq);
    Heart SelectHeartByFeedAndMember(long feedSeq, long memberSeq);
    void deleteHeartById(long heartSeq) throws Exception;
}
