
let elem = document.querySelector(".editor");

(function () {
    let editor = ace.edit(elem, {
        mode: "ace/mode/javascript",
        selectionStyle: "text"
    })
    editor.setFontSize("10px");
    // editor.fontFamily("tahoma")
    editor.session.setMode("ace/mode/javascript");
})();


let languages = document.querySelectorAll(".side-bar i");

languages.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        let logo = document.querySelector(".logo");
        removeSelection();
        if(elem.classList.contains("fa-java")){
            logo.innerText="Let's Compile JAVA";
            elem.style.backgroundColor="brown";
        }else if(elem.classList.contains("fa-python")){
            logo.innerText="Let's Compile PYTHON";
            elem.style.backgroundColor="brown";
        }else if(elem.classList.contains("fa-js")){
            logo.innerText="Let's Compile JAVASCRIPT";
            elem.style.backgroundColor="brown";
        }
    })
})

function removeSelection(){
    languages.forEach((elem)=>{
        elem.style.backgroundColor="transparent";
    })
}


let fontSizeSelector = document.querySelector(".font-size-selector");

fontSizeSelector.addEventListener("change",(opt)=>{
    let editor = ace.edit(elem, {
        mode: "ace/mode/java",
        selectionStyle: "text"
    })
    editor.setFontSize(`${opt.target.value}px`);
    // editor.fontFamily("tahoma")
    editor.session.setMode("ace/mode/java");
})

let javascript = () =>{
    let editor = ace.edit(elem, {
        mode: "ace/mode/javascript",
        selectionStyle: "text"
    })
    editor.session.setMode("ace/mode/javascript");
    console.log("Javascript selected!");
}

let python = ()=>{
    let editor = ace.edit(elem, {
        mode: "ace/mode/python",
        selectionStyle: "text"
    })
    editor.session.setMode("ace/mode/python");
    console.log("python selected!");
}

let java = () =>{
    let editor = ace.edit(elem, {
        mode: "ace/mode/java",
        selectionStyle: "text"
    })
    editor.session.setMode("ace/mode/java");
    console.log("java selected!");
}



let download=()=>{
  window.print();
}
