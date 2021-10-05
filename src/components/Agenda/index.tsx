import { auth } from "@/config/firebase/client";

const Agenda = () => {
  const logout = () => {
    auth.signOut();
  }
  return (
    <div>
      Página destinada à reserva de horários
      <button onClick={logout}>
        Sair
      </button>
    </div>
  )
}

export default Agenda;