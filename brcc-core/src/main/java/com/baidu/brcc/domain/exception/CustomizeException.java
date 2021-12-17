package com.baidu.brcc.domain.exception;

public class CustomizeException extends RuntimeException {

    private String msg;

    private int respCode;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getRespCode() {
        return respCode;
    }

    public void setRespCode(int respCode) {
        this.respCode = respCode;
    }

    public CustomizeException(String msg, int respCode) {
        super(msg);
        this.msg = msg;
        this.respCode = respCode;
    }
}
