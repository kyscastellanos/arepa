opjq(document).ready(function($){
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        lettersDelayFast = 25,
        //type effect
        typeLettersDelay = 150,
        typeLettersDelayFast = 50,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();

    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.op-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.op-headline'));
    }

    $(document).on('op.afterLiveEditorParse', function() {
        initHeadline();
    });

    function singleLetters($words) {
        $words.each(function(){
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function(){
            var headline = $(this);

            if(headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function(){ headline.find('.op-words-wrapper').addClass('is-loading') }, barWaiting);
            } else if (headline.hasClass('clip')){
                var spanWrapper = headline.find('.op-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type') && !headline.hasClass('type_fast')) {
                //assign to .op-words-wrapper the width of its longest word
                var words = headline.find('.op-words-wrapper b'),
                    width = 0;
                words.each(function(){
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.op-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);
        if ($word.parents('.op-headline').hasClass('type')) {

            var parentSpan = $word.parent('.op-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            // setTimeout(function(){
            parentSpan.removeClass('selected');
            hideLetter($word.find('i').last(), $word, bool, typeLettersDelay, ':first-child');
            //$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            // }, selectionDuration);
            setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeLettersDelay * $word.find('i').length);
            // setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

        } else if($word.parents('.op-headline').hasClass('type_fast')) {

            var parentSpan = $word.parent('.op-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting_for_fast');
            setTimeout(function(){
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function(){ showWord(nextWord, typeLettersDelayFast) }, typeAnimationDelay);

        } else if ($word.parents('.op-headline').hasClass('letters')) {

            var bool = ($word.children('i').length >= nextWord.children('i').length);
            hideLetterFast($word.find('i').eq(0), $word, bool, lettersDelayFast);
            showLetterFast(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        }  else if ($word.parents('.op-headline').hasClass('clip')) {

            $word.parents('.op-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.op-headline').hasClass('loading-bar')) {

            $word.parents('.op-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
            setTimeout(function(){ $word.parents('.op-words-wrapper').addClass('is-loading') }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function(){ hideWord(nextWord) }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if($word.parents('.op-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        }  else if($word.parents('.op-headline').hasClass('type_fast')) {
            showLetterFast($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        }  else if($word.parents('.op-headline').hasClass('clip')) {
            $word.parents('.op-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
                setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
            });
        }
    }

    // var $letterToHide;
    function hideLetter($letter, $word, $bool, $duration, direction) {

        direction = direction || ':last-child';
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(direction)) {
            if (direction === ':last-child') {
                setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration, direction); }, $duration);
            } else {
                setTimeout(function(){ hideLetter($letter.prev(), $word, $bool, $duration, direction); }, $duration);
            }
        } else if($bool) {
            setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
        }

        if ($letter.is(direction) && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function hideLetterFast($letter, $word, $bool, $duration, direction) {

        direction = direction || ':last-child';
        $letter.removeClass('in').addClass('out');

        if (direction === ':last-child') {
            setTimeout(function(){ hideLetterFast($letter.next(), $word, $bool, $duration); }, $duration);
        } else if($bool) {
            setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
        }

        if ($letter.is(direction) && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if(!$letter.is(':last-child')) {
            setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else {
            if($word.parents('.op-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.op-words-wrapper').addClass('waiting'); }, 200);}
            if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
        }
    }

    function showLetterFast($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if(!$letter.is(':last-child')) {
            setTimeout(function(){ showLetterFast($letter.next(), $word, $bool, $duration); }, $duration);
        } else {
            if($word.parents('.op-headline').hasClass('type_fast')) { setTimeout(function(){ $word.parents('.op-words-wrapper').addClass('waiting_for_fast'); }, 200);}
            if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});
