import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await signup(email, senha)
      }    

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Cadastrar</h3>

            <label>Endereço de email:</label>
            <input
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            />

            <label>Senha:</label>
            <input
                type="password" 
                onChange={(e) => setSenha(e.target.value)} 
                value={senha} 
            />
            
            <button className='btn btn-primary' disabled={isLoading}>Cadastrar</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default Signup;