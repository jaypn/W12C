let user = Cookies.get('user');
let userToken = Cookies.get('Token')




if (user == undefined) {
    document.getElementById("message").innerHTML = '<a href="index.html"> No user logged in please go to login page  </a>';

}
else {
    document.getElementById("message").innerHTML = "<p> Welcome     " + user + "</p>";
    getcolors();
};

function getcolors() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let getcolors = JSON.parse(this.responseText);
            for (i = 0; i < getcolors.data.length; i++) {
                document.getElementById("colors").innerHTML += "<h2>" + getcolors.data[i].name + "<h2>";
                document.getElementById("colors").innerHTML += "<h3>" + getcolors.data[i].year + "<h3>";
                let div = document.createElement("div");
                div.style.width = "300px";
                div.style.height = "300px";
                
                div.style.background = getcolors.data[i].color;
                document.getElementById("colors").append(div);
            }

        };
    }
    ajax.open("GET", "https://reqres.in/api/unknown", true);

    ajax.send();
}












