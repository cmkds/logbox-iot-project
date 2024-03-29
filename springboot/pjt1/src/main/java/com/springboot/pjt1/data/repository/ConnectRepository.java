package com.springboot.pjt1.data.repository;

import com.springboot.pjt1.data.entity.Connect;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConnectRepository extends JpaRepository<Connect, Long> {
    //Optional<Comment> findByCommentSeq(long commentSeq);
    Boolean existsByFollowerAndFollowing(long srcMemberSeq, long dstMemberSeq);
    Connect findByFollowingAndFollower(long srcMemberSeq, long dstMemberSeq);
    List<Connect> findByFollower(long memberSeq);
    List<Connect> findAllByFollower(long memberSeq);
    List<Connect> findAllByFollowing(long memberSeq);

    List<Connect> findByFollowing(long memberSeq);
}
