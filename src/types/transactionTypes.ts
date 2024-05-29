/**
 * Represents a transaction.
 */
export interface Transaction {
  /**
   * Unique identifier for the transaction
   */
  readonly id: number

  /**
   * Title or description of the transaction
   */
  readonly title: string

  /**
   * Amount of the transaction
   */
  readonly amount: number
}
