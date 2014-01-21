
sameheight
==========

Makes things the same height. Pretty simple really.
---------------------------------------------------

Options
-------

**calcOnResize** *Boolean. Default: true* - If true, heights will be recalculated when the window is resized.

**autoHeightCondition** - A function. When this returns truthy, heights will be set to `defaultHeight`, otherwise heights will be matched.

**defaultHeight** *String* - Default: 'auto'. Height value to use when autoHeightCondition returns truthy.
