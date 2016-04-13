var app = app || {};

app.AeroplaneView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    var name = this.model.get("rows");
    // this.$el.text(name & " rows: " & this.model.get("rows") & " columns: " & this.model.get("columns"));
    this.$el.text(this.model.get("name") + " Rows: " + this.model.get("rows") + " Columns: " + this.model.get("columns"));
    this.$el.appendTo("#aeroplaneData");

  }

});
    // debugger;



    var app = app || {};

    app.SecretInputView = Backbone.View.extend({
      events: {
        'click button' : 'createSecret',
        'keypress textarea' : 'checkForEnter'
      },

      el: "#secretForm",

      checkForEnter: function (event) {
        app.ENTER_KEY = 13;
        if (event.which === app.ENTER_KEY && !event.shiftKey) {
          event.preventDefault();
          this.createSecret();
        }
      },

      createSecret: function () {
        var secret = new app.Secret();
        var userContent = this.$el.find("#secretContent").val();


        secret.set({
          content: userContent
        });
        secret.save();
        app.secrets.add(secret);
        this.$el.find("#secretContent").val('').focus();
      },

      render: function(){
        var secretInputViewTemplate = $("#secretInputViewTemplate").html();
        this.$el.html(secretInputViewTemplate);

      }
    });
