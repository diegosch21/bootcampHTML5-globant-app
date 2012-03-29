require.config({
    paths: {
        json2: 'lib/json2',
        jQuery: 'lib/jquery-1.7.1.min',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        localStorage: 'lib/backbone-localstorage'
    }
});


require(["json2","jQuery","views/AppView"],
    function(json2,jquery,AppView) { 
       $(function() {
            var app = new AppView;
       });
    }
);


