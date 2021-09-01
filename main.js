const onLoad = () => {

    const playVideo = (e) => {
        e.target.classList.add("hide");
        document.querySelector("video").play();
        
    }

    document.getElementById("video").addEventListener("click", playVideo);

    const menuToggle = () => {
        document.getElementById("menu").classList.toggle("open");
        document.getElementById("navlist").classList.toggle("open");
    }

    document.getElementById("menu").addEventListener("click", menuToggle)



}

window.addEventListener("load", onLoad)