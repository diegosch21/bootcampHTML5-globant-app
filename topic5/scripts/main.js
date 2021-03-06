require.config({
    paths: {
        jQuery: 'lib/jquery-1.7.1.min',
        jQueryMobile: 'lib/jquery.mobile-1.1.0-rc.1.min',
        mustache: 'lib/mustache',
        underscore: 'lib/underscore',
        jSmart: 'lib/smart-2.7.min',
        domReady: 'lib/domReady', 
        parser: 'modules/parser',
        templates: 'modules/templates'
    }
});


require(["domReady!","parser","order!jQuery","order!jQueryMobile"],
    function(doc,parser) { 
       $.getJSON('profiles/profs.json',function(json) {
            $("#mustache").html(parser.parseMustache(json));
            $("#underscore").html(parser.parseUnderscore(json));
            $("#jsmart").html(parser.parseJSmart(json));
        })
       
       
    }
);


