package com.pz.broadcast.validators;

import com.pz.broadcast.dtos.UserData;

public class RegisterValidator {
    public Boolean userValidate(UserData user){
        if (user == null) return null;
        Boolean validated = Boolean.FALSE;
        if (user.getLogin() == null || user.getLogin().length() < 8)
            return validated;
        if (user.getPassword() == null || user.getLogin().length() < 8)
            return validated;
        if (user.getEmail() == null || user.getEmail().length() < 8)
            return validated;
        return Boolean.TRUE;
    }
}
