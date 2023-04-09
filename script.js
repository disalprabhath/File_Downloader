const fileInput=document.querySelector("input"),
downloadBtn=document.querySelector("button");

downloadBtn.addEventListener("click", e=> {
    e.preventDefault();
    fetchFile(fileInput.value);
});

function fetchFile(url){
    //respons as blob
    fetch(url).then(res=> res.blob()).then(file =>{
        //create a url of passed object
        let tempUrl=URL.createObjectURL(file);
        let aTag=document.createElement("a");
        aTag.href=tempUrl;
        //change name url last tail prt
        aTag.download=url.replace(/^.*[\\\/]/,'');;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    });
}
