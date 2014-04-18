/// Setting up interactive map ///

Set up a database to save :lat, :long, :location_title, :submitted by

For each entry in database:
1. Create js constructor for marker based on lat and long
2. Create js constructor for infowindow for location_title and submitted by, paired with marker
3. Populate map initialize with these constructors

Rails form underneath map for entering Location (using google places) and submitted by.  Use google places api to return lat and long and save to local DB.

1. Create a rails app
2. Select authentication method
3. Select a blogging method, ie. internal to app, Blogger via API, Wordpress

API route
Pro - Can be hosted outside of blog, leaving blog options independent of map marker project
Con - May cost a fee to keep hosted at a decent rate.  Not sure what a sleeping heroku ping would respond.  Could set up a cronjob to combat that.
1. Set up a POST to save JSON to a postgresql database
2. A GET to retrieve all databases, converted to JSON and filled into marker and infowindow constructors
