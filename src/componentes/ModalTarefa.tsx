"use client";

import React, { useState } from 'react';

interface ModalTarefaProps {
    onClose: () => void;
    onAddTarefa: (titulo: string) => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ onClose, onAddTarefa }) => {
    const [tituloTarefa, setTituloTarefa] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (tituloTarefa.trim()) {
            onAddTarefa(tituloTarefa);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                <h2 className="text-2xl font-bold mb-4">Nova Tarefa</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={tituloTarefa}
                        onChange={(e) => setTituloTarefa(e.target.value)}
                        placeholder="Digite o título da tarefa"
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalTarefa;
