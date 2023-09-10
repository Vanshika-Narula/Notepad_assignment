const textContent = document.querySelector("textarea");
const SaveButton = document.querySelector(".save");
const DeleteButton =  document.querySelector(".delete");

const Content ="";

SaveButton.addEventListener("click",function(){
    localStorage.setItem(Content,textContent.value);
    alert("Text Saved Successfully!!");
});


DeleteButton.addEventListener("click",function(){
    localStorage.removeItem(Content);
    textContent.value="";
    alert("Are you sure you want to delete the text ?");

});

textContent.value = localStorage.getItem(Content);