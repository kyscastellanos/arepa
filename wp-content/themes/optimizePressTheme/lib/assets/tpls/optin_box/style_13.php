<?php include 'style.inc.php'; ?>

<div id="<?php echo $id; ?>" class="optin-box optin-box-13"<?php echo $style_str; ?>>
	<?php
		$headline = op_get_var($content,'headline','','<h2>%1$s</h2>');
		echo !empty($headline) ? $headline : '';

		$paragraph = op_get_var($content,'paragraph','');
		echo !empty($paragraph) ? str_replace('<p>', '<p class="description">', $paragraph) : '';

		echo $form_open.$hidden_str;
		if (isset($order)) {
			foreach ($order as $field) {
				if ($field === 'email_field') {
					op_get_var_e($fields,'email_field');
				} else if ($field === 'name_field') {
					op_get_var_e($fields,'name_field');
				} else if (isset($extra_fields[$field])) {
					op_get_var_e($extra_fields, $field);
				}
			}
		} else {
			op_get_var_e($fields,'name_field');
			op_get_var_e($fields,'email_field');
			echo implode('',$extra_fields);
		}
		wp_nonce_field('op_optin', 'op_optin_nonce');
		echo $submit_button;
		do_action('op_after_optin_submit_button');
		echo $link_button;
	?>
	</form>
	<?php op_get_var_e($content,'privacy','','<p class="privacy">%1$s</p>') ?>
</div>