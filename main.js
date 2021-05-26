
showNotes();

let addnote = document.getElementById("addnote");
addnote.addEventListener("click", function (e) {

    let txt = document.getElementById("textarea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(txt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txt.value = ""

    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card bg-dark noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" class="btn" onclick="deleteNote(this.id)" style="float: left;">Delete</button>
        </div>
      </div>
        
        `
    });
    let elm = document.getElementById("displaynotes");
    if (notesObj.length != 0) {
        elm.innerHTML = html;
    }
    else {
        elm.innerHTML = `Nothing to show. Use 'ADD NOTES' section to add notes here.`;
    };
};

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};

let search = document.getElementById("search");
search.addEventListener("input", function(){

    let val = search.value;
    let notecards = document.getElementsByClassName("noteCard");
    Array.from(notecards).forEach(function(element){   
        let cardtxt =  document.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(val)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        };
    });
});