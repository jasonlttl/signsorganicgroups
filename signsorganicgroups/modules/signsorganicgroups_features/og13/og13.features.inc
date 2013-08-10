<?php
/**
 * @file
 * og13.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function og13_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ctools_custom_content" && $api == "ctools_content") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "panelizer" && $api == "panelizer") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function og13_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function og13_node_info() {
  $items = array(
    'event' => array(
      'name' => t('Event'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'group' => array(
      'name' => t('Group'),
      'base' => 'node_content',
      'description' => t('Main content page for digital signage.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'group_slideshow' => array(
      'name' => t('Group Slideshow'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'news' => array(
      'name' => t('News'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
