/*

jQuery

*/



(function ($) {

// Event Tabs

function eventTabs() {

 $('#events-rotate').tabs({ fx: { opacity: 'toggle' } }).tabs('rotate', 9000);
	$('#events-rotate').hover(function(){
			$(this).tabs('rotate', 0, false);
		},function(){
			$(this).tabs({ fx: { opacity: 'toggle' } }).tabs('rotate', 9000);
		}
	);

}


// Flexslider slideshow

function flexCall(div) {
	$('.hide').removeClass('hide');
	
	$(div).flexslider({
		controlNav: false,
		directionNav: false,
		slideshowSpeed: 12000,
		start: function(slider) {
			slider.removeClass('loading');
		}
	});
}	


// Weather

function displayWeather() {
	$.ajax({
		cache : false,
		type : 'GET',
		dataType : 'json',
		url : "http://api.wunderground.com/api/e0ec1b1d5eece118/forecast/geolookup/conditions/q/IA/Iowa_City.json?pws=0",
		dataType : "jsonp", 
		error : function() {
	
			$('#basic-today').css('width','100%');
			$('#basic-today').css('border-right','none');
			$('#basic-today-icon').hide();
			$('#basic-weather-temp-div').hide();
			$('#basic-today-temp-current').hide();
			$('#basic-weather-cond-div').hide();
			$('#basic-tomorrow').hide();
			$('#basic-dayafter-tomorrow').hide();

			// Error Results for Today's forecast
			var wu_today_temp_current = '';
			var wu_today_temp_high = '---';
			var wu_today_temp_low = '---';
			var wu_today_weekday = '';
			var wu_today_conditions = '';
			$('#basic-today-weekday').html('Weather Forecast Unavailable');
			$('#basic-today-temp-current').html(wu_today_temp_current);
			$('#basic-today-temp-high').html(wu_today_temp_high);
			$('#basic-today-temp-low').html(wu_today_temp_low);
			$('#basic-today-temperature').html(wu_today_temp_high + ' | ' + wu_today_temp_low);
			$('#basic-today-conditions').html(wu_today_conditions);
			$('#basic-today-icon').html('');
	
			// Hide Results for Tomorrow's forecast
			$('#basic-tomorrow-weekday').html('');
			$('#basic-tomorrow-temp-high').html('');
			$('#basic-tomorrow-temp-low').html('');
			$('#basic-tomorrow-temperature').html('');
			$('#basic-tomorrow-conditions').html('');
			$('#basic-tomorrow-icon').html('');
	
			// Hide Results for the Day After Tomorrow's forecast
			$('#basic-dayafter-tomorrow-weekday').html('');
			$('#basic-dayafter-tomorrow-temp-high').html('');
			$('#basic-dayafter-tomorrow-temp-low').html('');
			$('#basic-dayafter-tomorrow-temperature').html('');
			$('#basic-dayafter-tomorrow-conditions').html('');
			$('#basic-dayafter-tomorrow-icon').html('');

		},
		success : function(parsed_json) {
	
			$('#basic-today').css('width','32%');
			$('#basic-today').css('border-right','1px dashed #333');
			$('#basic-today-icon').show();
			$('#basic-weather-temp-div').show();
			$('#basic-weather-cond-div').show();
			$('#basic-today-temp-current').show();
			$('#basic-tomorrow').show();
			$('#basic-dayafter-tomorrow').show();

			// Results from location information
			var wu_location = parsed_json['current_observation']['display_location']['full'];
			var wu_location_city = parsed_json['location']['city'];
			var wu_location_state = parsed_json['location']['state'];
			$('#basic-weather-title').html('Basic Weather Forecast for ' + wu_location);
			
			// Results for Today's forecast
			var wu_today = parsed_json['forecast']['simpleforecast']['forecastday'][0];
			var wu_today_icon_alt = wu_today['icon'];
			var wu_today_temp_current = Math.round(parsed_json['current_observation']['temp_f']);
			var wu_today_temp_high = wu_today['high']['fahrenheit'];
			var wu_today_temp_low = wu_today['low']['fahrenheit'];
			var wu_today_weekday = wu_today['date']['weekday'];
			var wu_today_conditions = wu_today['conditions'];
			$('#basic-today-weekday').html('Now');
			$('#basic-today-temp-current').html(wu_today_temp_current + '&deg;F');
			$('#basic-today-temp-high').html(wu_today_temp_high + '&deg;F');
			$('#basic-today-temp-low').html(wu_today_temp_low + '&deg;F');
			$('#basic-today-temperature').html(wu_today_temp_high + '&deg;F | ' + wu_today_temp_low + '&deg;F');
			$('#basic-today-conditions').html(wu_today_conditions);
			$('#basic-today-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_today_icon_alt + '.svg">');
	
			// Results for Tomorrow's forecast
			var wu_tomorrow = parsed_json['forecast']['simpleforecast']['forecastday'][1];
			var wu_tomorrow_icon_alt = wu_tomorrow['icon'];
			var wu_tomorrow_temp_high = wu_tomorrow['high']['fahrenheit'];
			var wu_tomorrow_temp_low = wu_tomorrow['low']['fahrenheit'];
			var wu_tomorrow_weekday = wu_tomorrow['date']['weekday'];
			var wu_tomorrow_weekday_short = wu_tomorrow['date']['weekday_short'];
			var wu_tomorrow_conditions = wu_tomorrow['conditions'];
			$('#basic-tomorrow-weekday').html(wu_tomorrow_weekday_short);
			$('#basic-tomorrow-temp-high').html(wu_tomorrow_temp_high + '&deg;F');
			$('#basic-tomorrow-temp-low').html(wu_tomorrow_temp_low + '&deg;F');
			$('#basic-tomorrow-temperature').html(wu_tomorrow_temp_high + '&deg;F | ' + wu_tomorrow_temp_low + '&deg;F');
			$('#basic-tomorrow-conditions').html(wu_tomorrow_conditions);
			$('#basic-tomorrow-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_tomorrow_icon_alt + '.svg">');

			// Results for the Day After Tomorrow's forecast
			var wu_dayafter_tomorrow = parsed_json['forecast']['simpleforecast']['forecastday'][2];
			var wu_dayafter_tomorrow_icon_alt = wu_dayafter_tomorrow['icon'];
			var wu_dayafter_tomorrow_temp_high = wu_dayafter_tomorrow['high']['fahrenheit'];
			var wu_dayafter_tomorrow_temp_low = wu_dayafter_tomorrow['low']['fahrenheit'];
			var wu_dayafter_tomorrow_weekday = wu_dayafter_tomorrow['date']['weekday'];
			var wu_dayafter_tomorrow_weekday_short = wu_dayafter_tomorrow['date']['weekday_short'];
			var wu_dayafter_tomorrow_conditions = wu_dayafter_tomorrow['conditions'];
			$('#basic-dayafter-tomorrow-weekday').html(wu_dayafter_tomorrow_weekday_short);
			$('#basic-dayafter-tomorrow-temp-high').html(wu_dayafter_tomorrow_temp_high + '&deg;F');
			$('#basic-dayafter-tomorrow-temp-low').html(wu_dayafter_tomorrow_temp_low + '&deg;F');
			$('#basic-dayafter-tomorrow-temperature').html(wu_dayafter_tomorrow_temp_high + '&deg;F | ' + wu_dayafter_tomorrow_temp_low + '&deg;F');
			$('#basic-dayafter-tomorrow-conditions').html(wu_dayafter_tomorrow_conditions);
			$('#basic-dayafter-tomorrow-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_dayafter_tomorrow_icon_alt + '.svg">');

		}
	});
}


// Advanced Weather

function displayAdvWeather() {
	$.ajax({
		cache : false,
		type : 'GET',
		dataType : 'json',
		url : "http://api.wunderground.com/api/e0ec1b1d5eece118/forecast/geolookup/conditions/q/IA/Iowa_City.json?pws=0",
		dataType : "jsonp", 
		error : function() {
       
			$('#tomorrow').hide();
			$('#dayafter-tomorrow').hide();
			$('#today').css('border-bottom','none');

			// Error Results for Today's forecast
			var wu_today_temp_current = '---';
			var wu_today_temp_high = '---';
			var wu_today_temp_low = '---';
			var wu_today_weekday = '---';
			var wu_today_feelslike = '---';
			var wu_today_conditions = '';
			var wu_today_wind_dir = '---';
			var wu_today_humidity = '---';
			var wu_today_rain = '---';
			var wu_today_snow = '---';
			$('#today-weekday').html('Weather Forecast Unavailable');
			$('#today-temp-current').html(wu_today_temp_current);
			$('#today-temp-high').html(wu_today_temp_high);
			$('#today-temp-low').html(wu_today_temp_low);
			$('#today-temperature').html(wu_today_temp_high + ' | ' + wu_today_temp_low);
			$('#today-feelslike').html('<strong>Feels Like:</strong> ' + wu_today_feelslike + '&deg;F');
			$('#today-conditions').html(wu_today_conditions);
			$('#today-wind').html('<strong>Wind:</strong> ' + wu_today_wind_dir);
			$('#today-humidity-rain-snow').html('<strong>Humidity:</strong> ' + wu_today_humidity);
			$('#today-icon').html('');

			// Hide Results for Tomorrow's forecast
			$('#tomorrow-weekday').html('');
			$('#tomorrow-temp-high').html('');
			$('#tomorrow-temp-low').html('');
			$('#tomorrow-temperature').html('');
			$('#tomorrow-conditions').html('');
			$('#tomorrow-icon').html('');

			// Hide Results for the Day After Tomorrow's forecast
			$('#dayafter-tomorrow-weekday').html('');
			$('#dayafter-tomorrow-temp-high').html('');
			$('#dayafter-tomorrow-temp-low').html('');
			$('#dayafter-tomorrow-temperature').html('');
			$('#dayafter-tomorrow-conditions').html('');
			$('#dayafter-tomorrow-icon').html('');

		},
		success : function(parsed_json) {

			$('#tomorrow').show();
			$('#dayafter-tomorrow').show();

			// Results from location information
			var wu_location = parsed_json['current_observation']['display_location']['full'];
			var wu_location_city = parsed_json['location']['city'];
			var wu_location_state = parsed_json['location']['state'];
			$('#weather-title').html('Advanced Weather Forecast for ' + wu_location);
			
			// Results for Today's forecast
			var wu_today = parsed_json['forecast']['simpleforecast']['forecastday'][0];
			var wu_today_icon_alt = wu_today['icon'];
			var wu_today_temp_current = Math.round(parsed_json['current_observation']['temp_f']);
			var wu_today_temp_high = wu_today['high']['fahrenheit'];
			var wu_today_temp_low = wu_today['low']['fahrenheit'];
			var wu_today_weekday = wu_today['date']['weekday'];
			var wu_today_weekday_short = wu_today['date']['weekday_short'];
			var wu_today_day = wu_today['date']['day'];
			var wu_today_monthname = wu_today['date']['monthname'];
			var wu_today_feelslike = Math.round(parsed_json['current_observation']['feelslike_f']);
			var wu_today_conditions = wu_today['conditions'];
			var wu_today_wind_dir = parsed_json['current_observation']['wind_dir'];
			var wu_today_wind_mph = parsed_json['current_observation']['wind_mph'];
			var wu_today_humidity = parsed_json['current_observation']['relative_humidity'];
			var wu_today_rain = parseFloat(wu_today['qpf_day']['in']) + parseFloat(wu_today['qpf_night']['in']);
			var wu_today_snow = parseFloat(wu_today['snow_day']['in']) + parseFloat(wu_today['snow_night']['in']);
			$('#today-weekday').html('Now');
//			$('#today-weekday').html(wu_today_weekday_short);
			$('#today-date-short').html(wu_today_monthname.substring(0,3) + ' ' + wu_today_day);
			$('#today-temp-current').html(wu_today_temp_current + '&deg;');
			$('#today-temp-high').html(wu_today_temp_high + '&deg;');
			$('#today-temp-low').html(wu_today_temp_low + '&deg;');
			$('#today-temperature').html(wu_today_temp_high + '&deg;F | ' + wu_today_temp_low + '&deg;F');
			$('#today-feelslike').html('<strong>Feels Like:</strong> ' + wu_today_feelslike + '&deg;F');
			$('#today-conditions').html(wu_today_conditions);
			$('#today-wind').html('<strong>Wind:</strong> ' + wu_today_wind_dir.substring(0,1) + ' at ' + wu_today_wind_mph + ' mph');
			if((wu_today_conditions.indexOf('Rain') >= 0) || (wu_today_conditions.indexOf('Precipitation') >= 0)) $('#today-humidity-rain-snow').html('<strong>Rainfall:</strong> ' + wu_today_rain.toFixed(2) + ' in');
			else if((wu_today_conditions.indexOf('Snow') >= 0) || (wu_today_conditions.indexOf('Ice') >= 0) || (wu_today_conditions.indexOf('Freezing') >= 0)) $('#today-humidity-rain-snow').html('<strong>Snowfall:</strong> ' + wu_today_snow.toFixed(2) + ' in');
			else $('#today-humidity-rain-snow').html('<strong>Humidity:</strong> ' + wu_today_humidity);
			$('#today-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_today_icon_alt + '.svg">');
			
			// Results for Tomorrow's forecast
			var wu_tomorrow = parsed_json['forecast']['simpleforecast']['forecastday'][1];
			var wu_tomorrow_icon_alt = wu_tomorrow['icon'];
			var wu_tomorrow_temp_high = wu_tomorrow['high']['fahrenheit'];
			var wu_tomorrow_temp_low = wu_tomorrow['low']['fahrenheit'];
			var wu_tomorrow_weekday = wu_tomorrow['date']['weekday'];
			var wu_tomorrow_weekday_short = wu_tomorrow['date']['weekday_short'];
			var wu_tomorrow_day = wu_tomorrow['date']['day'];
			var wu_tomorrow_monthname = wu_tomorrow['date']['monthname'];
			var wu_tomorrow_conditions = wu_tomorrow['conditions'];
			$('#tomorrow-weekday').html(wu_tomorrow_weekday_short);
			$('#tomorrow-date-short').html(wu_tomorrow_monthname.substring(0,3) + ' ' + wu_tomorrow_day);
			$('#tomorrow-temp-high').html(wu_tomorrow_temp_high + '&deg;F');
			$('#tomorrow-temp-low').html(wu_tomorrow_temp_low + '&deg;F');
			$('#tomorrow-temperature').html(wu_tomorrow_temp_high + '&deg;F | ' + wu_tomorrow_temp_low + '&deg;F');
			$('#tomorrow-conditions').html(wu_tomorrow_conditions);
			$('#tomorrow-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_tomorrow_icon_alt + '.svg">');

			// Results for the Day After Tomorrow's forecast
			var wu_dayafter_tomorrow = parsed_json['forecast']['simpleforecast']['forecastday'][2];
			var wu_dayafter_tomorrow_icon_alt = wu_dayafter_tomorrow['icon'];
			var wu_dayafter_tomorrow_temp_high = wu_dayafter_tomorrow['high']['fahrenheit'];
			var wu_dayafter_tomorrow_temp_low = wu_dayafter_tomorrow['low']['fahrenheit'];
			var wu_dayafter_tomorrow_weekday = wu_dayafter_tomorrow['date']['weekday'];
			var wu_dayafter_tomorrow_weekday_short = wu_dayafter_tomorrow['date']['weekday_short'];
			var wu_dayafter_tomorrow_day = wu_dayafter_tomorrow['date']['day'];
			var wu_dayafter_tomorrow_monthname = wu_dayafter_tomorrow['date']['monthname'];
			var wu_dayafter_tomorrow_conditions = wu_dayafter_tomorrow['conditions'];
			$('#dayafter-tomorrow-weekday').html(wu_dayafter_tomorrow_weekday_short);
			$('#dayafter-tomorrow-date-short').html(wu_dayafter_tomorrow_monthname.substring(0,3) + ' ' + wu_dayafter_tomorrow_day);
			$('#dayafter-tomorrow-temp-high').html(wu_dayafter_tomorrow_temp_high + '&deg;F');
			$('#dayafter-tomorrow-temp-low').html(wu_dayafter_tomorrow_temp_low + '&deg;F');
			$('#dayafter-tomorrow-temperature').html(wu_dayafter_tomorrow_temp_high + '&deg;F | ' + wu_dayafter_tomorrow_temp_low + '&deg;F');
			$('#dayafter-tomorrow-conditions').html(wu_dayafter_tomorrow_conditions);
			$('#dayafter-tomorrow-icon').html('<img id="icon" src="/profiles/signsorganicgroups/themes/custom/signs/images/weather/' + wu_dayafter_tomorrow_icon_alt + '.svg">');

		}
	});
}


// HawkAlert CAP Feed function

function displayHawkAlert() {
	$.ajax({
		// HawkAlert CAP Feed -- http://emergency.uiowa.edu/hawk-alert-CAP
		// Local Proxy File ---- http://clas.uiowa.edu/signs/sites/clas.uiowa.edu.signs/files/hawkalert.xml
		cache : false,
		type : 'GET',
		url : 'http://clas.uiowa.edu/signs/sites/clas.uiowa.edu.signs/files/hawkalert.xml',
		dataType : 'xml',
		error : function() {
			/*
				There is a problem retrieving the HawkAlert CAP Feed, continue to 
				display standard digital signage content.
			*/
			$('#hawkalert-icon').html('');
			$('#hawkalert-headline').html('');
			$('#hawkalert-description').html('');
			$('#hawkalert-info').html('');
			$('#center-wrapper').show();
			$('.panel-col-bottom').show();
			$('#hawkalert-wrapper').hide();
		},
		success : function(xml) {
			/*
				The HawkAlert CAP Feed was successfully retrieved. Check the feed
				to see if there is an active alert.

				An empty HawkAlert message consists of only one <alert> node.
				If the <alert> parent node contains child nodes, then consider
				the alert as an active HawkAlert and parse the feed.
			*/
			if(($(xml).find('info').length > 0) && ($(xml).find('headline').length > 0) && ($(xml).find('description').length > 0))
			{
				/*
					The <alert> node contains child nodes and is considered active.
					Find the <info> child node and parse the relevant data from its
					children.
				*/
				$(xml).find('info').each(function(){
					var headline = $(this).find('headline').text();
					var description  = $(this).find('description').text();
//					$('#hawkalert-icon').attr('src','/sites/clas.uiowa.edu.signs/themes/signs/images/hawkalert_icon.png');
//					$('#hawkalert-icon').attr('alt','The University of Iowa Emergency Alert');
					$('#hawkalert-icon').html('<img src="/sites/clas.uiowa.edu.signs/themes/signs/images/hawkalert_icon.png" alt="The University of Iowa Emergency Alert" />');
					$('#hawkalert-headline').html(headline);
					$('#hawkalert-description').html(description);
//					$('#hawkalert-headline').html('HawkAlert System TEST');
//					$('#hawkalert-description').html('This is only a TEST of the University of Iowa Hawk Alert system for CLAS digital displays.<br>Please disregard this notice.');
					$('#hawkalert-info').html('For more information, see <a href="http://e.uiowa.edu/" title="The University of Iowa Emergency Information">http://e.uiowa.edu/</a>');
				});

				/* Hide the standard digital signage content container and show the HawkAlert container */
				$('#center-wrapper').hide();
				$('.panel-col-bottom').hide();
				$('#hawkalert-wrapper').show();
			}
			else
			{
				/*
					The HawkAlert message contains no child nodes and is considered empty.
					Show standard content until a new HawkAlert is detected.
				*/
				$('#hawkalert-icon').html('');
				$('#hawkalert-headline').html('');
				$('#hawkalert-description').html('');
				$('#hawkalert-info').html('');
				$('#center-wrapper').show();
				$('.panel-col-bottom').show();
				$('#hawkalert-wrapper').hide();
			}
		}
	});
}


// Marquee News Slider 

function marqueeSlider() {

	var use_debug = false;

	function debug(){
		if( use_debug && window.console && window.console.log ) console.log(arguments);
	}

	// on DOM ready
	$(document).ready(function (){
		$(".marquee").marquee({
			loop: -1
			// this callback runs when the marquee is initialized
			, init: function ($marquee, options){
				debug("init", arguments);

				// shows how we can change the options at runtime
				if( $marquee.is("#marquee2") ) options.yScroll = "bottom";
			}
			// this callback runs before a marquee is shown
			, beforeshow: function ($marquee, $li){
				debug("beforeshow", arguments);

				// check to see if we have an author in the message
				var $author = $li.find(".author");
				// move author from the item marquee-author layer and then fade it in
				if( $author.length ){
					if( $author.html() != $('#marquee-author span').html() ){
						$("#marquee-author").html("<span style='display:none;'>" + $author.html() + "</span>").find("> span").fadeIn(1000);
					}
					else {
						$("#marquee-author").html("<span>" + $author.html() + "</span>").find("> span");
					}
				}
			}
			// this callback runs when a has fully scrolled into view (from either top or bottom)
			, show: function (){
				debug("show", arguments);
			}
			// this callback runs when a after message has being shown
			, aftershow: function ($marquee, $li){
				debug("aftershow", arguments);

				// find the author
				var $author = $li.find(".author");
				// hide the author
				if( $author.length ) $("#marquee-author").find("> span").fadeOut(1000);
			}
		});
	});
	
	function pause(selector){
		$(selector).marquee('pause');
	}
	
	function resume(selector){
		$(selector).marquee('resume');
	}
}


// Time and Date

function displayTime() {
	var datestr = "";
	var timestr = "";
	var datetimestr = "";
	var fullweekdayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var weekdayarray = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
	var fullmontharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	
	var currentTime = new Date;
	var weekday = weekdayarray[currentTime.getDay()];
	var day = currentTime.getDate();
	var month = montharray[currentTime.getMonth()];
	var year = currentTime.getFullYear();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
    var ampm = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0 ? 12 : hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;

	datestr += weekday + ", " + month + " " + day;
	datetimestr += weekday + ", " + month + " " + day + " ";
	timestr += hours + ":" + minutes + " " + ampm;
	datetimestr += timestr;

	$('#datediv').text(datestr);
	$('#timediv').text(timestr);
}


// Whitepages

function scrollWhitepages() {
//	$('.whitepages').animate({scrollTop: $('.whitepages').attr("scrollHeight")}, 10000, "linear");
//	$('.whitepages').animate({scrollTop: $('.whitepages').prop("scrollHeight")}, 100000, "linear");

	$('.whitepages').animate({scrollTop: $('.whitepages').attr("scrollHeight")}, 80000, "linear", function() {
		$(this).animate({scrollTop: 0}, 80000, "linear");
	});
}



/* go */

$(document).ready(function() {
	eventTabs();
	flexCall('.flexslider');	
	displayWeather();
	displayAdvWeather();
	marqueeSlider();
	displayTime();
	displayHawkAlert();
	scrollWhitepages();
	
	setInterval(displayWeather, 60000); 	/* Check every minute for weather updates: 1000ms/sec*60sec/min*1min = 60000 */
	setInterval(displayAdvWeather, 60000);	/* Check every minute for weather updates: 1000ms/sec*60sec/min*1min = 60000 */
	setInterval(displayTime, 10000);		/* Check every ten seconds for date and time updates: 1000ms/sec*10sec = 10000 */
	setInterval(displayHawkAlert, 60000); 	/* Check every minute for HawkAlert warnings: 1000ms/sec*60sec/min*1min = 60000 */
	setInterval(scrollWhitepages, 165000); 	/* Restart scroll of whitepages 5 seconds after full scroll from bottom back to top */
});

})(jQuery);