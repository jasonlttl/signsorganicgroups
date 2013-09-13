<?php

function signs_preprocess_image(&$variables) {
  unset ($variables['width'], $variables['height'], $variables['attributes']['width'],$variables['attributes']['height']);
}

function signs_date_all_day_label() {
  return t('');
}

function signs_preprocess_html(&$variables) {
   drupal_add_library('system', 'ui');
}


   /**
    * Preprocess overlay.
    */
function signs_preprocess_overlay(&$variables) {
     // Add the path to the content class.
     $item = menu_get_item();
     $path = str_replace('%', '', $item['path']);
     // Remove trailing slash.
    $path = trim($path, '/');
   $path = str_replace('/', '-', $path);
  
     $variables['content_attributes_array']['class'][] = $path;
  }  


  

function signs_css_alter(&$css) {
	unset($css[drupal_get_path('module','system').'/system.menus.css']); 
  // List of disabled drupal default css files.
  $disabled_drupal_css = array(
    // Remove jquery.ui css files.
    'misc/ui/jquery.ui.core.css',
    'misc/ui/jquery.ui.theme.css',
  );

  // Remove drupal default css files.
  foreach ($css as $key => $item) {
    if (in_array($key, $disabled_drupal_css)) {
      // Remove css and its altered version that can be added by jquety_update.
      unset($css[$css[$key]['data']]);
      unset($css[$key]);
    }
  }
}



