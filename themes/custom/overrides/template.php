<?php

/**
 * Preprocess variables for html.tpl.php
 */
function overrides_preprocess_html(&$variables) {	

  global $user;
  foreach($user->roles as $key => $value) {
  $variables['classes_array'][] = 'role-' . $key;
}


}
