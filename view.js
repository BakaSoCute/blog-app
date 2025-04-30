class View {
    constructor({onNewPost}) {
        this.postsNode = document.getElementById("posts")
        this.titleInputNode = document.getElementById("title")
        this.descriptionInputNode = document.getElementById("description")
        this.btnNode = document.getElementById("button")

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener("click", this.handleBtnClick);
    }

    renderPosts(posts) {
        this.postsNode.innerHTML = "";

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${this._buildDateString(post.timestamp)}</p>
                    <p>${post.title}</p>
                    <p>${post.description}</p>
                </div>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        this.onNewPost(title, description);
    }

    _buildDateString(timestamp) {

        const date = new Date(timestamp)

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.  ${date.getHours()}:${date.getMinutes()}`;
    }
}