
$(function() {
    
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed 
         * in the allFeeds object and ensures it has 
         * a URL defined and that the URL is not empty.
         */
        
        it('has a URL defined and not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed
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


    describe('The menu', function(){
        /* This test ensures the menu element is hidden 
         * by default.
         */
        it('element is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })

        /* This test ensures the menu changes 
         * visibility when the menu icon is clicked. 
         */
        it('changes visibility when the menu item is clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function(){
        /* This test ensures when the loadFeed function is called 
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('exists when the loadFeed function is called', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
        

    describe('New Feed Selection', function(){
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        let nextArticle;
        beforeEach(function(done){
            loadFeed(0, function(){
                nextArticle = $('.feed').html();
                loadFeed(1, done);
                
            });
        });

        it('differs from previous one', function(done){
            expect($('.feed').html()).not.toBe(nextArticle);
            done();
        });
    });
        
}());
