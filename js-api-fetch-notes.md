
# JavaScript Learning Notes

## API Concept and Usage  
[View Full Conversation](https://chatgpt.com/c/676036f5-efb4-8012-8efc-65c0992437bc)

## JS Async/Await Concept  
[View Full Conversation](https://chatgpt.com/c/6763c47a-f574-8012-8e1b-b30a60305bd3)

---

### ✅ `fetch(url)` → একটি Promise রিটার্ন করে

`fetch(url)` মানে হলো ওই URL-এ **GET রিকোয়েস্ট** পাঠাও।

- এটি সাথে সাথেই ডেটা দেয় না — এটি একটি **Promise** রিটার্ন করে।
- **Promise মানে:**  
  _“আমি ডেটা আনতে গেছি, পরে ডেটা পেলে তোমাকে জানাবো।”_

📌 **কাজ:**  
```
fetch(url)
  ➤ API-তে রিকোয়েস্ট পাঠায়
  ➤ যখন উত্তর আসে, তখন .then() দিয়ে সেটা ধরা হয়
```

---

### ✅ `.then(response => response.json())` → রেসপন্সকে JSON বানায়

- `.then(...)` তখন চলে, যখন `fetch()` সফলভাবে কাজ করে এবং response ফেরত দেয়।
- কিন্তু সেই `response` হলো একটা **raw (কাঁচা)** HTTP রেসপন্স — তুমি ডেটা সরাসরি পাবে না।
- তাই `response.json()` কল করে সেই রেসপন্সকে **JSON ডেটায় কনভার্ট** করতে হয়।

📌 **কাজ:**
```js
.then(response => response.json())
// সার্ভার থেকে পাওয়া রেসপন্স কে .json() দিয়ে Promise আকারে JSON বানায়
```

---

### ✅ `.then(json => console.log(json))` → ডেটা দেখায়

- এখানে `.then(...)` দিয়ে যখন JSON ডেটা পাওয়া যায়, তখন সেটা **console-এ দেখানো হয়।**

📌 **কাজ:**
```js
.then(json => console.log(json))
// JSON ডেটা কনসোলে প্রদর্শন করে
```

---

### 🧾 পুরো কোডটি সংক্ষেপে:

```js
function loadData() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}
```
