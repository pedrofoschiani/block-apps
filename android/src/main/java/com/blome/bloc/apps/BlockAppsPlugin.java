package com.blome.bloc.apps;

import android.util.Log;
import com.getcapacitor.JSArray;
import java.util.List;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

@CapacitorPlugin(name = "BlockApps")
public class BlockAppsPlugin extends Plugin {

    private static final String TAG = "BlockApps";

    @PluginMethod
    public void setBlockedPackages(PluginCall call) {
        JSArray packagesArray = call.getArray("packages");

        if (packagesArray == null) {
            call.reject("A lista de pacotes ('packages') não foi fornecida.");
            return;
        }

        try {
            List<String> packageList = packagesArray.toList();

            Log.d(TAG, "=============================================");
            Log.d(TAG, "Lista de pacotes recebida com sucesso!");
            Log.d(TAG, "Total de pacotes: " + packageList.size());

            for (String packageName : packageList) {
                Log.d(TAG, "-> Pacote para bloquear: " + packageName);
            }
            Log.d(TAG, "=============================================");

            call.resolve();

        } catch (JSONException e) {
            call.reject("Erro ao processar a lista de pacotes.", e);
        }
    }
}