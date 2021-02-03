export const cookieName = "fn-cookie";

export const getCookie = (name) => {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
}