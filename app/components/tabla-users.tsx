'use client'

import React from 'react';
import { useState, useEffect } from 'react';

const Tabla = () => {

    const [propiedadesAlojamiento, setPropiedadesAlojamiento] = useState<any[]>([]);
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
            } catch (error: any) {
                setErrorPropiedades(error.message || 'Error desconocido');
            } finally {
                setCargandoPropiedades(false);
            }
        };

        obtenerPropiedades();
    }, []);

    // const propiedadesAlojamiento = [
    //     {
    //         nombre: 'id',
    //         tipo: 'Int',
    //         descripcion: 'Identificador único del alojamiento',
    //         caracteristicas: 'Clave primaria, autoincremental',
    //         ejemplo: '1, 2, 3...'
    //     },
    //     {
    //         nombre: 'nombre',
    //         tipo: 'String',
    //         descripcion: 'Nombre del alojamiento',
    //         caracteristicas: 'Campo de texto obligatorio',
    //         ejemplo: '"Casa de playa", "Apartamento céntrico"'
    //     },
    //     {
    //         nombre: 'descripcion',
    //         tipo: 'String',
    //         descripcion: 'Descripción detallada del alojamiento',
    //         caracteristicas: 'Campo de texto obligatorio',
    //         ejemplo: '"Hermosa casa con vistas al mar..."'
    //     },
    //     {
    //         nombre: 'precio',
    //         tipo: 'Float',
    //         descripcion: 'Precio por noche del alojamiento',
    //         caracteristicas: 'Número decimal',
    //         ejemplo: '150.50, 200.00'
    //     },
    //     {
    //         nombre: 'capacidad',
    //         tipo: 'Int',
    //         descripcion: 'Número máximo de personas que puede alojar',
    //         caracteristicas: 'Número entero',
    //         ejemplo: '4, 6, 8'
    //     },
    //     {
    //         nombre: 'imagenes',
    //         tipo: 'String[]',
    //         descripcion: 'Array de URLs de las imágenes del alojamiento',
    //         caracteristicas: 'Array de strings',
    //         ejemplo: '["url1.jpg", "url2.jpg"]'
    //     },
    //     {
    //         nombre: 'reservas',
    //         tipo: 'Reserva[]',
    //         descripcion: 'Relación con las reservas del alojamiento',
    //         caracteristicas: 'Relación uno a muchos',
    //         ejemplo: 'Array de objetos Reserva'
    //     },
    //     {
    //         nombre: 'createdAt',
    //         tipo: 'DateTime',
    //         descripcion: 'Fecha y hora de creación del registro',
    //         caracteristicas: 'Fecha automática al crear',
    //         ejemplo: '2024-01-15T10:30:00Z'
    //     }
    // ]

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
                                                {/* {propiedad.id} */}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {propiedad.descripcion}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600">
                                                {/* {propiedad.capacidad} */}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600 font-mono">
                                                {/* {propiedad.imagenes} */}
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