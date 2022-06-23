import * as React from 'react'
import Estados from '../../Utils/estados.json'
import { Form } from 'react-bootstrap'

export const StatesSelect = ({ setEstado }) => {
    return (
        <>
            <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                    setEstado({ estado: e.target.value, municipality: '' })
                }
            >
                <option>Seleccione un estado</option>

                {Estados.map((estado) => {
                    return (
                        <option value={estado.nombre}>{estado.nombre}</option>
                    )
                })}
            </Form.Select>
        </>
    )
}
