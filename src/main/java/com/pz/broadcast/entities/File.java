package com.pz.broadcast.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
public class File {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String link;
    private String fileHash;
    @ManyToMany
    private List<UserGroup> groups;


    protected File() {}

    public File(String name, String link, String fileHash) {
        this.name = name;
        this.link = link;
        this.fileHash = fileHash;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getFileHash() {
        return fileHash;
    }

    public void setFileHash(String fileHash) {
        this.fileHash = fileHash;
    }

    public List<UserGroup> getGroups() {
        return groups;
    }

    public void setGroups(List<UserGroup> groups) {
        this.groups = groups;
    }

    @Override
    public String toString() {
        return "File{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", link='" + link + '\'' +
                ", fileHash='" + fileHash + '\'' +
                '}';
    }

}
