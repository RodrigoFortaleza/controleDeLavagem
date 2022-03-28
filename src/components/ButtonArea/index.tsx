import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';


type Props = {
  onAdd: (item: Item) => void;
}

export const ButtonArea = ({ onAdd }: Props) => {
  const [dataField, setDataField] = useState('');
  const [employeeField, setEmployeeField] = useState('');
  const [carField, setCarField] = useState('');
  const [ownerField, setOwnerField] = useState('');
  const [valueField, setValueField] = useState(0);


  let employeeKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dataField).getTime())) {
      errors.push('Data Inválida!');
    }

    if (!employeeKeys.includes(employeeField)) {
      errors.push('Funcionário inválida!');
    }

    if (carField === '') {
      errors.push('Carro Vazio!');
    }

    if (ownerField === '') {
      errors.push('Proprietário vazio!');
    }

    if (valueField <= 0) {
      errors.push('Valor Inválido');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dataField),
        employee: employeeField,
        car: carField,
        owner: ownerField,
        value: valueField
      });
      clearFields()
    }
  }

  const clearFields = () => {
    setDataField('');
    setEmployeeField('');
    setCarField('');
    setOwnerField('');
    setValueField(0)
  }


  return (
    <C.Container>
      <C.AreaUp>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input>
            <input className='data' type="date" value={dataField} onChange={e => setDataField(e.target.value)} />
          </C.Input>
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>Funcionário</C.InputTitle>
          <C.Select>
            <select value={employeeField} onChange={e => setEmployeeField(e.target.value)}>
              <>
                <option></option>
                {employeeKeys.map((key, index) => (
                  <option key={key} value={employeeKeys[index]}>{categories[key].title}</option>
                ))}
              </>
            </select>
          </C.Select>
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>Veículo</C.InputTitle>
          <C.Input>
            <input type="text" value={carField} onChange={e => setCarField(e.target.value)} />
          </C.Input>
        </C.InputLabel>
      </C.AreaUp>

      <C.AreaDown>
        <C.InputLabel>
          <C.InputTitle>Proprietário</C.InputTitle>
          <C.Input>
            <input type="text" value={ownerField} onChange={e => setOwnerField(e.target.value)} />
          </C.Input>
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input>
            <input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
          </C.Input>
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle></C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.AreaDown>
    </C.Container>
  );
}