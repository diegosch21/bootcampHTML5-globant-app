define(["mustache","underscore","jSmart","templates"],
        function(mustache,underscore,jsmart,templates) {
            return {
                parseMustache: function(view) {
                    return Mustache.render(templates.mustache,view);
                },
                parseUnderscore: function(view) {
                    var compiled = _.template(templates.underscore);
                    return compiled(view);
                },
                parseJSmart: function(view) {
                    var tpl = new jSmart(templates.jSmart);
                    return tpl.fetch(view);
                }
            }
            
                
        }
);

