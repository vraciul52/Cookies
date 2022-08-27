setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cArr = decodedCookie.split(';');
    for(let i = 0; i < cArr.length; i++) {
        let c = cArr[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    
    return "";
    
}

document.querySelector("#cookies-btn").addEventListener("click", () =>{
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if(!getCookie("cookie")) {
        document.querySelector("#cookies").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);