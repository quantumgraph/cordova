Integrating Corodova Plugin for QGraph to your app
==================================================
Follow the following steps for integration, and contact app@qgraph.io in case of any difficulty.

I. Install QGraph SDK
---------------------

### 1. Sign up 
Go to http://app.qgraph.io and make an account

### 2. Get an app id
In the "Set Up" section, select "Android" and then enter your app details. Click "Next" and note down your App Id.

### 3. Add QGraph Plugin
+ Go to the root of your Cordova project, write
```
cordova plugin add https://github.com/quantumgraph/cordova
```
+ In index.html of your project, add
```
<script type="text/javascript" src="QGraph.js"></script>
```

+ On the launch of your app, call these functions
```
QGraph.initializeSdk("<your app id>");
QGraph.getInstance();
QGraph.onStart();
```
+ Add Optional permissions:
   * If you would like to reach out to uninstalled users by email, add following line in `app/src/main/AndroidManifest.xml` outside the `<application>` tag:
   ```
   <uses-permission android:name="android.permission.GET_ACCOUNTS" />
   ```
   * If you would like us to track the city of the user, add the following line in    `app/src/main/AndroidManifest.xml` outside the `<application>` tag:
   ```
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   ```
   *  If you would like us to track device id the user, add the following line in    `app/src/main/AndroidManifest.xml` outside the `<application>` tag:
   ```
   <uses-permission android:name="android.permission.READ_PHONE_STATE" />
   ```
II. Use QGraph SDK
-------------------
Once you are done with above basic integration, you can use this section to pass us further information.

### 1. Logging user profiles

User profiles are information about your users, like their name, city, date of birth or any other information that you may wish to track. You log user profiles by using one or more of the following functions:

`QGraph.setUserId(String userId);`

userId is the id of the user. It might be email, or username, or facebook id, or any other form of id that you may wish to keep.

Other functions that you may use are:

`QGraph.setName(String name);`

`QGraph.setFirstName(String firstName);`

`QGraph.setLastName(String lastName);`

`QGraph.setCity(String city);`

`QGraph.setEmail(String email);`

`QGraph.setDayOfBirth(int day);`

`QGraph.setMonthOfBirth(int month);`

`QGraph.setYearOfBirth(int year);`

`QGraph.setPhoneNumber(String phoneNo);`

Other than these functions, you can log your own custom user parameters. You do it using:

`QGraph.setCustomUserParameter(String key, E value);`

For instance, you may wish to have the user’s current rating like this:

`QGraph.setCustomUserParameter("current_rating", 123);`

As implied by the function definition, the value can be of any data type.

If you want to set multiple custom parameters at once, you can use
`QGraph.setCustomUserParameters()`. For example:
```
myProps = {'gender': 'mail',
          'age': 23,
          'city': 'London'}
QGraph.setCustomUserParameters(myProps);
```

Once user profile is set, you can use this to create personalized messages (For example: “Hi John, exciting deals are available in Mountain View”), or to create user segments (For example you can create a segment of users who were born after 1990 and live in Mountain View)

Apart from above user profile parameters, you can log the UTM source through which the user installed the app, using the following functions:
```
QGraph.setUtmSource(String utmSource);
QGraph.setUtmMedium(String utmMedium);
QGraph.setUtmTerm(String utmTerm);
QGraph.setUtmContent(String utmContent);
QGraph.setUtmCampaign(String utmCampaign);
```

### 2. Logging events
Events are the activities that a user performs in your app, for example, view the products, playing a game or listening to a music. Each event has a name (for instance, the event of viewing a product is called _product_viewed_), and can have some parameters. For instance, for event _product_viewed_, the parameters are _id_ (the id of the product viewed), _name_ (name of the product viewed), _image_url_ (image url of the product viewed), _deep_link_ (a deep link which takes one to the product page in the app), and so on.

It is not necessary that you provide all the parameters for a given event. You can choose to provide whatever parameters are relevant to you.

Once you log event information to use, you can segment users on the basis of the events (For example, you can create a segment consisting of users have not launched for past 7 days, or you can create a segment consiting of users who, in last 7 days, have purchased a product whose value is more than $1000)

You can also define your events, and your own parameters for any event. However, if you do that, you will need to sync up with us to be able to segment the users on the basis of these events or customize your creatives based on these events.

You can optionally log a “value to sum” with an event. This value will be summed up when doing campaing attribution. For instance, if you pass this value in your checkout completed event, you will be able to view stats such as a particular campaign has been responsible to drive Rs 84,000 worth of sales.

Thus, there are three variants of the function logEvent() which logs the event

`logEvent(String eventName)`

`logEvent(String eventName, JSONObject parameters)`

`logEvent(String eventName, JSONObject parameters, double valueToSum)`

Here is an example of logging an event:

```
productDetails = {
   "id": "123",
   "name": "Nikon Camera",
   "image_url": "http://mysite.com/products/123.png",
   "deep_link": "myapp//products?id=123",
   "type": "new",
   "category": "electronics",
   "brand": "Nikon",
   "color": "white",
   "size": "small",
   "price": 6999
}   
QGraph.logEvent("product_viewed", productDetails);
```
III. Notification Checklist
----------------------
Check out the guideance provided at http://docs.qgraph.io/en/latest/integrating-android-sdk.html#notification-checklist.
