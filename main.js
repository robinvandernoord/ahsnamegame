var isInIframe = (parent !== window);

function getParentUrl() {
    var isInIframe = (parent !== window),
        parentUrl = null;

    if (isInIframe) {
        parentUrl = document.referrer;
        console.log(parentUrl);
        if (parentUrl === "http://ahsname.ga/" || parentUrl === "http://ahsname.ga" || parentUrl ===  "http://www.ahsname.ga" || parentUrl === "http://www.ahsname.ga/") {
          window.top.location = "http://ahsname.ga/me";
          console.log("DOOOMMM");
          console.log("DON");
        }
        else if(parentUrl === "name.ga/me"){alert("yay");}

    }

    return parentUrl;

}

getParentUrl();




    function evryting() {
    x = document.getElementById("words").value;
    x = x.toLowerCase();
    z = x.substr(1);
    y = x.substr(0, x.length - (x.length - 1));

    if (y == "a" || y == "e" || y == "i" || y == "o" || y == "u") {

        document.getElementById("bo").innerHTML = x + ", " + x + ", bo-b" + x;
        document.getElementById("fo").innerHTML = "Banana-fana fo-f" + x;
        document.getElementById("mo").innerHTML = "Fee-fi-mo-m" + x;
        document.getElementById("name").innerHTML = x + "!";
    } else if (y == "b" || y == "f" || y == "m") {
        if (y == "f") {
            document.getElementById("bo").innerHTML = x + ", " + x + ", bo-b" + z;
            document.getElementById("fo").innerHTML = "Banana-fana fo-" + z;
            document.getElementById("mo").innerHTML = "Fee-fi-mo-m" + z;
            document.getElementById("name").innerHTML = x + "!";
        } else if (y == "b") {
            document.getElementById("bo").innerHTML = x + ", " + x + ", bo-" + z;
            document.getElementById("fo").innerHTML = "Banana-fana fo-f" + z;
            document.getElementById("mo").innerHTML = "Fee-fi-mo-m" + z;
            document.getElementById("name").innerHTML = x + "!";
        } else if (y == "m") {
            document.getElementById("bo").innerHTML = x + ", " + x + ", bo-b" + z;
            document.getElementById("fo").innerHTML = "Banana-fana fo-f" + z;
            document.getElementById("mo").innerHTML = "Fee-fi-mo-" + z;
            document.getElementById("name").innerHTML = x + "!";
        }
    } else if (x === "") {
        document.getElementById("bo").innerHTML = "";
        document.getElementById("fo").innerHTML = "";
        document.getElementById("mo").innerHTML = "";
        document.getElementById("name").innerHTML = "";
    } else {
        document.getElementById("bo").innerHTML = x + ", " + x + ", bo-b" + z;
        document.getElementById("fo").innerHTML = "Banana-fana fo-f" + z;
        document.getElementById("mo").innerHTML = "Fee-fi-mo-m" + z;
        document.getElementById("name").innerHTML = x + "!";
    }


}


setInterval(function () {
    evryting();
}, 100);
