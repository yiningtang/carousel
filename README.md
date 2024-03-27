# carousel project setup 
npm install 
npm start 

# Technical and architectural solution

Ideally two endpoints i.e. GET /movies and GET /movies/:id will be provided. 
/movies one with the very basic movie details (e.g. id, title, image src sets, alt text for accessibility) will be used to feed Carousel component and when the page is navigated to a selected movie, /movies/:id with detailed movie information would be called to serve this page. 

but in this case, as there is not required to build up server-side, a fetch for local data.json is used in the root-level context as the only data source, and a method getMovie provided in the same context to filter out the selected movie. 

Hitting Arrow Left key won't rotate the very first movie slide, furthermore the whole carousel will lose the focus. In a similar way, rotation won't happen when the very last slide is hit with an Arrow Right key, also the carousel will lose the focus as well.


Images: all the images are pointed to a S3 bucket with only one particular large size. However, later I realise passing different size to S3 url resize param would resize the image. So it is possible to use the applicable image based on screen size


# Potential improvement & something would do differently 

replace the current one imageUrl with applicable ones based on screen size for better loading performance. Also deploying image assets to a particular CDN with caching-enabled would also speed up image loading

animation for better and more smooth carousel user experience

server-side carousel & details page rendering may be worthy a try, as it is more like a static component for displaying purpose. Rendering the whole page on the server-side and pass the document may also help with performance, and SEO

Add arrow back and forward icons to the right and left side of the carousel respectively, and use these two icons to trigger the rotation. 

Use TAB key instead of arrow key to set focus to slides / switch between slides
Use both click and enter key to trigger program detailed page navigation

More considerations on accessibility aspects, instead of the simple role and aria-X attribute
