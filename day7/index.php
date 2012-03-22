<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.css" />
        
        <script data-main="scripts/main" src="scripts/require.js"></script>
        

    </head>
    <body>
        <div data-role="page" id="home">
            <header>
                <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
            </header>

            <!-- add your content here -->
            <h3>-- Learning about AMD & RequireJS --</h3>
            <h4>Log:</h4>
            <div id="log" style="margin-left: 12px"></div>
            <br/>
            <a href="#dialog" class="speak" href="#home" data-rel="dialog" data-role="button" data-inline="true" data-icon="star" data-theme="c">Speak</a>
            <br/>
            <footer>
                <hr>
                <div><?php echo $title; ?> v1.0</div>
                <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
                <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
                <div>@author Diego Schwindt <a href="mailto:diego.sch21@gmail.com">&lt;diego.sch21@gmail.com&gt;</a></div>
            </footer>
        </div>
        
        <div data-role="page" id="dialog"> 
             <div data-role="header" data-theme="b">
                 <h1 id="who"></h1>
             </div>
             <div data-role="content" data-theme="b">
                 <p id="quote"></p>
                 <div>
                    <a href="#home" data-role="button" data-inline="true" data-icon="back" data-theme="c" data-direction="reverse" >Back</a>
                    <a href="#dialog" class="speak" href="#home" data-rel="dialog" data-role="button" data-inline="true" data-icon="star" data-theme="c">Another quote</a>
                </div>
                 
             </div>
         </div>
    </body>
</html>