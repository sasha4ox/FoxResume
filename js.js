window.onload=function(){
    let avatarHover = document.getElementById("avatarHover");
    let pageBorder = document.getElementById("pageBorder");
    let h1 = document.getElementsByTagName("h1")[0];
    let h2 = document.getElementsByTagName("h2")[0];
    let h3 = document.getElementsByTagName("h3");
    let h2Footer = document.getElementsByTagName("h2")[1];
    let footer = document.getElementsByTagName("footer");
    let timeline = document.getElementsByClassName("timeline");
    let liArray = [];
// get all li on page
    Array.from(timeline).forEach(x=>{
            let li = Array.from(x.getElementsByTagName("li")).forEach(z=>{
                    liArray.push(z);
            });
                liArray.push(li);
    })
//remove undefined
      let liArrayFull = liArray.filter(x=>x!==undefined);
//remove li without ul
        let liArrayUl = liArrayFull.filter(x=>{
              return  x.childNodes.length !=1;
        });

//apper text if window.height enough
liArrayUl.forEach(x=>{
        let LiSourceBottom = x.getBoundingClientRect().top + window.pageYOffset -650 ;
        if (window.pageYOffset < LiSourceBottom){
               
            }else if (window.pageYOffset > LiSourceBottom){
                x.style.transform = "translateX(0px)";
                x.style.opacity = "1";
                
            }
})
Array.from(h3).forEach(x=>{
        let h3SourceBottom = x.getBoundingClientRect().top + window.pageYOffset -650;
        if (window.pageYOffset < h3SourceBottom){
               
        }else if (window.pageYOffset > h3SourceBottom){
            x.style.transform = "translateX(0px)";
            x.style.opacity = "1";

        }
})

// onscroll for text appearing on the page
      window.onscroll = function(){
        Array.from(h3).forEach(x=>{
                let h3SourceBottom = x.getBoundingClientRect().top + window.pageYOffset -650;
                if (window.pageYOffset < h3SourceBottom){
                       
                }else if (window.pageYOffset > h3SourceBottom){
                    x.style.transform = "translateX(0px)";
                    x.style.opacity = "1";
                }
        })
         liArrayUl.forEach(x=>{
                let LiSourceBottom = x.getBoundingClientRect().top + window.pageYOffset -650 ;
                if (window.pageYOffset < LiSourceBottom){
                       
                    }else if (window.pageYOffset > LiSourceBottom){
                        x.style.transform = "translateX(0px)";
                        x.style.opacity = "1";
                    }
        })
      }
// change text by clicking on footer
    Array.from(footer).forEach(x=>{
            x.addEventListener("click",()=>{
                let h2FooterLowerCase = h2Footer.innerText.toLowerCase();
            if(h2FooterLowerCase !== "bye!!"){
                    h2Footer.innerText = "Bye!!";
            } else{
                    h2Footer.innerHTML = "Thank you <br> for your <br> interest in <br> my resume:D";
            }
        })
    })
// move text by mousemove
    h2.addEventListener("mousemove", (x)=>{
            let h2MouseX = x.offsetX;
            h2.style.marginLeft = `${h2MouseX/2}` + "px";
            h2.style.letterSpacing = `${((h2MouseX+500)/500)-0.75}` + "em";
            h2.style.cursor = 'pointer'
    })
//hover effect on avatar and border page
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



