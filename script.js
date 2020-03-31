// animation doesn't work, need more research to figure out

let initialWidth = 1;
let p = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 85) {
        clearInterval(p);
    }
    else $("#Py").css("width", initialWidth+"%");
}, 50);

let s = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 85) {
        clearInterval(s);
    }
    else $("#sql").css("width", initialWidth+"%");
}, 50);

let h = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 80) {
        clearInterval(h);
    }
    else $("#html").css("width", initialWidth+"%");
}, 50);

let c = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 35) {
        clearInterval(c);
    }
    else $("#css").css("width", initialWidth+"%");
}, 50);

let js = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 50) {
        clearInterval(js);
    }
    else $("#js").css("width", initialWidth+"%");
}, 50);

let jq = setInterval(()=> {
    initialWidth += 1;
    if (initialWidth >= 50) {
        clearInterval(jq);
    }
    else $("#jq").css("width", initialWidth+"%");
}, 50);