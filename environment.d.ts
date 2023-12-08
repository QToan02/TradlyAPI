export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ATLAS_URI: string
      PORT: string
      JWT_SECRET: string
      JWT_EXPIRE: string
    }
  }
}
