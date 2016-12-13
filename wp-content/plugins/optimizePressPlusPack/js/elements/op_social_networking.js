;var op_asset_settings = (function ($) {
    var style_has_background_color = ['style-1'],
        style_has_icon_and_font_color = ['style-2'],
        facebook_link = ['style-1', 'style-2'],
        twitter_link = ['style-1', 'style-2'],
        google_link = ['style-1', 'style-2'],
        linked_link = ['style-1', 'style-2'],
        youtube_link = ['style-1', 'style-2'],
        instagram_link = ['style-1', 'style-2'],
        new_tab = ['style-1', 'style-2'],
        attrs = {
            attributes: {
                help_vids: {
                    step_1: {
                        url: '',
                        width: '600',
                        height: '341'
                    },
                    step_2: {
                        url: '',
                        width: '600',
                        height: '341'
                    }
                },
                step_1: {
                    style: {
                        type: 'style-selector',
                        folder: 'previews',
                        addClass: 'op-disable-selected',
                    }
                },
                step_2: {
                    background_color: {
                        title: 'social_networking_background_color',
                        type: 'color',
                        default_value: '#3e87d3',
                        showOn: {field: 'step_1.style', value: style_has_background_color}
                    },
                    icon_and_font_color_box: {
                        title: 'social_networking_icon_and_font_color_box',
                        type: 'color',
                        default_value: '',
                        showOn: {field: 'step_1.style', value: ['style-2']}
                    },
                    new_tab: {
                        title: 'social_networking_new_tab',
                        value: false,
                        type: 'checkbox'
                    },
                    hide_text: {
                        title: 'social_networking_hide_text',
                        value: false,
                        type: 'checkbox',
                        showOn: {field: 'step_1.style', value: ['style-2']}
                    },
                    facebook_url: {
                        title: 'social_networking_fb',
                        addClass: 'op-social-networking-fb',
                        showOn: {field: 'step_1.style', value: facebook_link}
                    },
                    twitter_url: {
                        title: 'social_networking_tw',
                        addClass: 'op-social-networking-tw',
                        showOn: {field: 'step_1.style', value: twitter_link}
                    },
                    google_url: {
                        title: 'social_networking_g',
                        addClass: 'op-social-networking-g',
                        showOn: {field: 'step_1.style', value: google_link}
                    },
                    linkedin_url: {
                        title: 'social_networking_ln',
                        addClass: 'op-social-networking-ln',
                        showOn: {field: 'step_1.style', value: linked_link}
                    },
                    instagram_url: {
                        title: 'social_networking_in',
                        addClass: 'op-social-networking-in',
                        showOn: {field: 'step_1.style', value: instagram_link}
                    },
                    youtube_url: {
                        title: 'social_networking_yt',
                        addClass: 'op-social-networking-yt',
                        showOn: {field: 'step_1.style', value: youtube_link}
                    }
                }
            },
            insert_steps: {2: true},
            customInsert: function (attrs) {
                if (attrs.facebook_url == '' && attrs.google_url == '' &&
                    attrs.linkedin_url == '' && attrs.instagram_url == '' &&
                    attrs.youtube_url == '' && attrs.twitter_url == '') {
                    alert('Add at least one social account');
                    return;
                }

                var str = '[op_social_networking ';
                for (var i in attrs) {
                    if (attrs.hasOwnProperty(i) && attrs[i]) {
                        str += ' ' + i + '="' + attrs[i].replace(/"/ig, "'") + '"'
                    }
                }
                str += '] ';
                console.log(str);
                OP_AB.insert_content(str);
                $.fancybox.close();
            },
            customSettings: function (attrs) {
                attrs = attrs.attrs || {};
                for (var i in attrs) {
                    if (attrs.hasOwnProperty(i)) {
                        if (i == 'style') {
                            OP_AB.set_selector_value('op_assets_addon_op_social_networking_style_container', attrs[i]);
                            $('.op-pick-color').val(attrs.background_color || '').css({backgroundColor: attrs.background_color});
                        } else if (i == 'new_tab') {
                            $('#op_assets_addon_op_social_networking_' + i).attr('checked', attrs.new_tab).trigger('change');
                        } else if (i == 'hide_text') {
                            $('#op_assets_addon_op_social_networking_' + i).attr('checked', attrs.hide_text).trigger('change');
                        } else if (i == 'icon_and_font_color') {
                            $('#op_assets_addon_op_social_networking_' + i).attr('checked', attrs.icon_and_font_color_box).trigger('change');
                        } else {
                            $('#op_assets_addon_op_social_networking_' + i).val(attrs[i]);
                            $('op_assets_addon_op_social_networking_background_color').val(attrs.background_color || '').trigger('change');
                            $('#op_assets_addon_op_social_networking_icon_and_font_color_box').val(attrs.icon_and_font_color_box || '').trigger('change');
                        }
                    }
                }
            }
        };
    // attrs.attributes.step_2.fb_lang.default_value = op_fb_comments_asset['options']['lang'];
    // attrs.attributes.step_2.fb_lang.values = op_fb_comments_asset.languages;
    return attrs;
}(opjq));
