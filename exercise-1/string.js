//camelCase("hello world");
//

//console.log(camelCase("hello world this is me "));
//console.log(ucfirst("hello"));
//console.log(capitalize("hello world"));
//console.log(snake_case("hello world this is me "));

function ucfirst(string) {
    "use strict";
    if (string.length > 0) {
        return string[0].toUpperCase() + string.substring(1);
    }
    return string;
}

function capitalize(string) {
    "use strict";
    let words = string.split(" ");
    let final = "";
    words.forEach(function(word) {
        final = final.concat(ucfirst(word), " ")
    });
    return final;
}

function camelCase(string) {
    "use strict";
    if(checkString(string)) {
        string.trim();
        return capitalize(string).replace(/\s/g, "");
    }
    return "";
}

function snake_case(string) {
    "use strict";
    let words = string.split(" ");
    let final = "";
    words.forEach(function(word) {
        final = final.concat(word.toLowerCase(), "_")
    });
    return final;
}

function prop_access(object, property) {
    "use strict";
    if(object.hasOwnProperty(property)){
        return object.property;
    }
    return property + " not exists ";
}





function checkString(string) {
    if (typeof string === "string") { return true } return false;
}