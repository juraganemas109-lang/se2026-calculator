import { db } from './firebase';
import { collection, doc, setDoc, getDocs, deleteDoc, query, orderBy } from 'firebase/firestore';
import { BusinessRecord } from '@/utils/calculatorHelper';

export const firestoreService = {
  // Simpan record
  async saveRecord(userId: string, record: BusinessRecord): Promise<void> {
    const userRecordsRef = collection(db, `users/${userId}/records`);
    const recordDoc = doc(userRecordsRef, record.id);
    
    // Save to firestore. Make sure we only save plain objects.
    await setDoc(recordDoc, JSON.parse(JSON.stringify(record)));
  },

  // Ambil semua records untuk seorang user
  async getUserRecords(userId: string): Promise<BusinessRecord[]> {
    const userRecordsRef = collection(db, `users/${userId}/records`);
    
    // We order by timestamp ascending so older records appear first, or timestamp descending. 
    // Wait, BusinessRecord currently uses `id` as string (maybe timestamp string).
    // Let's just fetch all.
    const q = query(userRecordsRef);
    const querySnapshot = await getDocs(q);
    
    const records: BusinessRecord[] = [];
    querySnapshot.forEach((doc) => {
      records.push(doc.data() as BusinessRecord);
    });
    
    // Sort by createdAt descending
    records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return records;
  },

  // Hapus record
  async deleteRecord(userId: string, recordId: string): Promise<void> {
    const userRecordsRef = collection(db, `users/${userId}/records`);
    const recordDoc = doc(userRecordsRef, recordId);
    await deleteDoc(recordDoc);
  }
};
