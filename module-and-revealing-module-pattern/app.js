/* 
(function() {
  // Declare private vars and funcs
  
  return {
    // Declare public vars and funcs
  };
})();
*/

// Standard Module Pattern
/* 
const UICtrl = (function () {
  let text = 'Hello World';
  
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();
*/

// Revealing Module Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add,
    get
  }
})();

ItemCtrl.add({ id: 1, name: 'John' });
