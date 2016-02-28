# exiletools-trade-search

This is a clone of the original exiletools-trade-search project by trackpete.  This originally began as a fork, but I quickly realized that this might require some server-side calculations and modeling in order to get the full feature set.  

I have decided to begin building this out in ASP.NET MVC as a Single Page Application with Angular.js.  This allows me to route all requests through ASP.NET Controllers if I wish to, which will allow us to control when our web requests are sent instead of relying on ElasticSearchUI to do it all the time.

The initial goals of the Exile Tools Trade Search web page are as follows:

1. Search for unique items by name with auto-completion as well as automatic stat sliders.
2. Select item base types and automatically populate all known mods and stats for those items, including min/max/average/etc.
3. Auto refresh of searches and saved searches
4. Advanced boolean capability for searches, such as "mod x AND (mod y or mod z)"
5. Sorting by any value in return set
6. Local browser storage for configuration parameters and settings, including marking items as viewed, hiding sellers, etc.
7. Graphs and price reports for item searches, including historical trends (not just currently available items) and detailed results on matching items (total #, added recently, removed recently, prices, etc.)
8. Search for historical items
9. Integration with the ExileTools Ladder API for on-line players and future integration with new GGG API's
10. Ability to save, bookmark, and share searches (such as "click here to search for an ideal Poison Arrow jewel for my build")
11. Shown when an item was added, how many times it was modified, etc. Price history is not currently tracked in index but this may change
12. Customizable quick-copy messages for trade (i.e. "hello %seller%, I would like to buy your %itemName% [%itemQuality Quality %itemBaseType%] available in %league% for the listed buyout of %buyout% if you are available")
13. Notifications when new items matching a saved search are posted 
14. "Infinite" scrolling

Initial development will focus primarily on functionality rather than a pretty interface. Once the basic capability is up and running, features and looks will be modified and improved as needed.

As of this writing, my initial intent is to develop this using AngularJS - I've never used AngularJS, so this will be a learning experience. This is incredibly intimidating. :|

Some random notes of things I've come across doing research that might help with this:

Just do an advanced query builder to start with?

https://github.com/dncrews/angular-elastic-builder
https://github.com/okfn/facetview

not es specific: https://github.com/niklr/angular-query-builder


EJS Examples:
https://gist.github.com/egaumer/4519444

Charts:
https://github.com/fullscale/dangle

Misc Angular Stuff:

https://github.com/chieffancypants/angular-loading-bar

How to use Angular with ASP.NET MVC, an in-depth tutorial:
http://www.codeproject.com/Articles/806029/Getting-started-with-AngularJS-and-ASP-NET-MVC-Par
