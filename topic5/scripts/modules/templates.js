define({
    mustache: '{{#profiles}}<h3>{{name}}</h3>'+
        '<h4><i>{{actual_job}}</i></h4>'+
        '<div class="profile"><b>Age:</b> {{age}}<br/><b>City:</b> {{city}}<br/>'+
        '<b>Education:</b> {{education}}<br/>'+
        '<b>Work experience:</b>'+
        '<ul class="lista">{{#work_experience}}<li> <u>{{company}}</u><br/> {{position}} <i>[{{period}}]</i></li>{{/work_experience}}</ul></div>'
        +'{{/profiles}}',
    
    underscore: '<% for(var i=0; i<profiles.length;i++){ %>'+
        '<% var profile = profiles[i]; %>'+
        '<h3><%= profile.name%></h3><h4><i><%= profile.actual_job%></i></h4>'+
        '<div class="profile"><b>Age:</b> <%= profile.age%><br/><b>City:</b> <%= profile.city%><br/>'+
        '<b>Education:</b> <%= profile.education%><br/>'+
        '<b>Work experience:</b>'+
        '<ul class="lista"><% for(var j=0; j<profile.work_experience.length;j++){ %>'+
        '<% var work = profile.work_experience[j]; %>'+
        '<li> <u><%= work.company%></u><br/><%= work.position%> <i>[<%= work.period%>]</i></li>'+
        '<% }%></ul></div>'+ 
        '<% }%>',
        
    
    jSmart: '{foreach $profiles as $i => $profile}'+
        '<h3>{$profile.name}</h3><h4><i>{$profile.actual_job}</i></h4>'+
        '<div class="profile"><b>Age:</b> {$profile.age}<br/><b>City:</b> {$profile.city}<br/>'+
        '<b>Education:</b> {$profile.education}<br/>'+
        '<b>Work experience:</b>'+
        '<ul class="lista">{foreach $profile.work_experience as $j => $work}'+
        '<li> <u>{$work.company}</u><br/>{$work.position} <i>[{$work.period}]</i></li>'+
        '{/foreach}</ul></div>'+ 
        '{/foreach}'
});

