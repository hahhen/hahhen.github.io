var retractBtn = document.getElementById("retract-btn");
var sectionsMap = document.getElementById("sections-map");
var sectionsCol = document.getElementById("sections-col");
var sectionsTit = document.getElementById("sections-tit")
var feed = document.getElementById("feed")
var recentFeed = document.getElementById("recent-feed")

retractBtn.addEventListener("click", (e)=>{
    if(retractBtn.textContent == "< Recolher"){
        sectionsTit.style.display = "none"
        sectionsCol.classList = "col-1"
        sectionsMap.style.display = "none"
        feed.classList = "col-7 feed"
        recentFeed.classList = "col-4 recent-feed"
        retractBtn.textContent = "> Expandir"
    }
    else{
        sectionsTit.style.display = "block"
        sectionsCol.classList = "col-3 sections"
        sectionsMap.style.display = "block"
        feed.classList = "col-6 feed"
        recentFeed.classList = "col-3 recent-feed"
        retractBtn.textContent = "< Recolher"
    }
})