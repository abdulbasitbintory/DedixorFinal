'use server'

import { login as authLogin, logout as authLogout } from '@/lib/auth'

export async function loginAction(email: string, password: string) {
  const result = await authLogin(email, password)
  return result
}

export async function logoutAction() {
  await authLogout()
}
