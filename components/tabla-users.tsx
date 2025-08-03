'use client'

import { PropiedadesAlojamiento } from '@/lib/types';
import React from 'react';
import { useState, useEffect } from 'react';

const Tabla = () => {

    const [propiedadesAlojamiento, setPropiedadesAlojamiento] = useState<PropiedadesAlojamiento[]>([]);
    const [cargandoPropiedades, setCargandoPropiedades] = useState(true);
    const [errorPropiedades, setErrorPropiedades] = useState<string | null>(null);

    useEffect(() => {
        const obtenerPropiedades = async () => {
            try {
                setCargandoPropiedades(true);
                const respuesta = await fetch('/api/users');
                if (!respuesta.ok) {
                    throw new Error('Error al obtener las propiedades de alojamiento');
                }
                const datos = await respuesta.json();
                setPropiedadesAlojamiento(datos);

                console.log('Obteniendo datos desde api-users: ', datos)
            } catch (error) {
                if (error instanceof Error) {
                    setErrorPropiedades(error.message)
                } {
                    setErrorPropiedades('Error desconocido')
                }
            } finally {
                setCargandoPropiedades(false);
            }
        };

        obtenerPropiedades();
    }, []);

    return (
        < div className="min-h-screen bg-gray-50 py-8" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Propiedades del Modelo Alojamiento
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Tabla completa con todas las propiedades definidas en el esquema Prisma
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Propiedad
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tipo
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Descripción
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Características
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ejemplo
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {propiedadesAlojamiento.map((propiedad, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {propiedad.nombre}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                {propiedad.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {propiedad.descripcion}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600">
                                                {propiedad.capacidad}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600 font-mono">
                                                {propiedad.imagen}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                            <p className="font-medium">Información adicional:</p>
                            <ul className="mt-2 list-disc list-inside space-y-1">
                                <li>El modelo <code className="bg-gray-200 px-1 rounded">Alojamiento</code> tiene una relación uno a muchos con <code className="bg-gray-200 px-1 rounded">Reserva</code></li>
                                <li>Los campos <code className="bg-gray-200 px-1 rounded">id</code> y <code className="bg-gray-200 px-1 rounded">createdAt</code> se generan automáticamente</li>
                                <li>El campo <code className="bg-gray-200 px-1 rounded">imagenes</code> es un array que puede contener múltiples URLs</li>
                                <li>El campo <code className="bg-gray-200 px-1 rounded">reservas</code> es una relación que conecta con el modelo Reserva</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Tabla;