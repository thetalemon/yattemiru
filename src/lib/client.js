import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'yattemiru',
  apiKey: process.env.API_KEY,
})
