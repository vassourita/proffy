export interface IConnectionRepository {
  count(): Promise<number>
  create(userId: number): Promise<void>
}
