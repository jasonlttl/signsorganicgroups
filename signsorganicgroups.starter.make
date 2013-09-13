; Download core
core = 7.23
projects[drupal][type] = "core"
; Specify Drush make's API version
api = 2

; Download signsorganicgroups profile.
projects[signsbasic][type] = "profile"
projects[signsbasic][download][type] = "git"
projects[signsbasic][download][url]  = "git://github.com/UICLAS/signsorganicgroups.git"