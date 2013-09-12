<?php
/**
 * @file
 * Template for a 2 column panel layout.
 *
 * This template provides a two column panel display layout, with
 * additional areas for the top and the bottom.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   - $content['top']: Content in the top row.
 *   - $content['left']: Content in the left column.
 *   - $content['right']: Content in the right column.
 *   - $content['bottom']: Content in the bottom row.
 */
?>
<div class="panel-2col-stacked clearfix panel-display<?php if(empty($content['right'])){ print "right-no-right-sidebar";} ?> <?php if(empty($content['left'])){ print "left-no-left-sidebar";} ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>


<div class="wrapper">
	<?php if ($content['top-left']): ?>
        <div class="panel-col-top-left panel-panel grid-8">
            <div class="inside"><?php print $content['top-left']; ?></div>
        </div>
    <?php endif; ?>

	<?php if ($content['top-right']): ?>
        <div class="panel-col-top-right panel-panel grid-4">
            <div class="inside"><?php print $content['top-right']; ?></div>
        </div>
    <?php endif; ?>
</div><!--end wrapper -->

<div class="center-wrapper" id="center-wrapper">
	<?php if ($content['left']): ?>
        <div class="panel-col-first panel-panel grid-8">
            <div class="inside"><?php print $content['left']; ?></div>
        </div>
    <?php endif; ?>
    
    <?php if ($content['right']): ?>
        <div class="panel-col-last panel-panel grid-4">
            <div class="inside"><?php print $content['right']; ?></div>
        </div>
    <?php endif; ?>
</div><!--end center-wrapper -->

<div id="hawkalert-wrapper">
	<div id="hawkalert-icon"></div>
	<div id="hawkalert-headline"></div>
    <div id="hawkalert-description"></div>
	<div id="hawkalert-info"></div>
</div><!--end hawkalert-wrapper -->

<?php if ($content['bottom']): ?>
    <div class="panel-col-bottom panel-panel">
        <div class="inside"><?php print $content['bottom']; ?></div>
    </div>
<?php endif; ?>
  

</div>
