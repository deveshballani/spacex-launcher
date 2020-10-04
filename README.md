# SpaceX Launch Program
#### A responsive web application to view all the SpaceX launch programs with some basic filters.

### Repository & URL -
###### Application URL -> [SpaceX-Launcher](https://spacex-launcher.deveshballani.com "SpaceX-repo")
https://spacex-launcher.deveshballani.com **OR** https://spacex-launch-c1342.web.app/


###### Github Repository Link -> [SpaceX-repo](https://github.com/deveshballani/spacex-launcher "SpacX-repo")
https://github.com/deveshballani/spacex-launcher

### Features & Functionalities -
##### 1. Server-Side Rendering
Used *Angular Universal* to implement Server Side Rendering. This helped to achieve fast first page load time and an SEO friendly web page. For the Server, I have used a serverless framework by google firebase with node js.
To validate this just right-click, on the web app, and see the page source, you will she entire HTML there.
##### 2. Infinite scrolling.
Kept the batch size equals to **50** (instead of 100) as a user will not be able to see all 100 in one go (especially for mobile) - so another set of data will be fetched when the user scrolls the page (once the user reaches to end, little before that). This is typically how we see social media feeds are getting scrolled these days. The intent to provide a good user experience.
##### 3. A decent Lighthouse Score
**Performance** - 93/100 ; **Accessibility** - 94/100 ; **Best Practice** - 100/100 ; **SEO** - 100/100
Link to Image - https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/lighthouse.png?alt=media&token=a28f5d39-def1-4bc2-bc4a-de5d2f114cca (If img not displaying)

![Lighthouse Score](https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/lighthouse.png?alt=media&token=a28f5d39-def1-4bc2-bc4a-de5d2f114cca "Lighthouse Score")

##### 4. Responsive design - mobile first design
###### For Mobile -
In the case of mobile, I slightly change in the provided visuals, to improve the user experience a bit. In mobile, the user will be shown a header with a *filter* icon on the right side - which indicates the numbers of filters applied so that mobile users can change that filter anytime without scrolling to top every time.

![](https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/mobile.png?alt=media&token=4d3e7c79-4aae-40ea-9b85-ba1e0fe3d3b6)

###### For Desktop and Tab -
For these two views, I have kept the filter section fixed on the screen so if the user goes down to the page then he/she does not require to scroll all the way up, to change the filters.
For the Launch section - 2 card view for tablet and 4 card view for desktop view.

##### 5. Unit Testing
Added unit test cases for components to test the business logics of the application.
Please find the screenshot for the same.  Use `ng test` to run all the test-cases.
Link to Img - https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/tests.png?alt=media&token=89268345-2beb-4d92-beae-1016e0625cd0 (If img not displaying)

![](https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/tests.png?alt=media&token=89268345-2beb-4d92-beae-1016e0625cd0)

##### 5. Formatting Checker
TS Linter has been used to check any formatting issues before build gets triggered. If there are any issues in formatting than it fails and terminates the build and deployment of the application.
You can find the linting script in package.json file `ng lint`, which then checked before the build and deployment process. `npm run lint && ng build --prod`. It can be bypassed by removing it from the command.

### Deployment -
###### Google Firebase is used for this.
Used **Firebase Hosting** and  **Cloud Functions** to host our SSR application. This serverless framework eliminated the overhead of creating a server and configuring everything there.
###### Easy deployment
All it needs to deploy our front-end is just one command - `npm run deploy`. 

It runs linter, builds the code, and then deploys to the firebase. Firebase internally uses google cloud APIs to deploy the cloud functions - *cloudfunctions.googleapis.com* and *cloudbuild.googleapis.com*

### -- Thanks :) --
Please provide your feedback for the areas to be improved. 
