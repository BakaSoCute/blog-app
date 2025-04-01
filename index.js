let postTitle = "";

const titleNote = document.getElementById("post-title");
const inputNote = document.getElementById("post-input");
const buttonNote = document.getElementById("post-button");
const postNode = document.getElementById("post");

buttonNote.addEventListener("click", function() {
    const postTitle = inputNote.value;
    postNode.innerText = postTitle;
    console.log(postTitle);
});