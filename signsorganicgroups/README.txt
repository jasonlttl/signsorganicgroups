/* USING THE INSTALLATION PROFILE */

1. Create a "profiles" folder in your Drupal installation directory. Move the .make files outside of the installation profile to the root of the installation directory.

2. In Drush run: drush make signsorganicgroups.make


/* CONFIGURING THE SITE */


1. Enable your Organic Group content > Edit "Group 1" in the content overview and assign it "Group Status."

2. Add a photo to the "Slideshow" node in the content overview and assign it as part of of "Group 1."

3. Obtain your free Weather Underground API key from: www.wunderground.com/weather/api/d/pricing.html

4. Place your API key in events.js located in profiles > signage > themes > custom > signs > js lines 168 & 49.




