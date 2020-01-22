// const post = {
//   title: "The blue sky",
//   body: "One day",
//   author: "Lidia O.",
//   views: 1452,
//   comments: [
//     {author: "Matheus",body: "My opinion"}
//     {author: "Juliana",body: "My opinion"}
// ],
//   isLIve: false
// }


let post = new Post("a", "b", "c")
console.log(post)

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLIve = false
}