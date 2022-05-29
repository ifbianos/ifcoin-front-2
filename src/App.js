import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/*Tiringa*/}
        <Link to="/entrar">Login</Link> <br/>
        <Link to="/cadastrar">Cadastro</Link> <br/>
        <Link to="/recuperar_senha">Recuperar senha</Link> <br/>
        <Link to="/alterar_senha">Alterar senha</Link><br/>
        {/*Sheoreka*/}
        <Link to="/tela_inicial">Tela inicial</Link><br/>
        <Link to="/perfil">Painel de usuario</Link><br/>
        <Link to="/atualizar_perfil">Gestao de dados pessoais</Link><br/>
        {/*Colirio*/}
        <Link to="/cadastrar_evento">Cadastro de eventos</Link><br/>
        <Link to="/inscricoes">Gestao de inscrições</Link><br/>
        {/*Tosta*/}
        <Link to="/recompensas">Gestao de recompensas</Link><br/>
        {/*Monique*/}
        <Link to="/carteira">Gestao de moedas</Link><br/>
      </nav>
    </div>
  );
}

export default App;
