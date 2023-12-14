const readButton = document.getElementsByTagName("h2")[0];
const unreadNotif = document.getElementsByClassName("unread");
const alerts = document.getElementsByClassName("alertIcon");
const notificationCount = document.getElementsByClassName("notificationCount")[0];

readButton.addEventListener("click", () => {
    for(let unread of unreadNotif){
        unread.style.backgroundColor = "var(--readBackground)";
    }
    for(let alert of alerts){
        alert.style.visibility = "hidden"
    }
    notificationCount.innerText = "0";
    console.log("readme clicked!") /* To ensure button is working */
})