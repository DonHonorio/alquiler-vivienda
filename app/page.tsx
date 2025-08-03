import { Metadata } from 'next'
import Tabla from './components/tabla-users'

export const metadata: Metadata = {
  title: 'Propiedades del Alojamiento',
  description: 'Tabla con todas las propiedades del modelo Alojamiento',
}

export default function Home() {
  
  return (
    <Tabla />
  )
}
