if (typeof OPAnimations !== 'undefined' && OPAnimations.elements) {
    var waypoints = OPAnimations.elements.map(function(item) {
        var $element = opjq('.' + item.selector);

        if(item.effect == 'bounceInDown'){
            // Stop the effect if user scrolls too far
            $element.waypoint({
                handler: function(direction) {
                    $element.removeClass('animated ' + item.effect);
                },
                offset: $element.height()
            });

            // Stop the effect if user scrolls back up, and the element is no longer visible
            $element.waypoint({
                handler: function(direction) {
                    $element.removeClass('animated ' + item.effect);
                },
                offset: window.innerHeight - $element.height()
            });
        }

        if(item.effect == 'bounceInUp'){
            $element.waypoint({
                handler: function(direction) {
                    $element.removeClass('animated ' + item.effect);
                },
                offset: -$element.height()
            });
        }

        // Based on scroll direction we determine when
        // should the animation be triggered (when
        // the item is at the bottom or when the
        // item is on the top of the screen)
        var offsetValue = (item.direction === 'up') ? 0 : 'bottom-in-view';

        $element.waypoint({
            handler: function(direction) {
                if (direction === item.direction) {
                    $element.addClass('animated ' + item.effect).removeClass('to-be-animated');
                }
            },
            offset: offsetValue
        });
    });
}