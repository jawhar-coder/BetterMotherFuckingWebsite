let popup=`
<h1>Hey le site xxxvidsxxx est trop bien. Viens dessus stp please</h1>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Accept</a>
<a href="#">Decline</a>
`

function tempAlert(popup)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:30%;left:30%;background-color:red;border:2px solid #7e8ba0;border-radius:5px; width:500px;height:300px; text-align:center");
 el.innerHTML = popup;
 document.body.appendChild(el);
}


window.addEventListener('load', ()=>{

    setTimeout(() => {
        tempAlert(popup)
        let links=document.querySelectorAll('a')
        for (let link of links) {
            link.addEventListener('click',(e)=>{
            console.log(e.target);
                if (e.target.innerHTML==="Decline") {
                    e.target.parentElement.remove();
                }
            })
        }
    }, 10000); 
})

let paragraphs=document.querySelectorAll('p');
    let headings1=document.querySelectorAll('h1');
    let headings2=document.querySelectorAll('h2');
    let headings3=document.querySelectorAll('h3');

document.querySelector('.mode-psychédélique').addEventListener('click',()=>{

    if (document.querySelector('.mode-psychédélique').innerHTML==='Mode Psychédélique') {
        document.querySelector('.mode-psychédélique').innerHTML='Mode Normal';
        document.querySelector('body').style.backgroundColor='magenta';
        
        for (let p of paragraphs) {
            p.style.color='blue';
            p.style.fontFamily='courier';
        }

        for (let h of headings1){
            h.style.color='green';
            h.style.fontFamily='Comic Sans';
        }

        for (let h of headings2){
            h.style.color='green';
            h.style.fontFamily='Comic Sans';
        }

        for (let h of headings3){
            h.style.color='green';
            h.style.fontFamily='Comic Sans';
        }

    } else {
        document.querySelector('.mode-psychédélique').innerHTML='Mode Psychédélique';
        document.querySelector('body').style.backgroundColor='white';
        for (let p of paragraphs) {
            p.style.color='#444';
            p.style.fontFamily='serif';
        }

        for (let h of headings1){
            h.style.color='#444';
            h.style.fontFamily='serif';
        }

        for (let h of headings2){
            h.style.color='#444';
            h.style.fontFamily='serif';
        }

        for (let h of headings3){
            h.style.color='#444';
            h.style.fontFamily='serif';
        }

    }   
}
)
