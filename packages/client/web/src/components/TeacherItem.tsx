import React from 'react'

import { TeacherItemContainer } from '../styles/components/teacherItem'

export const TeacherItem: React.FC = () => (
  <TeacherItemContainer>
    <header>
      <img src="https://avatars1.githubusercontent.com/u/55103535?s=460&u=c48a07e29847f8a67fa91bd1526199b6bc0c8c25&v=4" />
      <div>
        <strong>Diego Fernandes</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque
      ducimus amet fugiat error suscipit molestias. Quisquam cupiditate
      accusantium culpa a doloremque iusto quis, illo exercitationem asperiores
      dolor sunt eos?
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src="/images/icons/whatsapp.svg" alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </TeacherItemContainer>
)
