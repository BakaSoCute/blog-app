class Model {
    constructor({onPostsChanged}) {
        this.posts = [];
        this.onPostsChanged = onPostsChanged;
    }
    addPost (title, description) {
        this.posts.push({
            title,
            description
        })

        this.onPostsChanged(this.posts)
    }
    getPosts() {
        return this.posts;
    }
}