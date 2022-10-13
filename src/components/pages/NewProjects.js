import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';

import styles from './NewProjects.module.css'

function NewProjects() {

    const Navigate = useNavigate()

    function createPost(project) {

        //intialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(project),
        })
            .then ((resp) => resp.json())
            .then ((data) => {
                console.log(data)
                // redirect
                Navigate('/projects', { state: {message: 'projeto criado com sucesso!'} })
            })
            .catch((err) => console.log(err))
       }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProjects;