import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dataFilter';
import { categories } from '../../data/categories';

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.employee].color}>
          {categories[item.employee].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.car}</C.TableColumn>
      <C.TableColumn>{item.owner}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.employee].income ? '#999' : ''}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
}

