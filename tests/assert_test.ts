import { a } from './A'

Feature('Example async')

Scenario('Async test', async (I) => {
  const val = await Promise.resolve(1)
  if (val !== 2) throw new Error('Not 1')
})
