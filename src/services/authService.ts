import { supabase } from './supabase'

interface SignInData {
  email: string
  password: string
}

export async function signIn({
  email,
  password,
}: SignInData) {
  const { error } =
    await supabase.auth.signInWithPassword(
      {
        email,
        password,
      },
    )

  if (error) {
    return {
      error: error.message,
    }
  }

  return {
    success: true,
  }
}

export async function signOut() {
  await supabase.auth.signOut()
}