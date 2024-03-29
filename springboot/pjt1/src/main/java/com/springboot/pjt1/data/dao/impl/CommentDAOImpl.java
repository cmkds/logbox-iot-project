package com.springboot.pjt1.data.dao.impl;

import com.springboot.pjt1.data.dao.CommentDAO;
import com.springboot.pjt1.data.entity.Comment;
import com.springboot.pjt1.data.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Component
public class CommentDAOImpl implements CommentDAO{
    private CommentRepository commentRepository;

    @Autowired
    public CommentDAOImpl(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment insertComment(Comment comment) throws Exception {
        return commentRepository.save(comment);
    }

    @Override
    public Comment SelectCommentById(Long commentSeq) {
        return commentRepository.getById(commentSeq);
    }

    @Override
    public List<Comment> SelectCommentByFeedSeq(long feedSeq) {
        return commentRepository.findAllByFeedSeq(feedSeq);
    }



    @Override
    public Comment updateCommentById(Long commentSeq, String content) throws Exception {
        // get data using ID
        Optional<Comment> SelectedComment = commentRepository.findById(commentSeq);
        Comment updatedComment;

        if(SelectedComment.isPresent()){
            Comment comment = SelectedComment.get();

            comment.setContent(content);
            comment.setModifyTime(new Date());

            updatedComment = commentRepository.save(comment);
        }

        else
            throw new Exception();

        return updatedComment;
    }

    @Override
    public void deleteCommentById(Long commentSeq) throws Exception {
        Optional<Comment> SelectedComment = commentRepository.findById(commentSeq);
        
        if (SelectedComment.isPresent()){
            Comment comment = SelectedComment.get();
            commentRepository.delete(comment);
        }
        
        else
            throw new Exception();
    }

    @Override
    public List<Comment> deleteCommentByMemberSeq(long memberSeq) {
        List<Comment> comments = commentRepository.findAllByMemberSeq(memberSeq);

        for (Comment comment : comments)
            commentRepository.delete(comment);

        return comments;
    }

    @Override
    public List<Comment> SelectCommentByMemberSeq(long memberSeq) {
        return commentRepository.findAllByMemberSeq(memberSeq);
    }
    // jpa 영접

}
