package com.ben.dust.model;

import jakarta.persistence.*; // for Spring Boot 3

import java.sql.Date;

@Entity
@Table(name = "simcards")
public class Simcard {

    @Id
    @Column(name = "ICCID")
    private String iccid;

    @Column(name = "MSISDN")
    private String msisdn;

    @Column(name = "PINCode")
    private String pinCode;

    @Column(name = "PUKCode")
    private String pukCode;

    @Column(name = "Tag")
    private String tag;

    @Column(name = "Accesspointname")
    private String accessPointName;

    @Column(name = "IPAddr")
    private String ipAddr;

    @Column(name = "Status", columnDefinition = "ENUM('ACTIVATED','DEACTIVATED')")
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "Creationdate")
    private Date creationDate;

    public Simcard(
            String iccid,
            String msisdn,
            String pinCode,
            String pukCode,
            String tag,
            String accessPointName,
            String ipAddr,
            Status status
    ) {
        this.iccid = iccid;
        this.msisdn = msisdn;
        this.pinCode = pinCode;
        this.pukCode = pukCode;
        this.tag = tag;
        this.accessPointName = accessPointName;
        this.ipAddr = ipAddr;
        this.status = status;

        java.util.Date utilDate = new java.util.Date();
        this.setCreationDate(new java.sql.Date(utilDate.getTime()));
    }

    public Simcard() {

    }

    public Simcard(String iccid) {
        this.iccid = iccid;

        java.util.Date utilDate = new java.util.Date();
        this.setCreationDate(new java.sql.Date(utilDate.getTime()));
    }

    public String getIccid() {
        return iccid;
    }

    public void setIccid(String iccid) {
        this.iccid = iccid;
    }

    public String getMsisdn() {
        return msisdn;
    }

    public void setMsisdn(
            String msisdn
    ) {
        this.msisdn = msisdn;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getPukCode() {
        return pukCode;
    }

    public void setPukCode(String pukCode) {
        this.pukCode = pukCode;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getAccessPointName() {
        return accessPointName;
    }

    public void setAccessPointName(String accessPointName) {
        this.accessPointName = accessPointName;
    }

    public String getIpAddr() {
        return ipAddr;
    }

    public void setIpAddr(String ipAddr) {
        this.ipAddr = ipAddr;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    @Override
    public String toString() {
        return "Simard iccd: " + iccid;
    }
}