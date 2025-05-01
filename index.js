const controller = new Controller();

controller.init();



































































// const posts = [];

// const postTextInputNode = document.getElementById("post_input_text")
// const inputNote = document.getElementById("post-input");
// const buttonNote = document.getElementById("post-button");
// const postNode = document.getElementById("post");
// const ErorText = document.getElementById("error")


// buttonNote.addEventListener("click", function() {
//     const postFromUser = getPostFromUser();
//     let eror = ErorText;
//     const titleLengthError = 10;
//     const textLengthError = 20;

//     if (postFromUser.title === "") {
//         eror.innerHTML = "введите название"
//         return
//     }
//     if (postFromUser.text === "") {
//         eror.innerHTML = "введите текст"
//         return
//     }
//     if (postFromUser.title.length > titleLengthError) {
//         eror.innerHTML = "длина названия не может превышать 100 символов"
//         return
//     }
//     if (postFromUser.text.length > textLengthError) {
//         eror.innerHTML = "длина текста не может превышать 100 символов"
//         return
//     }
//     eror.innerHTML = "";
//     addPost(postFromUser);
//     renderPosts();
// });


// function getPostFromUser() {
//     const title = inputNote.value;
//     const text = postTextInputNode.value;
//     const date = new Date().toLocaleString();
    
//     return {
//         title: title,
//         text: text,
//         date: date
//     };
// }

// function addPost({title, text, date}) {
//     posts.push({
//         title,
//         text,
//         date
//     });
// }
// function getPosts() {
//     return posts;
// }
// function renderPosts() {
//     const posts = getPosts();
//     let postsHTML = "";
//     posts.forEach(post => {
//         postsHTML += `
//             <div class="post">
//             <p class="post__title">${post.title}</p>
//             <p class="post__text">${post.text}</p>
//             <p class="post__date">${post.date}</p>
//             </div>
//         `;
//     });
//     postNode.innerHTML = postsHTML;
// }