import Comment from "./Comment.class.mjs";
import Post from "./Post.class.mjs";
import User from "./User.class.mjs";

class DataBase {
  #users;
  #posts;
  #comments;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  get users() {
    return this.#users;
  }

  get posts() {
    return this.#posts;
  }

  get comments() {
    return this.#comments;
  }

  addUser(user) {
    this.#users.push(user);
  }

  addPost(post) {
    this.#posts.push(post);
  }

  addComment(comment) {
    this.#comments.push(comment);
  }

  removeUser(idUser) {
    const index = this.#users.findIndex((element) => element.idUser === idUser);
    this.#users.splice(index, 1);
    this.removeAllPostsByAuthor(idUser);
    this.removeAllCommentsByAuthor(idUser);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
    this.removeAllCommentsByPost(idPost);
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex(
      (element) => element.idComment === idComment
    );
    this.#comments.splice(index, 1);
  }

  //Para remover um único post
  // removePost(idPost) {
  //   const listOfRemovedPost = this.#posts.filter(post => post.idPost !== idPost)
  //   this.#posts = listOfRemovedPost
  //   this.removeAllCommentsByPost(idPost);
  // }

  //Para remover um único comentário
  removeComment(idComment) {
    const listOfRemovedComment = this.#comments.filter(
      (comment) => comment.idComment !== idComment
    );
    this.#comments = listOfRemovedComment;
  }

  //remove todos os posts de um mesmo autor
  removeAllPostsByAuthor(idAuthor) {
    this.#posts.forEach((post) => {
      if (post.idAuthor === idAuthor) {
        this.removeAllCommentsByPost(post.idPost);
      }
    });
    const listOfRemovedPost = this.#posts.filter(
      (posts) => posts.idAuthor !== idAuthor
    );
    this.#posts = listOfRemovedPost;
  }

  //remove todos os comentários de um mesmo autor
  removeAllCommentsByAuthor(idAuthor) {
    const listOfRemovedComment = this.#comments.filter(
      (coment) => coment.idAuthor !== idAuthor
    );
    this.#comments = listOfRemovedComment;
  }

  removeAllCommentsByPost(idPost) {
    const listOfRemovedComment = this.#comments.filter(
      (comment) => comment.idPost !== idPost
    );
    this.#comments = listOfRemovedComment;
  }

  // removeAllPostsByAuthor(idAuthor) {
  //   this.#posts.forEach(post => {
  //     if (post.idAuthor === idAuthor) {
  //       this.removeAllCommentsByPost(post.idPost);
  //       this.removePost(post.idPost);
  //       // this.removeAllPostsByAuthor(idAuthor);
  //     }
  //   });
  // }

  // removeAllCommentsByAuthor(idAuthor) {
  //   this.#comments.forEach(comment => {
  //     if (comment.idAuthor === idAuthor) {
  //       this.removeComment(comment.idComment);
  //       // this.removeAllCommentsByAuthor(idAuthor);
  //     }
  //   });
  // }

  // removeAllCommentsByPost(idPost) {
  //   this.#comments.forEach(comment => {
  //     if (comment.idPost === idPost) {
  //       this.removeComment(comment.idComment);
  //       // this.removeAllCommentsByPost(idPost);
  //     }
  //   });
  // }

  authenticate(email, password) {
    for (let i = 0; i < database.users.length; i++) {
      if (
        email === database.users[i].email &&
        password === database.users[i].password
      ) {
        return console.log(database.users[i]);
      }
      throw Error("Login ou senha incorretos.");
    }
  }

  //editando e update o usuário
  //função não é necessária porque o database já atualiza automaticamente quando a gente atualiza os atributos na class

  // updateUserOnDatabase(user) {
  //   const index = this.#users.findIndex((element) => element.idUser === user.idUser);
  //   this.#users[index] = user;
  //   // const updatedFollowlist = database.#users[index].followList;
  //   // console.log(updatedFollowlist);
  //   // console.log(database.users);
  // }

  // updatePostOnDatabase(post) {
  //   const index = this.#posts.findIndex((element) => element.idPost === post.idPost);
  // }
}

/*=====================FEITO==============================
olhar no banco de dados do usuário o mesmo idUser que estou alterando
retorna um índice (posição) do obejto que estou buscando no array do objeto
me retornando o índice identificar no meu array qual objeto esse indice se refere
ao achar esse objeto alterá-lo e continuará na mesma posição*/

//o problema dessa função é que os atributos estão ficando públicos, não estamos excluindo o usuario anterior e não estamos criando um novo a partir da classe User
//updateUser precisa trazer o qlqr atributo atualizado

const database = new DataBase();
export default database;
