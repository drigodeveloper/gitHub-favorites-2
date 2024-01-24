import { Container, Owner, Loading, BackButton, IssuesList } from "./styles"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import api from "../../services/api.js"

export function Repositores() {
    const params = useParams();
    const [repositores, setRepositores] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      async function Load() {
        const nameRepo = params.repositores

        const [repositoresData, issuesData] = await Promise.all([
          api.get(`/repos/${nameRepo}`),
          api.get(`/repos/${nameRepo}/issues`, 
          {
            params: {
              state: 'open',
              per_page: 5
            }
          }), 
        ])
        console.log(repositoresData)
        console.log(issuesData)
        setRepositores(repositoresData.data)
        setIssues(issuesData.data)
        setLoading(false)


       }

      Load()
    }, [])

    if(loading) {
      return(
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      )
    }
    return (
      <Container >
        <BackButton to="/">
          <FaArrowLeft/>
        </BackButton>
        <Owner>
          <img src={repositores.owner.avatar_url} alt={repositores.owner.login} />
          <h1>{repositores.name}</h1>
          <p>{repositores.description}</p>
        </Owner>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                  </strong>
                  <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        
        
      </Container>
    )
  }
  
  
  