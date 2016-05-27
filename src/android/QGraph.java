import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;

import android.util.Log;
import android.provider.Settings;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.quantumgraph.sdk.QG;

public class QGraph extends CordovaPlugin {
    private QG qg;

    public QGraph() {
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        cordova.getThreadPool().execute(new Runnable() {
            public void run() {
                if ("initializeSdk".equals(action)) {
                    if (args.length() == 1) {
                        QG.initializeSdk(cordova.getActivity().getApplication(), args.optString(0));
                    } else {
                        QG.initializeSdk(cordova.getActivity().getApplication(), args.optString(0), args.optString(1));
                    }
                } else if ("getInstance".equals(action)) {
                    qg = QG.getInstance(cordova.getActivity());
                    qg.onStart();
                } else if (qg != null) {
                    if ("onStart".equals(action)) {
                        qg.onStart();
                    } else if ("logEvent".equals(action)) {
                        if (args.length() == 1) {
                            qg.logEvent(args.optString(0));
                        } else if (args.length() == 2) {
                            if (args.opt(1) instanceof Double) {
                                qg.logEvent(args.optString(0), args.optDouble(1));
                            } else if (args.opt(1) instanceof JSONObject) {
                                qg.logEvent(args.optString(0), args.optJSONObject(1));
                            }
                        } else {
                            qg.logEvent(args.optString(0), args.optJSONObject(1), args.optDouble(2));
                        }
                    } else if ("createEvent".equals(action)) {
                        if (args.length() == 1) {
                            callbackContext.success(qg.createEvent(args.optString(0)).toString()); 
                        } else if (args.length() == 2) {
                            if (args.opt(1) instanceof Double) {
                                callbackContext.success(qg.createEvent(args.optString(0), args.optDouble(1)).toString()); 
                            } else if (args.opt(1) instanceof JSONObject) {
                                callbackContext.success(qg.createEvent(args.optString(0), args.optJSONObject(1)).toString()); 
                            }
                        } else {
                            callbackContext.success(qg.createEvent(args.optString(0), args.optJSONObject(1), args.optDouble(2)).toString());
                        }
                    }else if ("logEvents".equals(action)) {
                        qg.logEvents(args.optJSONArray(0));
                    } else if ("setCustomUserParameter".equals(action)) {
                        qg.setCustomUserParameter(args.optString(0), args.opt(1));
                    } else if ("setCustomUserParameters".equals(action)) {
                        qg.setCustomUserParameters(args.optJSONObject(0));
                    } else if ("setUserId".equals(action)) {
                        qg.setUserId(args.optString(0));
                    } else if ("setName".equals(action)) {
                        qg.setName(args.optString(0));
                    } else if ("setFirstName".equals(action)) {
                        qg.setFirstName(args.optString(0));
                    } else if ("setLastName".equals(action)) {
                        qg.setLastName(args.optString(0));
                    } else if ("setCity".equals(action)) {
                        qg.setCity(args.optString(0));
                    } else if ("setEmail".equals(action)) {
                        qg.setEmail(args.optString(0));
                    } else if ("setDayOfBirth".equals(action)) {
                        qg.setDayOfBirth(args.optInt(0));
                    } else if ("setYearOfBirth".equals(action)) {
                        qg.setYearOfBirth(args.optInt(0));
                    } else if ("deleteStoredNotifications".equals(action)) {
                        qg.deleteStoredNotifications();
                    } else if ("getStoredNotifications".equals(action)) {
                        callbackContext.success(qg.getStoredNotifications().toString()); 
                    } else if ("setMaxNumStoredNotifications".equals(action)) {
                        qg.setMaxNumStoredNotifications(args.optLong(0));
                    } else if ("setPhoneNumber".equals(action)) {
                        qg.setPhoneNumber(args.optString(0));
                    } else if ("setUtmSource".equals(action)) {
                        qg.setUtmSource(args.optString(0));
                    } else if ("setUtmMedium".equals(action)) {
                        qg.setUtmMedium(args.optString(0));
                    } else if ("setUtmTerm".equals(action)) {
                        qg.setUtmTerm(args.optString(0));
                    } else if ("setUtmContent".equals(action)) {
                        qg.setUtmContent(args.optString(0));
                    } else if ("setUtmCampaign".equals(action)) {
                        qg.setUtmCampaign(args.optString(0));
                    } else if ("setAttributionWindow".equals(action)) {
                        qg.setAttributionWindow(args.optLong(0));
                    } else if ("setClickAttributionWindow".equals(action)) {
                        qg.setClickAttributionWindow(args.optLong(0));
                    } else if ("setNotificationAndTime".equals(action)) {
                        qg.setNotificationAndTime(args.optString(0), args.optLong(1));
                    } else if ("hideInApp".equals(action)) {
                        //qg.hideInApp(cordova.getActivity());
                    } else if ("onStop".equals(action)) {
                        qg.onStop();
                    } else if ("isQGMessage".equals(action)) {
                        callbackContext.success(Boolean.toString(qg.isQGMessage(args.optString(0))));
                    } else if ("setTracking".equals(action)) {
                        qg.setTracking(args.optBoolean(0), args.optBoolean(1), args.optBoolean(2));
                    }
                } 
            }
        });
        return true;
    }
}
