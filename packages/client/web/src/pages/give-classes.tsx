import { useRouter } from 'next/dist/client/router'
import React, { useState, FormEvent, ChangeEvent } from 'react'

import Input from 'src/components/Input'
import Select from 'src/components/Select'
import Textarea from 'src/components/Textarea'
import api from 'src/services/api'

import { PageHeader } from '../components/PageHeader'
import { PageTeacherForm, ScheduleItem } from '../styles/pages/giveClasses'

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { weekDay: 0, from: '', to: '' }
  ])

  const router = useRouter()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { weekDay: 0, from: '', to: '' }])
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()

    api
      .post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      .then(() => {
        alert('Cadastro realizado!')
        router.push('/')
      })
      .catch(() => {
        alert('Erro no cadastro')
      })
  }

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            name="name"
            label="Nome completo"
          />
          <Input
            value={avatar}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAvatar(e.target.value)
            }
            name="avatar"
            label="Avatar"
          />
          <Input
            value={whatsapp}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWhatsapp(e.target.value)
            }
            name="whatsapp"
            label="Whatsapp"
          />
          <Textarea
            value={bio}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setBio(e.target.value)
            }
            name="bio"
            label="Biografia"
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            value={subject}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSubject(e.target.value)
            }}
            options={[
              { label: 'Artes', value: 'Artes' },
              { label: 'Biologia', value: 'Biologia' },
              { label: 'Ciências', value: 'Ciências' },
              { label: 'Educação Física', value: 'Educação Física' },
              { label: 'Física', value: 'Física' },
              { label: 'Geografia', value: 'Geografia' },
              { label: 'História', value: 'História' },
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Química', value: 'Química' },
              { label: 'Português', value: 'Português' }
            ]}
            name="subject"
            label="Matéria"
          />
          <Input
            name="cost"
            value={cost}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCost(e.target.value)
            }}
            label="Custo da sua hora pro aula"
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => (
            <ScheduleItem key={scheduleItem.weekDay}>
              <Select
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' }
                ]}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setScheduleItemValue(index, 'weekDay', e.target.value)
                }
                value={scheduleItem.weekDay}
                name="week-day"
                label="Dia da semana"
              />
              <Input
                name="from"
                type="time"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setScheduleItemValue(index, 'from', e.target.value)
                }
                value={scheduleItem.from}
                label="Das"
              />
              <Input
                name="to"
                type="time"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setScheduleItemValue(index, 'to', e.target.value)
                }
                value={scheduleItem.to}
                label="Até"
              />
            </ScheduleItem>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src="/images/icons/warning.svg" alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button" onClick={handleCreateClass}>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </PageTeacherForm>
  )
}

export default TeacherForm
