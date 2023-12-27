import { Secret } from 'jsonwebtoken'

export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ATLAS_URI: string
      PORT: string
      JWT_SECRET: Secret
      JWT_EXPIRE: string
      SECRET: string
      EXPIRE: string
      MAIL_HOST: string
      MAIL_USER: string
      MAIL_PASS: string
    }
  }
}
