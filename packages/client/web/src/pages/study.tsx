import React, { useState, useEffect } from 'react'

import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { TeacherItem, Teacher } from 'src/components/TeacherItem'
import api from 'src/services/api'

import { PageHeader } from '../components/PageHeader'
import { PageTeacherList, SearchTeachersForm } from '../styles/pages/study'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers() {
    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day: weekDay,
          time
        }
      })

      setTeachers(response.data)
    } catch (error) {}
  }

  useEffect(() => {
    if (subject && weekDay && time) {
      searchTeachers()
    }
  }, [subject, weekDay, time])

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachersForm>
          <Select
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
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
          />

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
            name="week-day"
            label="Dia da semana"
            value={weekDay}
            onChange={e => {
              setWeekDay(e.target.value)
            }}
          />
          <Input
            type="time"
            name="hour"
            label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />
        </SearchTeachersForm>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </PageTeacherList>
  )
}

export default TeacherList
