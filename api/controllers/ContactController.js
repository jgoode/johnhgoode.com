/**
 * Created by johngoode on 3/24/15.
 */
var Parse = require('parse').Parse;
module.exports = {
  submitForm: function (req, res) {
    Parse.initialize("CITvnDiJrtA5BgtuyXRBCipclguuU9fuFW1pnw0u", "LMznMf5wx6jpNmo43QJWPxiAXSKqVfFEJUexwePW");

    var Contact = Parse.Object.extend("Contact");
    var contact = new Contact();

    contact.set("name", req.param('name'));
    contact.set("phone", req.param('phone'));
    contact.set("email", req.param('email'));
    contact.set("message", req.param('message'));

    contact.save(null, {
      success: function(contact) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + contact.id);
        return res.ok();
      },
      error: function(contact, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
        return res.serverError(error);
      }
    });


    return res.ok();
  }
};
