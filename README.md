# Front-end Nanodegree Part 6 - Feed Reader Testing
For this project I was given a web-based application that reads RSS feeds with Jasmine being already included in it. I was required to write some tests that check functionality of the App. 

## How to run application

1. Download/clone this repo
2. To start the app, open index.html in your browser
3. The tests were written in the feedreader.js file. The test results appears at the bottom of the index.html page.
4. Tests that are green have passed and red have failed.

## Following tests are included in the app:

1. Test that make sure the allFeeds variable has been defined and that it is not empty.
2. Test that loops through each feed and determines if the URL is defined and not empty.
3. Test that loops through each feed and determines that each feed has a name and not empty.
4. Test that ensures the menu element is hidden by default.
5. Test that ensures the menu changes visibility when the menu icon is clicked.
6. Test that ensures that there is at least one .entry element within the .feed container.
7. Test that ensures that new content is loaded by loadFeed function.