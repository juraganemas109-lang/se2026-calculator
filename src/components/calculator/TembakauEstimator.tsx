'use client';
import React from 'react';

interface TembakauEstimatorProps {
  jenis: 'Pertanian' | 'Prajangan';
  jumlahPohon: string | number;
  setJumlahPohon: (val: string) => void;
  modeTanam: 'Normal' | 'Padat' | 'Renggang';
  setModeTanam: (val: 'Normal' | 'Padat' | 'Renggang') => void;
  jenisTembakau?: 'Sawah' | 'Tegal' | 'Gunung';
  setJenisTembakau?: (val: 'Sawah' | 'Tegal' | 'Gunung') => void;
}

export const TembakauEstimator: React.FC<TembakauEstimatorProps> = ({
  jenis,
  jumlahPohon,
  setJumlahPohon,
  modeTanam,
  setModeTanam,
  jenisTembakau,
  setJenisTembakau
}) => {
  return (
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Jumlah Pohon/Batang (Opsional)</label>
          <input 
            type="number" 
            className="w-full p-2.5 border border-gray-300 rounded-lg"
            value={jumlahPohon} 
            onChange={e => setJumlahPohon(e.target.value)} 
            placeholder="Misal: 1000" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Mode Tanam</label>
          <select 
            className="w-full p-2.5 border border-gray-300 rounded-lg"
            value={modeTanam} 
            onChange={e => setModeTanam(e.target.value as any)}
          >
            <option value="Normal">Normal (Default)</option>
            <option value="Padat">Padat</option>
            <option value="Renggang">Renggang</option>
          </select>
        </div>
        {jenis === 'Prajangan' && setJenisTembakau && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Jenis Tembakau</label>
            <select 
              className="w-full p-2.5 border border-gray-300 rounded-lg"
              value={jenisTembakau} 
              onChange={e => setJenisTembakau(e.target.value as any)}
            >
              <option value="Gunung">Gunung (Rajang)</option>
              <option value="Tegal">Tegal (Rajang)</option>
              <option value="Sawah">Sawah (Rajang)</option>
            </select>
          </div>
        )}
      </div>
      <p className="text-xs text-blue-600 mt-3">
        *Mengisi jumlah pohon akan otomatis mengkalkulasi estimasi luasan dan hasil produksi berdasarkan SOP SE2026.
      </p>
    </div>
  );
};
