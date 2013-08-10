<?php
/**
 * @file
 * og13.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function og13_user_default_permissions() {
  $permissions = array();

  // Exported permission: access content.
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      0 => 'administrator',
      1 => 'anonymous user',
    ),
    'module' => 'node',
  );

  return $permissions;
}
