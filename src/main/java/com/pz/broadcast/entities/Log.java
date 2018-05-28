package com.pz.broadcast.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Log {

    @Id
    @GeneratedValue
    private Long id;
    private String action;
    @Temporal(TemporalType.TIMESTAMP)
    private Date datetime;
    private String comment;
    @ManyToOne
    private User user;
    @ManyToOne
    private File file;


    protected Log() {}

    public Log(String action, Date datetime, String comment) {
        this.action = action;
        this.datetime = datetime;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    @Override
    public String toString() {
        return "Log{" +
                "id=" + id +
                ", action='" + action + '\'' +
                ", datetime=" + datetime +
                ", comment='" + comment + '\'' +
                '}';
    }

}
