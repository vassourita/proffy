import React from 'react'

import api from 'src/services/api'

import { TeacherItemContainer } from '../styles/components/teacherItem'

export interface Teacher {
  id: number
  avatar: string
  bio: string
  cost: number
  name: string
  subject: string
  whatsapp: number
}

interface TeacherItemProps {
  teacher: Teacher
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      userId: teacher.id
    })
  }
  return (
    <TeacherItemContainer>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}?text=Olá`}
        >
          <img src="/images/icons/whatsapp.svg" alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </TeacherItemContainer>
  )
}
