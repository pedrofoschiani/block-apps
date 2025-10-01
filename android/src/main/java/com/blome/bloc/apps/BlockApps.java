package com.blome.bloc.apps;

import com.getcapacitor.Logger;

public class BlockApps {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
