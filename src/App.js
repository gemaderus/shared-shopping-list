import React from 'react';
import ShoppingList from './components/item/ShoppingList';
import AddItem from './components/AddItems';

function App() {
  return (
    <section className="shopping-list-wrapper">
      <AddItem/>
      <ShoppingList/>
    </section>
  );
}

export default App;
