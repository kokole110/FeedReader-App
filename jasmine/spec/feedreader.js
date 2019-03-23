
$(function() {
    
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined and not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each has a name defined and that the name is not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function(){
            const body = document.querySelector('body');

            expect(body.className).toBe('menu-hidden');
        })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu item is clicked', function(){
            const body = document.querySelector('body');
            const menuIcon = document.querySelector('.menu-icon-link');
            
            menuIcon.click();
            expect(body.className).toBe('');
            menuIcon.click();
            expect(body.className).toBe('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /*TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('exists when the loadFeed function is called', function(done){
            const feed = document.querySelector('.feed');
            const article = document.querySelector('.entry');

            expect(feed.contains(article)).toBeTruthy();
            done();
        });
    });
        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        const feed = document.querySelector('.feed');
        
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('differs from previous one', function(done){
            for (var i=1; i<feed.children.length; i++) {
                expect(feed.children[i].textContent).not.toBe(feed.children[i-1].textContent);
            };
            done();
        });
    });
        
}());
