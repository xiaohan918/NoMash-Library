// import './assets/main.css'
// import '@/assets/style.css'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
const firebaseConfig = {
  apiKey: "AIzaSyDzIzv1u7bO4PC0PU4ylKaU-b9cejgQeQA",
  authDomain: "fit5032-8c686.firebaseapp.com",
  projectId: "fit5032-8c686",
  storageBucket: "fit5032-8c686.firebasestorage.app",
  messagingSenderId: "406708988156",
  appId: "1:406708988156:web:e5aa7e5d55c963620b8f79"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db