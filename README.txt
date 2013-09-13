Using the installation profile
-----------------------------------------------


1. Make sure you have Drush and GIT available.

2. Use this command to download core, modules, and profile: 

  'drush make https://raw.github.com/UICLAS/signsorganicgroups/master/signsorganicgroups.starter.make [DESTINATION]'

  * [DESTINATION] = directory to place Drupal file structure

3. Install the site as usual, using the 'Signs Organic Groups' as the site's 
   profile.



Configuring the site
-----------------------------------------------


1. Enable your Organic Group content > Edit "Group 1" in the content overview and assign it "Group Status."

2. Add a photo to the "Slideshow" node in the content overview and assign it as part of of "Group 1."

3. Obtain your free Weather Underground API key from: www.wunderground.com/weather/api/d/pricing.html

4. Place your API key in events.js located in profiles > signage > themes > custom > signs > js lines 168 & 49.




