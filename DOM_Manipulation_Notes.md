
# JavaScript DOM Manipulation Notes

## 🧠 Core Concept: What is the DOM?
DOM (Document Object Model) is a programming interface that represents the structure of HTML or XML documents. JavaScript uses the DOM to dynamically read and manipulate webpage content.

---

## 📁 Repositories & Resources

- 🔗 **Tour of DOM**: [https://github.dev/ProgrammingHero1/tour-of-dom](https://github.dev/ProgrammingHero1/tour-of-dom)
- 🔗 **DOM Events**: [https://github.dev/ProgrammingHero1/dom_events](https://github.dev/ProgrammingHero1/dom_events)
- 🧠 **Chat Summary**: [DOM Manipulation Chat Summary](https://chatgpt.com/c/68510741-644c-8012-843e-85b293a58688)

---

## 🔍 DOM Selection Methods

| Selector                         | Description                                 |
|----------------------------------|---------------------------------------------|
| `getElementById('id')`           | Selects an element by its ID                |
| `getElementsByClassName('class')`| Selects all elements with a class name      |
| `getElementsByTagName('tag')`    | Selects elements by tag name                |
| `querySelector('selector')`      | Selects the first match using CSS selector  |
| `querySelectorAll('selector')`   | Selects all matches (NodeList)              |

---

## ✏️ Reading & Modifying Content

- `.innerText`: Text only (visible content)
- `.innerHTML`: HTML content
- `.value`: Used for form input fields
- `.getAttribute('attr')`: Gets the attribute value
- `.setAttribute('attr', value)`: Sets/updates an attribute
- `.classList.add('className')`, `.remove()`, `.toggle()`

---

## 🛠️ Creating & Appending Elements

```js
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello DOM';
document.body.appendChild(newDiv);
```

- `document.createElement(tag)`
- `element.appendChild(child)`
- `element.removeChild(child)`
- `parentNode.replaceChild(newNode, oldNode)`

---

## 🧩 Event Handling

### 🔸 Common Events:
- `click`, `dblclick`
- `mouseover`, `mouseout`
- `keydown`, `keyup`
- `submit`, `input`, `change`

### 🔸 Attaching Events:

**Inline HTML:**
```html
<button onclick="handleClick()">Click</button>
```

**Via JavaScript (property):**
```js
button.onclick = function () {
  console.log('Clicked!');
};
```

**Via `addEventListener` (recommended):**
```js
button.addEventListener('click', function () {
  console.log('Clicked with listener!');
});
```

---

## 🧠 Advanced Concepts

### 🔹 Event Bubbling & `stopPropagation()`
- Events bubble from child → parent → root.
- Use `event.stopPropagation()` to prevent bubbling.

### 🔹 Event Delegation
- Instead of many handlers, use one on a parent element.
```js
parent.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.innerText);
  }
});
```
- ✅ Efficient for dynamic content.

---

## ✅ Practical Projects (from Repos)

### From [Tour of DOM](https://github.dev/ProgrammingHero1/tour-of-dom):
- Button click to change text/color
- Loop through and style multiple cards
- Create dynamic list items

### From [DOM Events](https://github.dev/ProgrammingHero1/dom_events):
- Comment box with post functionality
- Delete confirmation (like GitHub)
- Input change detection
- Keyboard event handling

---
