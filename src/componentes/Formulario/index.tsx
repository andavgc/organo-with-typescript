import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'
import { IColaborador } from '../../shared/interfaces/IColaborador'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]

}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome,cargo,imagem,time, data})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setData('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterar={valor => setNome(valor)}/>
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterar={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterar={valor => setImagem(valor)}/>
                <CampoTexto label='Data de entrada no time' placeholder='' valor={data} aoAlterar={valor => setData(valor)} tipo="date" />
                <ListaSuspensa required={true} label="Time" itens={props.times} valor={time} aoAlterar={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario