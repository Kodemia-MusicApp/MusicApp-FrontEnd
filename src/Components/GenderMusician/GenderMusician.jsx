import React from 'react'
import { Form } from 'react-bootstrap'
export const GenderMusician = ({ setUser, user }) => {
    return (
        <Form.Select
            aria-label="Default select example"
            onChange={(e) => setUser({ ...user, genero: e.target.value })}
        >
            <option>Seleccione un Genero</option>
            <option value="Mariachi">Mariachi</option>
            <option value="Ranchera">Ranchera</option>
            <option value="Mayapax">Mayapax</option>
            <option value="Norteña  ">Norteña</option>
            <option
                value="La Banda Sinaloense
"
            >
                La Banda Sinaloense
            </option>
            <option
                value="Rock n’ Roll

"
            >
                Rock n’ Roll
            </option>
        </Form.Select>
    )
}
