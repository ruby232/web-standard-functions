/**
 * Returns a string with the cookie’s value
 * @param {string } name The name of the cookie
 * @return {string} The cookie's valie
 */
export var getCookie = function (name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].replace(/^ +/g, "");
        if (cookie.indexOf(searchName) === 0) {
            return cookie.substring(searchName.length, cookie.length);
        }
    }
    return null;
};
//# sourceMappingURL=getCookie.js.map