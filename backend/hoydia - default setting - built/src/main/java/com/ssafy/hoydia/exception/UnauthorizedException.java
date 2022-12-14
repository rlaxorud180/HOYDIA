package com.ssafy.hoydia.exception;

public class UnauthorizedException extends RuntimeException {
    private static final long serialVersionUID = -2238030302650813813L;

    public UnauthorizedException() {
        super("권한이 없는 사용자입니다.");
    }

    public UnauthorizedException(String msg) {
        super(msg);
    }
}