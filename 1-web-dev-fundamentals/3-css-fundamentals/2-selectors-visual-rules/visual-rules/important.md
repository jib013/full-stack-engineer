Visual Rules
Important

!important can be applied to specific declarations, instead of full rules. It will override any style no matter how specific it is. As a result, it should almost never be used. Once !important is used, it is very hard to override.

The syntax of !important in CSS looks like this:

p {
  color: blue !important;
}
 
.main p {
  color: red;
}

Since !important is used on the p selector’s color attribute, all p elements will appear blue, even though there is a more specific .main p selector that sets the color attribute to red.

One justification for using !important is when working with multiple stylesheets. For example, if we are using the Bootstrap CSS framework and want to override the styles for one specific HTML element, we can use the !important property.
