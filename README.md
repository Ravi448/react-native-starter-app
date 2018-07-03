# react-native-starter-app

<img src="startReact.gif" />

<strong>
  This is a demo app demonstrating how to make an app using react-native. This is still in development and you can make pull     reaquests. Changes and suggestions are welcome.  
</strong>
<br/>
You can use this template as a refrence to start react-native app.
<br/><br/>

To run this project first install react-native CLI <br/>
Run <code>npm install -g create-react-native-app</code>

Download or Clone this repo <code>https://github.com/Ravi448/react-native-starter-app.git</code>

Run <code>npm install</code>

To run this project for android, navigate to project directory then android and open <code>local.properties</code> file and change your 
sdk path<br/>

Run <code>react-native run-android</code><br/>

To run on iOS, You must have to install Xcode on your mac.<br/>
Run <code>rect-native run-ios</code>

# Android build issue

If you face issue to build in android due to camera component, please follow the steps to install camera component from <code>npm install react-native-camera --save</code>

Then link the component to react native: <code>react-native link react-native-camera</code>

Now:
# Step 1
Navigate to <code>android/build.gradle</code> and add following code:

<code>
  maven { url "https://jitpack.io" }
  maven { url "https://maven.google.com" }
</code>

# Step 2

Navigate to <code>node_modules/react-native-camera/android/build.gradle</code> and remove or comment google()

Now your code will look like: 

<code>
  buildscript {
    repositories {
      jcenter()
      // google()
      maven {
        url 'https://maven.google.com'
      }
    }

    dependencies {
      classpath 'com.android.tools.build:gradle:3.0.0'
    }
  }
</code>

# Step 3
Now at the bottom of the above build.gradle file:
Change <code>compileOnly</code> to <code>provided</code> & <code>implementation</code> to <code>compile</code>

Now this will look like:

<code>
  dependencies {
    def googlePlayServicesVersion = rootProject.hasProperty('googlePlayServicesVersion')  ? rootProject.googlePlayServicesVersion : DEFAULT_GOOGLE_PLAY_SERVICES_VERSION
    def supportLibVersion = rootProject.hasProperty('supportLibVersion')  ? rootProject.supportLibVersion : DEFAULT_SUPPORT_LIBRARY_VERSION

    provided 'com.facebook.react:react-native:+'
    provided 'com.facebook.infer.annotation:infer-annotation:+'
    compile "com.google.zxing:core:3.2.1"
    compile "com.drewnoakes:metadata-extractor:2.9.1"
    compile "com.google.android.gms:play-services-vision:$googlePlayServicesVersion"
    compile "com.android.support:exifinterface:$supportLibVersion"
    compile "com.android.support:support-annotations:$supportLibVersion"
    compile "com.android.support:support-v4:$supportLibVersion"
  }
</code>

# Step 4

Navigate to <code>android/app/build.gradle</code> and set compileSdkVersion 26

# Step 5
Add 
<code>
  project.ext.react = [
    entryFile: "index.js",
    bundleAssetName: "index.android.bundle",
    bundleInAlpha: true,
    bundleInBeta: true
]
</code>
in build.gradle before line: <code>apply from: "../../node_modules/react-native/react.gradle"</code>


# Step 6
Add <code><uses-permission android:name="android.permission.CAMERA" /></code> to AndroidManifest.xml

<strong>
  By following these steps, you can solve android build issue.
</strong>

If you still face any issue, please add an issue.


<br/>

<pre>
Author :  <caption>Ravi KUMAR<caption>
Standard Licence:  <code>MIT</code>
Privacy : NONE
Usablity: Everyone
</pre>
