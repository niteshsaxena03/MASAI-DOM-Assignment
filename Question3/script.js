document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const shoppingList = document.getElementById('shopping-list');

    // Event Listener for adding a new item
    addItemButton.addEventListener('click', () => {
        const itemName = document.getElementById('item-name').value;
        const itemQuantity = document.getElementById('item-quantity').value;

        if (itemName.trim() !== '' && itemQuantity > 0) {
            addItem(itemName, itemQuantity);
        }

        // Clear input fields after adding
        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
    });

    // add a new item to the shopping list
    function addItem(name, quantity) {
        // Create the list item element
        const listItem = document.createElement('li');
        listItem.className = 'shopping-list-item';

        // Create text node for item name and quantity
        const itemText = document.createElement('span');
        itemText.textContent = `${name} - Quantity: ${quantity}`;
        listItem.appendChild(itemText);

        //  Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editItem(listItem, itemText));
        listItem.appendChild(editButton);

        //  Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeItem(listItem));
        listItem.appendChild(removeButton);

        // Append
        shoppingList.appendChild(listItem);
    }

    // edit an existing item
    function editItem(listItem, itemText) {
        const newName = prompt('Enter new item name:', itemText.textContent.split(' - ')[0]);
        const newQuantity = prompt('Enter new quantity:', itemText.textContent.split(': ')[1]);

        if (newName && newQuantity > 0) {
            itemText.textContent = `${newName} - Quantity: ${newQuantity}`;
        }
    }

    // remove an item 
    function removeItem(listItem) {
        shoppingList.removeChild(listItem);
    }
});
