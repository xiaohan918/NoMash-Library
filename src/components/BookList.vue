<template>
  <div>
    <h1>Books with ISBN > 1000</h1>

    <ul>
        <li v-for="book in books" :key="book.id">
        {{ book.name }} (ISBN: {{ book.isbn }})

        <button @click="updateBook(book.id)">
            Update
        </button>

        <button @click="deleteBook(book.id)">
            Delete
        </button>
        </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const books = ref([])

const fetchBooks = async () => {
  try {
    const q = query(
    collection(db, 'books'),
    where('isbn', '>', 1000),
    orderBy('isbn', 'asc'),
    limit(2)
    )

    const querySnapshot = await getDocs(q)

    const booksArray = []

    querySnapshot.forEach((doc) => {
      booksArray.push({
        id: doc.id,
        ...doc.data()
      })
    })

    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books:', error)
  }
}

onMounted(() => {
  fetchBooks()
})

const updateBook = async (id) => {
  try {
    const newName = prompt('Enter new book name:')

    if (!newName) {
      return
    }

    const bookRef = doc(db, 'books', id)

    await updateDoc(bookRef, {
      name: newName
    })

    alert('Book updated successfully!')
    await fetchBooks()
  } catch (error) {
    console.error('Error updating book:', error)
  }
}

const deleteBook = async (id) => {
  try {
    const confirmDelete = confirm('Are you sure you want to delete this book?')

    if (!confirmDelete) {
      return
    }

    const bookRef = doc(db, 'books', id)

    await deleteDoc(bookRef)

    alert('Book deleted successfully!')
    await fetchBooks()
  } catch (error) {
    console.error('Error deleting book:', error)
  }
}
</script>