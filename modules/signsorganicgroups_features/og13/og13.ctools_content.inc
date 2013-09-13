<?php
/**
 * @file
 * og13.ctools_content.inc
 */

/**
 * Implements hook_default_ctools_custom_content().
 */
function og13_default_ctools_custom_content() {
  $export = array();

  $content = new stdClass();
  $content->disabled = FALSE; /* Edit this to true to make a default content disabled initially */
  $content->api_version = 1;
  $content->name = 'date_time_sign';
  $content->admin_title = 'Date and Time';
  $content->admin_description = '';
  $content->category = '';
  $content->settings = array(
    'admin_title' => 'Date and Time',
    'title' => '',
    'body' => '<div id="datetimecontain"><div id="timediv"></div><div id="datediv"></div></div>',
    'format' => 'full_html',
    'substitute' => 1,
  );
  $export['date_time_sign'] = $content;

  $content = new stdClass();
  $content->disabled = FALSE; /* Edit this to true to make a default content disabled initially */
  $content->api_version = 1;
  $content->name = 'no_content_slideshow';
  $content->admin_title = 'No content slideshow';
  $content->admin_description = '';
  $content->category = '';
  $content->settings = array(
    'admin_title' => 'No content slideshow',
    'title' => '<none>',
    'body' => ' <div class="flexslider">
<ul class="slides"> 
          <li class="views-row views-row-2 views-row-even">  
          <img typeof="foaf:Image" src="/profiles/signsorganicgroups/themes/custom/signs/images/vatican.jpg" alt="Vatican columns" />  </li>
        
          <li class="views-row views-row-4 views-row-even">  
          <img typeof="foaf:Image" src="/profiles/signsorganicgroups/themes/custom/signs/images/golden_door_medina.jpg" alt="Golden door at Masjid-e-nabvi Madina Munawara" />  </li>
          
      </ul>    </div>
 ',
    'format' => 'full_html',
    'substitute' => 1,
  );
  $export['no_content_slideshow'] = $content;

  $content = new stdClass();
  $content->disabled = FALSE; /* Edit this to true to make a default content disabled initially */
  $content->api_version = 1;
  $content->name = 'weather_block_group';
  $content->admin_title = 'Weather';
  $content->admin_description = '';
  $content->category = '';
  $content->settings = array(
    'admin_title' => 'Weather',
    'title' => '',
    'body' => '<div class="weather">
	<div id="basic-today">
		<div class="basic-weather-date-div">
			<p id="basic-today-weekday">Today</p>
		</div>
		<div id="basic-today-icon"></div>
		<div class="basic-weather-temp-div">
			<div id="basic-today-temp-current"></div>
		</div>
<!--
		<div class="basic-weather-cond-div">
			<p id="basic-today-conditions"></p>
		</div>
-->
	</div>

	<div id="basic-tomorrow"> 
		<div class="basic-weather-date-div">
			<p id="basic-tomorrow-weekday">Tomorrow</p>
		</div>
		<div id="basic-tomorrow-icon"></div>
		<div class="basic-weather-temp-div">
			<div id="basic-tomorrow-temp-high"></div><div id="basic-tomorrow-temp-low"></div>
		</div>
<!--
		<div class="basic-weather-cond-div">
			<p id="basic-tomorrow-conditions"></p>
		</div>
-->
	</div>

	<div id="basic-dayafter-tomorrow"> 
		<div class="basic-weather-date-div">
			<p id="basic-dayafter-tomorrow-weekday">Day After Tomorrow</p>
		</div>
		<div id="basic-dayafter-tomorrow-icon"></div>
		<div class="basic-weather-temp-div">
			<div id="basic-dayafter-tomorrow-temp-high"></div><div id="basic-dayafter-tomorrow-temp-low"></div>
		</div>
<!--
		<div class="basic-weather-cond-div">
			<p id="basic-dayafter-tomorrow-conditions"></p>
		</div>
-->
	</div>

	<div id="wunderground-logo">
		<img src="/profiles/signsorganicgroups/themes/custom/signs/images/wunderground_logo.svg" alt="Weather provided by Weather Underground, Inc. (wunderground.com Logo)">
	</div>
</div>',
    'format' => 'full_html',
    'substitute' => 1,
  );
  $export['weather_block_group'] = $content;

  return $export;
}
