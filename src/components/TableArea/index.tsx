import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';


type Props = {
  list: Item[]
}

export const TableArea = (props: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={150}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={250}>Funcionário</C.TableHeadColumn>
          <C.TableHeadColumn width={200}>Carro</C.TableHeadColumn>
          <C.TableHeadColumn width={200}>Proprietário</C.TableHeadColumn>
          <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn>
        </tr>
      </thead>

      <tbody>
        {props.list.map((i, k) => (
          <TableItem key={k} item={i} />
        ))}
      </tbody>
    </C.Table>
  );
}