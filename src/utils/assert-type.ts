import { AssertionError } from '@blackglory/errors'

// eslint-disable-next-line
export function assertType<T extends true>(message: string): never {
  throw new AssertionError(message)
}
