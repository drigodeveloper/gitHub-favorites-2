import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";

import { FaGithub, FaPlus, FaBars, FaTrash } from "react-icons/fa";

import api from "../../services/api"


export function Home() {

  const [newRepo, setNewRepo] = useState("");
  const [repositores, setRepositores] = useState([]);
  

  async function handleSubmit(event) {
    event.preventDefault()

    if(newRepo === "") {
      alert("Você precisa indicar um repositório!")
      return
    }
    
    const response = await api.get(`/repos/${newRepo}`);

    const hasRepo = repositores.find(repo => repo.name == newRepo)

    if(hasRepo) {
      alert("Você ja incluiu esse repositório!")
      return
    }

    const data = {
      name: response.data.full_name,
    }
    
    try{
      setRepositores([...repositores, data])
      setNewRepo("")
    }catch(error) {
      console.log(error)
    }
  }

  function handleDeleteRepo(item) {
    setRepositores(repositores => repositores.filter(repo => repo.name !== item.name));
   
  }

  
  useEffect(() => {
    localStorage.setItem('@repos', JSON.stringify(repositores))
  }, [repositores])
  
  
  useEffect(() => {
    const repoStorage = localStorage.getItem('@repos')
    if(repoStorage) {
      setRepositores(JSON.parse(repoStorage))
    }
  }, [])
  
  return (
    <Container>
      <h1> 
      <FaGithub size={25}/>
      Meus Repositorios
      </h1>

      <Form>
        <input 
        type="text" 
        placeholder="Adcionar repositórios"
        value={newRepo}
        onChange={(event) => setNewRepo(event.target.value)}
        />

        <SubmitButton onClick={handleSubmit}>
          <FaPlus size={14}/>
        </SubmitButton>
      </Form>


      <List>

        {repositores.map( repo => (
          <li key={repo.name}>
            <span> <DeleteButton onClick={() => {handleDeleteRepo(repo)}}> <FaTrash size={14}/> </DeleteButton> {repo.name}</span>
            <Link to={`/repositores/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20}/>
            </Link>
          </li>

          ))}

      </List>
    </Container>

    
  )
}


