import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await login(email, senha)
      }    

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>

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

            <button className='btn btn-primary' disabled={isLoading}>Log In</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default Login;