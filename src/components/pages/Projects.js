import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import Loading from "../layout/Loading";

import ProjectCard from "../project/ProjectCard";

import styles from './Projects.module.css';

function Projects() {
    const [projects, setProjects] = useState([])
    const [removLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')


    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {

       setTimeout(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(resp => resp.json())
            .then((data) => {
                setProjects(data)
                console.log(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
       }, 500);
    }, [])

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then (() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/NewProjects' text='Criar Projeto'/>
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>(
                        <ProjectCard
                        name={project.name}
                        id={project.id}  
                        budget={project.budget}
                        category={project?.category?.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                    ))}
                    {!removLoading && <Loading />}
                    {removLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados</p>
                    )}
            </Container>
        </div>
    )
}

export default Projects;