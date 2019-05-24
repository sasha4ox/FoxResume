window.onload=function(){
    let avatarHover = document.getElementById("avatarHover");
    let pageBorder = document.getElementById("pageBorder");
    let h1 = document.getElementsByTagName("h1")[0];
    let h2 = document.getElementsByTagName("h2")[0];
    let h2Footer = document.getElementsByTagName("h2")[1];
    let footer = document.getElementsByTagName("footer");
    Array.from(footer).forEach(x=>{
            x.addEventListener("click",(x)=>{
                let footerTarget = x.target;
                console.log(footerTarget)
                let h2FooterLowerCase = h2Footer.innerText.toLowerCase();
            if(h2FooterLowerCase !== "bye!!"){
                    h2Footer.innerText = "Bye!!";
            } else{
                    h2Footer.innerHTML = "Thank you <br> for your <br> interest in <br> my resume:D";
                    console.log("?")
            }
        })
    })
    h2.addEventListener("mousemove", (x)=>{
            let h2MouseX = x.offsetX;
            h2.style.marginLeft = `${h2MouseX/2}` + "px";
            h2.style.letterSpacing = `${((h2MouseX+500)/500)-0.75}` + "em"
    })
    avatarHover.onmouseover = function(){
        avatarHover.style.cursor = "pointer";
        pageBorder.style.borderColor = '#f00';
        avatarHover.setAttribute("data", "./assets/images/avatarHover.svg")
        h1.style.color = "red";
        h2.style.color = "red";
	}
	avatarHover.onmouseout = function(){
        pageBorder.style.borderColor = 'midnightblue';
        avatarHover.setAttribute("data", "./assets/images/avatar.svg")
        h1.style.color = "black";
        h2.style.color = "black";
	}
       
       
        
}



