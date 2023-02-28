var random_margin = ["-5px","3px","8px","5px","6px","-3px"];
var random_colors = ["#65F432","#A71A36","#82DC8D","#86E582","#74B4D0","#EB64F7"];
var random_degree=["rotate(5deg)","rotate(6deg)","rotate(2deg)","rotate(-3deg)","rotate(7deg)","rotate(-4deg)",];

var index = 0;
 window.onload = document.querySelector("#user_input").select();
 document.querySelector("#create_note").addEventListener("click",() => {
    document.querySelector("#modal").style.display = "block";
 })

 document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
})

document.querySelector("#user_input").addEventListener("keydown", (event) =>{
    if (event.key =="Enter"){
        const text = document.querySelector("#user_input");
        createStickyNote(text.value);
        text.value = "";

    }
})

createStickyNote = (text) => {
 let note = document.createElement("div");
 note.className = "note";
 

 let details = document.createElement("div");
 details.className = "details";

 let noteText = document.createElement("h1");
 noteText.textContent = text;

 details.appendChild(noteText);
 note.append(details);


 if (index > random_colors.length-1)
    index = 0;

    note.setAttribute("style",`margin:${random_margin[Math.floor(Math.random()*random_margin.length)]};
    background-color:${random_colors[index++]};
    transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    note.addEventListener("dblclick",() => {
        note.remove();

    })
document.querySelector("#all_notes").appendChild(note);
}


