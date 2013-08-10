<?php

// Plugin definition
$plugin = array(
  'title' => t('Two column stacked responsive'),
  'category' => t('Columns: 2'),
  'icon' => 'twocol_stacked_responsive.png',
  'theme' => 'panels_twocol_stacked_responsive',
  'css' => 'twocol_stacked_responsive.css',
  'regions' => array(
    'top-left' => t('Top Left'),
	'top-right' => t('Top Right'),
    'left' => t('Left side'),
    'right' => t('Right side'),
    'bottom' => t('Bottom')
  ),
);
