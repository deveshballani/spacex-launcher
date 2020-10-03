# SpaceX Launch Program
#### A responsive web application to view all the launch programs with some basic filters.

### Tech Stack -
##### 1. Angular 9
##### 2. Bootstrap and some additional media queries for responsive. design.
##### 3. Google Firebase Hosting

### Features & Functionalities -
##### 1. Server Side Rendering
Used *Angular Universal* to implement Server Side Rendering. Deployed to the google firebase. It helps in reducing the 
##### 2. Infinite scrolling.
Kept the betch size equals to **50** (instead of 100) as a user will not be able to see all 100 in one go (especially for mobile) - so another set of data will be fetched when user scrolls the page. This is typically how we see social media feeds are getting scrolled these days. The intent to provide a great user experience.
##### 3. A decent Lighthouse Score
**Performance** - 93/100 ; **Accessibility** - 94/100 ; **Best Practice** - 100/100 ; **SEO** - 100/100

![Lighthouse Score](https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/lighthouse.png?alt=media&token=a28f5d39-def1-4bc2-bc4a-de5d2f114cca "Lighthouse Score")

##### 4. Responsive design - mobile first design
###### For Mobile -
In case of mobile, I have made slightly change in the provided visuals, to improve user experience a bit. In mobile, user will be shown a header with a *filter* icon on right side - which indicates the numbers of filters applied so that mobile user can change that filter anytime without scrolling to top everytime.
![](https://firebasestorage.googleapis.com/v0/b/spacex-launch-c1342.appspot.com/o/mobile_1.jpeg?alt=media&token=09df94a4-0152-43e9-8a9c-d002b72fa689)
