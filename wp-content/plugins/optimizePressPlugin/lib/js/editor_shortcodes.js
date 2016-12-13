opjq(document).ready(function($) {

    var shortcode = _.extend({}, {
        initialize: function() {
            var self = this;

            wp.ajax.post('do_shortcode', {
                post_id: $('#post_ID').val(),
                shortcode: self.text,
                nonce: OptimizePress.leNonce
            }).done(function(response) {
                self.content = response;
            }).always(function() {
                self.render(null, true);
            });
        },
        edit: function(shortcodeString) {
            OP_AB.open_dialog(0);
            $.ajax({
                type: "POST",
                url: OptimizePress.ajaxurl,
                data: {
                    action: OptimizePress.SN + '-live-editor-params',
                    _wpnonce: OptimizePress.leNonce,
                    shortcode: shortcodeString
                },
                dataType: 'json'
            }).done(function(response) {
                if ($('.fancybox-wrap').length > 0) {
                    OP_AB.edit_element(response);
                    OptimizePress.currentEditElement = response.attrs.style;
                }
            }).fail(function(error) {
                console.error(error);
            });
        }
    });

    $.each(OptimizePress.shortcodes, function(index, item) {
        wp.mce.views.register(
            item,
            _.extend({}, shortcode)
        );
    });
}, jQuery);