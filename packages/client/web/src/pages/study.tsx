import React from 'react'

import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { TeacherItem } from 'src/components/TeacherItem'

import { PageHeader } from '../components/PageHeader'
import { PageTeacherList, SearchTeachersForm } from '../styles/pages/study'

const TeacherList: React.FC = () => {
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
          />
          <Input type="time" name="hour" label="Hora" />
        </SearchTeachersForm>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </PageTeacherList>
  )
}

export default TeacherList
