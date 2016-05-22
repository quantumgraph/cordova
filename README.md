Integrating Corodova Plugin for QGraph to your app
--------------------------------------------------

1. Go to the root of your Cordova project, write
```
cordova plugin add https://github.com/quantumgraph/cordova
```
Now 
```
cordova plugin ls
```
should display a line like
```
cordova-plugin-quantumgraph 1.1.12.1 "Qgraph"
```
2. In index.html of your project, add
```
<script type="text/javascript" src="QGraph.js"></script>
```

3. On the launch of your app, call these functions
```
QGraph.initializeSdk("<your app id>");
QGraph.getInstance();
QGraph.onStart();
```

At this step, basic integration is done. Further information can be found at docs.qgraph.io.
