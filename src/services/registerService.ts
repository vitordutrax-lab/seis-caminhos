import { supabase } from './supabase'

interface RegisterData {
  nickname: string
  email: string
  password: string
}

export async function register({
  nickname,
  email,
  password,
}: RegisterData) {
  const nicknameLower =
    nickname.toLowerCase()

  const emailLower =
    email.toLowerCase()

  const {
    data: nicknameExists,
  } = await supabase
    .from('profiles')
    .select('id')
    .eq(
      'nickname_lower',
      nicknameLower,
    )
    .maybeSingle()

  if (nicknameExists) {
    return {
      error:
        'Nickname já cadastrado',
    }
  }

  const {
    data: emailExists,
  } = await supabase
    .from('profiles')
    .select('id')
    .eq('email_lower', emailLower)
    .maybeSingle()

  if (emailExists) {
    return {
      error:
        'E-mail já cadastrado',
    }
  }

  const {
    data: authData,
    error: authError,
  } = await supabase.auth.signUp({
    email,
    password,
  })

  if (authError) {
    return {
      error: authError.message,
    }
  }

  const user =
    authData.user

  if (!user) {
    return {
      error:
        'Erro ao criar usuário',
    }
  }

  const { error: profileError } =
  await supabase
    .from('profiles')
    .insert({
      id: user.id,

      nickname,

      nickname_lower:
        nicknameLower,

      email,

      email_lower:
        emailLower,

      avatar:
        '/avatars/avatar.png',
    })

  if (profileError) {
    return {
      error:
        profileError.message,
    }
  }

  return {
    success: true,
  }
}