(function (debug) {

    var totalFound = 0;
    var w = debug.documentElement.offsetWidth,
        t = debug.createTreeWalker(debug.body, NodeFilter.SHOW_ELEMENT),
        b;
    while (t.nextNode()) {
        b = t.currentNode.getBoundingClientRect();
        if (b.right > w || b.left < 0) {
            t.currentNode.style.setProperty('outline', '1px dotted red', 'important');
            console.log("Horizontal bug: " + t.currentNode);
            totalFound = totalFound + 1;
        }
    };

    var cssString = 'position:fixed;z-index:16777271;right:8px;top:8px;background:rgba(0,0,0,0.6);color:#FFF;padding:4px;font-size:16px;font-family:sans-serif;'
    var htmlDoc = document.getElementsByTagName('body');
    var newDiv = document.createElement('div');
    var divIdName = 'hideMe';
    newDiv.setAttribute('id', divIdName);
    newDiv.style.cssText = cssString;
    newDiv.innerHTML = "Found " + totalFound + " horizontal bugs on this page. Open Chrome console!"
    htmlDoc[0].appendChild(newDiv);

    setTimeout(function(){ 
        htmlDoc[0].removeChild(newDiv);
    }, 3000);

    

}(document)); 