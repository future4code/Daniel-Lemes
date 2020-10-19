import React, { useState, useEffect } from "react";
import "./App.css";
import { Post } from "./components/Post";
const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputMsg, setInputMsg] = useState (false)
  const onChangeInput = event => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    noMessagens()
    quantidadePosts()
  }, []);
  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };
    const newPostsList = [newPost, ...postsList];
    if (newPost.text === ""){
    setInputMsg(true); }
    else if (newPost.text !== "") {
      setInputMsg(false)
      setPostsList(newPostsList);
    }
    setInputValue("")
  };
  const noMessagens = () => {
    if (!postsList.length) {
      return <p>Nenhuma mensagem a ser exibida</p>
    }
  }
  const quantidadePosts = () => { 
    if (postsList.length > 0) {
      const quantidade = postsList.length
      return <p>Quantidade de posts: {quantidade}</p>
    }
  }
  const mensagemVazia = () => {
    if(inputValue === "") {
      console.log("deu if")
      return <p>Não é possivel criar uma mensagem vazia</p>
    }
  }
  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });
    setPostsList(newPostsList);
  };
  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });
    setPostsList(newPostsList);
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {inputMsg === false  && postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
      {noMessagens()}
      {quantidadePosts()}
      {inputMsg === true  && ( 
        <div>
          <p>Por favor crie um Post Primeiro</p>
          </div>
      )}
    </div>
  );
};
export default App;