import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    required?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterar, label, placeholder, valor, required=false, tipo='text' }: CampoTextoProps) => {

    

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value)

    }

    return (
        <div className="campo-texto" >
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitar} 
                required={required} 
                placeholder={placeholder}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto