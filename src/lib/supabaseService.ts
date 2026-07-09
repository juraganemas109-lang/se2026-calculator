import { supabase } from './supabase';
import { BusinessRecord } from '@/utils/calculatorHelper';

export const supabaseService = {
  // Simpan record
  async saveRecord(userId: string, record: BusinessRecord): Promise<void> {
    const { error } = await supabase
      .from('records')
      .upsert({
        id: record.id,
        user_id: userId,
        created_at: new Date(record.createdAt).toISOString(),
        data: record
      });

    if (error) {
      console.error('Error saving record to Supabase:', error);
      throw error;
    }
  },

  // Ambil semua records untuk seorang user
  async getUserRecords(userId: string): Promise<BusinessRecord[]> {
    const { data, error } = await supabase
      .from('records')
      .select('data')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching records from Supabase:', error);
      throw error;
    }

    if (!data) return [];
    
    // Extract the BusinessRecord from the 'data' JSONB column
    return data.map(row => row.data as BusinessRecord);
  },

  // Hapus record
  async deleteRecord(userId: string, recordId: string): Promise<void> {
    const { error } = await supabase
      .from('records')
      .delete()
      .eq('id', recordId)
      .eq('user_id', userId);

    if (error) {
      console.error('Error deleting record from Supabase:', error);
      throw error;
    }
  }
};
