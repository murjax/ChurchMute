package com.churchmute;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

public class MyTaskService extends HeadlessJsTaskService {

    @Override
    protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
        return new HeadlessJsTaskConfig(
                "LocationListener", // Use the registered headless Task here
                data,
                5000,
                true);
    }
}