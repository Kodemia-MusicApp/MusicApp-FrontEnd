import React from 'react'
import Municipios from '../../Utils/estados-municipios.json'
import { Form } from 'react-bootstrap'

export const MunicipalitySelect = ({ setEstado, estado }) => {
    const nameState = estado.estado.toLowerCase()
    function toLowerKeys(obj) {
        return Object.keys(obj).reduce((accumulator, key) => {
            accumulator[key.toLowerCase()] = obj[key]
            return accumulator
        }, {})
    }
    const municipios = toLowerKeys(Municipios)

    return (
        <>
            <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                    setEstado({ ...estado, municipality: e.target.value })
                }
            >
                <option>Seleccione un estado</option>
                {municipios[`${nameState}`].map((municipality) => {
                    return <option value={municipality}>{municipality}</option>
                })}
            </Form.Select>
        </>
    )
}
