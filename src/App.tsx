import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { ButtonArea } from './components/ButtonArea';
import { Footer } from './components/Footer';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].employee].income) {
        incomeCount += filteredList[i].value;
      } else {

      }
    }
    setIncome(incomeCount);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Lavagem de Veículos</C.HeaderText>
      </C.Header>

      <C.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
        />

        <ButtonArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>

      <Footer />

    </C.Container>
  );
}

export default App;