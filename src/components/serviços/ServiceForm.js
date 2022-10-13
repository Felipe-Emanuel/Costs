import {useState} from 'react'

import Input from '../Form/Input'
import SubmitButton from '../Form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState ({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChancge(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChancge}
            />
            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChancge}
            />
            <Input
                type='text'
                text='descição do serviço'
                name='description'
                placeholder='Escreva o serviço'
                handleOnChange={handleChancge}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm