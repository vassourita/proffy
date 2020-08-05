export interface IConnectionRepository {
  count(): Promise<number>
  create(userId: string): Promise<void>
}
