import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://chenxpwddqbwihiceftx.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Pjds1LSbL8yMqiSIyK0Tig_at7xwPL2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
