export class ClassWithUser {
  id: number
  subject: string
  cost: string

  userId: string
  name: string
  avatar: string
  whatsapp: string
  bio: string

  constructor(data: Partial<ClassWithUser>) {
    Object.assign(this, data)
  }
}
