export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ATLAS_URI: number
      PORT: string
      JWT_SECRET: string
      JWT_EXPIRE: string
    }
  }
}
