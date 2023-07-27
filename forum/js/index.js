var retractBtn = document.getElementById("retract-btn");
var sectionsMap = document.getElementById("sections-map");
var sectionsCol = document.getElementById("sections-col");
var sectionsTit = document.getElementById("sections-tit")
var feed = document.getElementById("feed")
var recentFeed = document.getElementById("recent-feed")

retractBtn.addEventListener("click", (e)=>{
    if(retractBtn.textContent == " Recolher"){
        sectionsTit.style.display = "none"
        sectionsCol.classList = "col-1"
        sectionsMap.style.display = "none"
        feed.classList = "col-7 feed"
        recentFeed.classList = "col-4 recent-feed"
        retractBtn.innerHTML = 'Expandir <i class="fa-solid fa-caret-right"></i>'
    }
    else{
        sectionsTit.style.display = "block"
        sectionsCol.classList = "col-3 sections"
        sectionsMap.style.display = "block"
        feed.classList = "col-6 feed"
        recentFeed.classList = "col-3 recent-feed"
        retractBtn.innerHTML = '<i class="fa-solid fa-caret-left"></i> Recolher'
    }
})

var loginBtn = document.getElementById("login-btn")
var accountArea = document.getElementById("account-area")
var profAreaCont = '<div id="profile-area"><img id="pfp" src="https://i.pinimg.com/1200x/0d/76/eb/0d76eb00b206c6add63521f738c8bc0c.jpg" width="40" alt="Profile picture" class="pfp me-2 rounded-circle"><i id="p_dropdown" class="fa-solid fa-caret-down" style="color: #ffffff;"></i></div>'

loginBtn.addEventListener("click", (e)=>{
    accountArea.innerHTML = profAreaCont
    accountArea.addEventListener("click", (e)=>{
        if(e.target.id == "profile-area" || e.target.id == "pfp" || e.target.id == "p_dropdown"){
            if (accountArea.innerHTML == profAreaCont){
                accountArea.innerHTML ='<div class="d-flex flex-column align-items-end"> <div id="profile-area"><img id="pfp" src="https://i.pinimg.com/1200x/0d/76/eb/0d76eb00b206c6add63521f738c8bc0c.jpg" width="40" alt="Profile picture" class="pfp me-2 rounded-circle"><i id="p_dropdown" class="fa-solid fa-caret-up" style="color: #ffffff;"></i></i></div> <div id="account-info" class="account-info"> <span>Minha conta</span> <span>Sair</span> </div> </div>'
            }
            else{
                accountArea.innerHTML = profAreaCont
            }
        }
    })
    document.addEventListener("click", (e)=>{
        if(e.target.id != "profile-area" && e.target.id != "pfp" && e.target.id != "p_dropdown"){
            accountArea.innerHTML = profAreaCont
        }
    })
})

