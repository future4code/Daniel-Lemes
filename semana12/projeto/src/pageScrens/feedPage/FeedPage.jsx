//import { useHistory } from "react-router-dom";
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardFeedPage from './CardFeedPage';
import { Div , DivMaterial} from './styled';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import {useForm} from "../../hooks/useForm"


function FeedPage() {
   const [posts, setPosts] = useState([]);
  //  const [details, setDetails] = useState("")
  const { form, onChange, resetState } = useForm({ text: ""})
  const handleInputChange = (event) => {
      const { name, value } = event.target;
      onChange(name, value);
      
  };
   const history = useHistory();

  const handleCreatePost = (event) => {
      event.preventDefault()
      resetState()
      const body = {
          text: form.text,
         title: form.title,
      };
      axios
          .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
          .then((response) => {
              console.log("caiu aki no create poste, até que enfim???", response.data)
              
          })
          .catch((err) => {
              console.log("nãooooooo create post", err);
          });
  };




  const handleCreateComent = (postId) => {
    //  event.preventDefault()
    //  resetState()
    const body = {
        text: form.text,
       
    };
    axios
    
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/comment`, body, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then((response) => {
            console.log("caiu aki no create comente, até que enfim???", response.data)
            handleFeedPage()
        })
        .catch((err) => {
            console.log("nãooooooo create coment", err);
        });
};













    
 const {postId} = useParams()
  const handleVote = () => {

    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log("caiu aki nesse Vote???", response.data)
        // setDetails(response.data)
        

      })
      .catch((err) => {
        console.log("Erro caiu no Vote", err);
      });
  };

 





  const handleFeedPage = () => {

    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log("caiu aki nesse FeedPage???", response.data)
        setPosts(response.data.posts)
        

      })
      .catch((err) => {
        console.log("hummmm caiu aki", err);
      });
  };

  useEffect(() => {

    // handleFeedPage()

  }, [])
  return (
    <Div>
 
      <DivMaterial>
        <TextField
         value={form.text}
         name={'text'}
         onChange={handleInputChange}
         label={"Digite seu Post Aki!!"}
         variant={'outlined'}
         type={'text'}
         fullWidth
         required
         autoFocus
         margin={'normal'}
         id="outlined-basic" />
          <TextField
         value={form.title}
         name={'title'}
         onChange={handleInputChange}
         label={"Digite seu Post Aki!!"}
         variant={'outlined'}
         type={'text'}
         fullWidth
         required
         autoFocus
         margin={'normal'}
         id="outlined-basic" />
        <Button 
         onClick={handleCreatePost}
          size="medium" 
          variant="contained" 
          color="primary">Postar
          </Button>
      </DivMaterial>
      <DivMaterial>
      <TextField
         value={form.text1}
         name={'title'}
         onChange={handleInputChange}
         label={"Digite seu Post Aki!!"}
         variant={'outlined'}
         type={'text'}
         fullWidth
         required
         autoFocus
         margin={'normal'}
         id="outlined-basic" />
         <Button 
         onClick={handleCreateComent}
          size="medium" 
          variant="contained" 
          color="primary">Postar
          </Button>
      </DivMaterial>

  
      {posts.map((item) => {
        return (
            <CardFeedPage 
            onClick = {() => handleVote(item.postId) }

          key={item.postId}
          titulo={item.title}
          texto={item.text}
          name = {item.username}
          user = {item.userVoteDirection}
          comentario = {item.commentsCount}
          vote = {item.votesCount}
          
          />
         
        )
      })
      } 
     
          {/* {details.map((ite) => {
            return(
              <div>

                <p>{ite.coments}</p>
              </div>
            )
          })}   */}
    </Div>
  );
}
export default FeedPage;