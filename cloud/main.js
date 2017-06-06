
var _ = require("underscore");

/** Save Hooks **/

Parse.Cloud.beforeSave("Example", function(request, response) {
  response.success();
});

/** CloudCode Functions **/

Parse.Cloud.define("exampleFunction", function(request, response) {
  response.success();
});
