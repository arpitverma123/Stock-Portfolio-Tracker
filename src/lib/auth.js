import { supabase } from './supabase';

export async function signUp(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return { data };
  } catch (error) {
    console.error('Sign Up Error:', error.message);
    return { error };
  }
}

export async function signIn(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return { data };
  } catch (error) {
    console.error('Sign In Error:', error.message);
    return { error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Sign Out Error:', error.message);
    return { error };
  }
}

export function getUser() {
  try {
    return supabase.auth.getUser();
  } catch (error) {
    console.error('Get User Error:', error.message);
    return { error };
  }
}
