<template>
  <div class="hello">
    <button @click="createDocument">Buat Data</button>
    <div v-if="studentData">
      <h2>Data Mahasiswa:</h2>
      <p>Name: {{ studentData.name }}</p>
      <p>NIM: {{ studentData.nim }}</p>
    </div>
  </div>
</template>

<script>
import { addDoc, onSnapshot } from 'firebase/firestore';
import { studentsRef } from '@/firebase';

export default {
  data() {
    return {
      studentData: null,
    };
  },
  methods: {
    async createDocument() {
      const newDocument = { name: "Ahmad Mu'min Faisal", nim: '1203210101' };

      await addDoc(studentsRef, newDocument);
    },
    setupFirestoreListener() {
      onSnapshot(studentsRef, (querySnapshot) => {
        const retrievedData = querySnapshot.docs[0]?.data();
        this.studentData = retrievedData;
      });
    },
  },
  mounted() {
    this.setupFirestoreListener();
  },
};
</script>

<style scoped>
button {
  background-color: #42b983;
  border-width: 0;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: bold;
  color: white;
}
</style>
