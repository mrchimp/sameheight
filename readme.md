
sameheight
==========

### Makes things the same height. Pretty simple really. ###

## Options ##

**calcOnResize** *Boolean. Default: true* - If true, heights will be recalculated when the window is resized. 

**autoHeightCondition** - A function. When this returns truthy, heights will be set to `defaultHeight`, otherwise heights will be matched.

**defaultHeight** *String* - Default: 'auto'. Height value to use when autoHeightCondition returns truthy.


## Usage ##

    $('.my-boxes').sameheight({
      autoHeightCondition: function () {
        return window.innerWidth < 992;
      }
    });

## Dynamic Content ##

You might need to add new elements, for example if you load content with AJAX. To do this, just use the refresh action after your content is loaded. If your content contains images you'll need to wait until the images are loaded e.g.:

    $('.my-container'.).on('load`, function() }{
      $('.my-boxes').sameheight('refresh');
    });
