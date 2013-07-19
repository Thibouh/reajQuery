(function() {
    "use strict";

    var app = window.app = {
        userdata: {},
        module: {
            _INSTANCE: function() {

            }
        },
        init: function() {
//            alert("init");
            app.ready();
        },
        ready: function() {
//            alert("ok");

            app.setUserData("data-1", 1234);
            for (var attr in app.module) {
                if (attr !== "_INSTANCE") {
                    app.module._INSTANCE[attr] = app.module[attr]();
                }
            }
            
        },
        getUserData: function(name) {
            if (app.userdata.name) {
                return app.userdata.name;
            } else {
                return null;
            }
        },
        setUserData: function(name, value) {
            if (name && value) {
                app.userdata.name = value;
            }
        }
    };
    $(document).ready(app.init);

})();


(function(app) {

    app.slideshow = function() {
//        alert("slideshow");
        console.log(app);
        console.log(app.getUserData("data-1"));
    };

})(app.module);