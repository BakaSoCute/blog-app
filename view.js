class View {
    constructor({onNewPost}) {
        this.postsNode = document.getElementById("posts")
        this.titleInputNode = document.getElementById("title")
        this.bodyInputNode = document.getElementById("body")
        this.btnNode = document.getElementById("button")
        this.errorNode = document.getElementById("error")

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener("click", this.handleBtnClick);
    }

    render(posts, isError) {
        this.postsNode.innerHTML = "";
        this.errorNode.innerText = "";

        if (isError) {
            this.errorNode.innerText = "Ошибка ввода"
        }

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${this._buildDateString(post.timestamp)}</p>
                    <p>${post.title}</p>
                    <p>${post.body}</p>
                </div>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body);
    }

    _buildDateString(timestamp) {

        const date = new Date(timestamp)

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.  ${date.getHours()}:${date.getMinutes()}`;
    }
}