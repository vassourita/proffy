import React from 'react'

import { TeacherItem } from 'src/components/TeacherItem'

import { PageHeader } from '../components/PageHeader'
import {
  PageTeacherList,
  InputBlock,
  SearchTeachersForm
} from '../styles/pages/study'

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachersForm>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="hour">Hora</label>
            <input type="text" id="hour" />
          </InputBlock>
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
