const readButton = document.getElementsByTagName("h2")[0];
const unreadNotif = document.getElementsByClassName("unread");

readButton.addEventListener("click", (e) => {
    e.preventDefault();
    for(let unread of unreadNotif){
        unread.style.backgroundColor = "var(--readBackground)";
    }
    console.log("readme clicked!") /* To ensure button is working */
})