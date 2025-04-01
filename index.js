let post = "";

const titleNote = document.getElementById("post-title");
const inputNote = document.getElementById("post-input");
const buttonNote = document.getElementById("post-button");
const postNode = document.getElementById("post");

buttonNote.addEventListener("click", function() {
    const postFromUser = getPostFromUser();
    setPost(postFromUser);
    renderPost();
});

function getPostFromUser() {
    const post = inputNote.value;
    
    return post;
}

function setPost(newPost) {
    post = newPost;
}
function renderPost() {
    postNode.innerText = post;
}