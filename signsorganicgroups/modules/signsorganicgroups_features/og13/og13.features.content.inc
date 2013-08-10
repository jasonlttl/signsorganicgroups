<?php
/**
 * @file
 * og13.features.content.inc
 */

/**
 * Implements hook_content_defaults().
 */
function og13_content_defaults() {
  $content = array();

  $content['event_title_1'] = (object) array(
    'exported_path' => 'content/event-title-1',
    'title' => 'Event Title 1',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'event',
    'language' => 'und',
    'created' => '1376007505',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'event_title_1',
    'body' => array(),
  );

  $content['event_title_2'] = (object) array(
    'exported_path' => 'content/event-title-2',
    'title' => 'Event Title 2',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'event',
    'language' => 'und',
    'created' => '1376007525',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'event_title_2',
    'body' => array(),
  );

  $content['group_1_slideshow'] = (object) array(
    'exported_path' => 'content/slideshow',
    'title' => 'Slideshow',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'group_slideshow',
    'language' => 'und',
    'created' => '1374610021',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'group_1_slideshow',
  );

  $content['group_example'] = (object) array(
    'exported_path' => 'content/group-1',
    'title' => 'Group 1',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'group',
    'language' => 'und',
    'created' => '1374607481',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'group_example',
    'body' => array(),
  );

  $content['news_headline_1'] = (object) array(
    'exported_path' => 'content/news-headline-1',
    'title' => 'News Headline 1',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'news',
    'language' => 'und',
    'created' => '1376007377',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'news_headline_1',
    'body' => array(),
  );

  $content['news_headline_2'] = (object) array(
    'exported_path' => 'content/news-headline-2',
    'title' => 'News Headline 2',
    'status' => '1',
    'promote' => '0',
    'sticky' => '0',
    'type' => 'news',
    'language' => 'und',
    'created' => '1376007428',
    'comment' => '1',
    'translate' => '0',
    'machine_name' => 'news_headline_2',
    'body' => array(),
  );

return $content;
}
