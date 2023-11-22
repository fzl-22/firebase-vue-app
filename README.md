# Tugas 1 - Pemrograman Berbasis Antarmuka

| Nama | Ahmad Mu'min Faisal |
| -- | -- |
| NIM | 1203210101 |
| Kelas | IF-01-03 |
| URL Github | https://github.com/fzl-22/firebase-vue-app |

## 1 Firebase

![](./assets/logo/logo-standard.svg)

Firebase merupakan salah satu produk dari Google yang memberikan layanan *Backend-as-a-Service* (BaaS) kepada pengembang perangkat lunak. Produk ini menyediakan berbagai layanan hosting backend; seperti autentikasi, database realtime, penyimpanan cloud, konfigurasi jarak jauh, dan masih banyak lagi.

## 2 Membuat Akun Firebase

Akun Firebase secara otomatis terhubung dengan email yang dimiliki pengguna, sehingga tidak perlu lagi membuat akun Firebase. Untuk pengguna baru, langsung saja kunjungi [firebase.google.com](https://firebase.google.com/), kemudian klik **Go to Console** di pojok kanan atas.

![](./assets/screenshots/firebase.google.com.png)

Pengguna juga bisa langsung mengunjungi [console.firebase.google.com](https://console.firebase.google.com). Kemudian, pengguna baru akan disuguhkan dengan tampilan berikut.

![](./assets/screenshots/console.firebase.google.com.png)

Dengan ini, Firebase siap untuk digunakan.

## 3 Membuat Project di Firebase

Di halaman [console.firebase.google.com](https://console.firebase/google.com), klik tombol **Create a project**. Kemudian, berikan nama project. Project ini akan diberi nama `firebase-vue-project`. Setelah itu, centang semua checkbox. Klik **Continue**.

![](./assets/screenshots/create-project-1.png)

Kemudian, nonaktifkan **Google Analytics** karena saat ini tidak diperlukan. Klik **Create project**.

![](./assets/screenshots/create-project-2.png)

Tunggu Firebase membuat project baru untuk pengguna. Setelah selesai, klik **Continue**.

![](./assets/screenshots/create-project-ready.png)

Terakhir, pengguna akan diarahkan ke halaman project yang dibuat, yaitu `firebase-vue-project`. Dengan ini, project ini siap untuk digunakan.

![](./assets/screenshots/firebase-project-page.png)

## 3 Produk-Produk di Firebase

Firebase memiliki banyak produk untuk mendukung layanan Backend-as-a-Service. Daftar produk-produk ini dapat dilihat di "Product categories" yang ada di side bar halaman project. Product category ini terbagi menjadi beberapa kategori, yaitu:

1. Build
    * Authentication
    * App checkbox
    * Firestore Database
    * Realtime Database
    * Extensions
    * Storage
    * Hosting
    * Functions
    * Machine Learning
    * Remote Config
2. Release and Monitor
    * Crashlytics
    * Performance
    * Test Lab
    * App Distribution
    * Remote Config
3. Analytics
    * Dashboard
    * Realtime Analytics
    * Events
    * Conversions
    * Audiences
    * Custom Definitions
    * Latest Release
    * DebugView
4. Engage
    * A/B Testing
    * Messaging
    * Remote Config
    * Dynamic Links
    * AdMob
    * Crashlytics
    * Authentication

Dapat dilihat bahwa terdapat banyak sekali produk yang disediakan oleh Firebase. Namun, tugas ini hanya menjelaskan produk-produk Firebase yang sering dipakai oleh pengguna baru.

### 3.1 Firebase Authentication

![](./assets/logo/firebase-authentication.svg)

Firebase Authentication melayani autentikasi dan manajemen user aplikasi dengan dukungan berbagai provider. Provider yang disediakan mulai dari native provider (Email/Password, Nomor Telpon) hingga provider-provider lainnya, mulai dari Google dan Microsoft hingga Apple, dan Github.

![](./assets/screenshots/firebase-authentication.png)

### 3.2 Cloud Firestore

![](./assets/logo/cloud-firestore.svg)

Cloud Firestore melayani hosting database NoSQL yang mendukung pembaruan secara real time dan penskalaan secara otomatis. Produk ini juga dilengkapi dengan *security rules* yang dapat diatur sendiri untuk menjaga keamanan dari database yang telah dibuat.

![](./assets/screenshots/cloud-firestore.png)

### 3.3 Firebase Realtime Database

![](./assets/logo/realtime-database.svg)

Firebase Realtime Database melayani hosting database real time. Artinya, database ini mampu untuk menyimpan dan melakukan sinkronisasi data secara real time. Sama seperti Cloud Firestore, Realtime Database juga memiliki fitur *security rules* untuk mengatur keamanan dari database ini.

![](./assets/screenshots/realtime-database.png)

### 3.4 Cloud Storage for Firebase

![](./assets/logo/cloud-storage.svg)

Cloud Storage for Firebase melayani penyimpanan file-file yang dibuat oleh pengguna aplikasi, seperti gambar, video, dan audio ke dalam penyimpanan cloud. File yang disimpan di Cloud Storage dapat di-retrieve untuk digunakan di aplikasi maupun digunakan oleh pengembang dari aplikasi.

![](./assets/screenshots/cloud-storage.png)

### 3.5 Firebase Hosting

![assets](./assets/logo/firebase-hosting.svg)

Firebase Hosting menyediakan layanan deployment web application dengan cepat menggunakan Content Delivery Network (CDN) global yang aman.

![](./assets/screenshots/firebase-hosting.png)

## 4. Menghubungkan Project Vue ke Firebase

Pertama-tama aktifkan produk Cloud Firestore dengan **test mode** di project `firebase-vue-project` (pilih lokasi bucket terdekat, misalnya Jakarta). Kemudian, daftarkan aplikasi web ke project Firebase ini dengan dengan cara mengunjungi `Project Overview`, kemudian memilih icon `Web`.

![](./assets/screenshots/register-web.png)

Beri nama aplikasi webnya dengan nama `firebase-vue-app`, kemudian klik **Register app**. Kemudian, pengguna akan diberikan code snipper berisi variabel bernama `firebaseConfig`. Copy code snippet tersebut untuk nanti. Selain itu, pengguna akan diarahkan untuk menginstall `firebase` di aplikasi web. Namun, `vuefire` juga perlu diinstall untuk mengintegrasikan aplikasi web Vue dengan project Firebase. Untuk itu, jalankan perintah beirkut:

```bash
npm install firebase vuefire
```

Setelah terinstall, inisialisasikan project Firebase ke aplikasi web Vue. Pertama, buat file bernama `firebase.js` di direktori `src/`, kemudian copy nilai dari code snippet sebelumnya ke file ini dan beri modifikasi agar bisa diakses oleh filenya. Ada baiknya untuk melakukan hal ini menggunakan environment variable yang di-outsource di file lain, misalnya di file `env.js`. Berikut adalah isi file dari `firebase.js` setelah dimodifikasi.

![](./assets/screenshots/firebase.js.png)

Setelah itu, import plugin `VueFire` dan `VueFireFirestoreOptionsAPI` di `src/main.js`, serta inisiasi konfigurasi firebase yang telah dibuat di `firebase.js` ke `src/main.js` juga. Berikut adalah file `src/main.js` setelah inisialisasi Firebase.

![](./assets/screenshots/main.js.png)

Dengan ini, konfigurasi Firebase telah selesai. Kemudian, akan dicoba untuk menggunakan Cloud Firestore yang sebelumnya telah diaktifkan. Tambahkan import berikut di awal file:

```js
import { getFirestore, collection } from 'firebase/firestore';
```

Kemudian, buat instance database Cloud Firestore dengan konfigurasi dan referensi ke collection `students`, dengan nama `studentsRef`. Koleksi ini tidak akan dibuat langsung, melainkan hanya ketika ada document yang dibuat di collection tersebut. Letakan pembuatan instance dan reference berikut di akhir file:

```js
export const db = getFirestore(firebaseApp);
export const studentsRef = collection(db, 'students');
```

Kode akhir untuk file `firebase.js` akan seperti gambar di bawah ini.

![](./assets/screenshots/final-firebase.js.png)

Setelah itu, hapus semua code di file `src/components/HelloWorld.js`. Hal yang ditampilkan di komponen ini adalah sebuah `button`, yangmana ketika button ini ditekan maka akan mengirimkan data statis ke Cloud Firestore, yangmana akan langsung diterima (di-retrieve) oleh Vue dan langsung ditampilkan ke pengguna.

Untuk itu, buat `template`-nya sebagai berikut:

```html
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
```

Kemudian, buat `script`-nya. Di dalam `script`, terdapat properti `studentData` yang nilai awalnya `null`. Dideklarasikan juga fungsi `createDocument` untuk membuat dokumen di Cloud Firestore berisi data mahasiswa. Fungsi ini berjalan secara asynchronous. Kemudian, buat fungsi bernama `setupFirestoreListener` yang berguna untuk melakukan *listening* ke Cloud Firestore. Apabila terdapat perubahan data di Cloud Firestore, maka fungsi ini akan mengambil data terbaru dan melakukan assign data tersebut ke properti `studentData`. Proses ini akan menyebabkan update tampilan dikarenakan `template` menggunakan `v-if`.

```js
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
```

Setelah itu, berikan styling sederhana untuk menghias `button`.

```css
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
```

File `src/components/HelloWorld.vue` telah selesai dibuat. Sekarang, jalankan project Vue dengan perintah berikut:

```bash
npm run serve
```

Setelah itu, aplikasi Vue akan berjalan di http://localhost:8080. Buka URL tersebut di browser, maka akan muncul tampilan sederhana berikut:

![](./assets/screenshots/before-clicked.png)

Apabila tombol tersebut di-klik, maka document dan collection akan dibuat oleh fungsi `createDocument`, kemudian fungsi `setupFirestoreListener` akan mengetahui bahwa terdapat perubahan di Cloud Firestore dan memberikan nilai baru ke properti `studentData`. Proses ini akan menyebabkan perubahan tampilan seperti berikut:

![](./assets/screenshots/after-clicked.png)

Berikut adalah isi dari Cloud Firestore sebelum document dibuat:

![](./assets/screenshots/before-firestore.png)

Setelah di-klik, Cloud Firestore akan memiliki document dan collection seperti pada gambar di bawah ini:

![](./assets/screenshots/after-firestore.png)

## Penutup

Demikian adalah penjelasan mengenai Firebase, produk-produk Firebase, dan cara membuat project Firebase beserta cara menghubungkannya dengan aplikasi Vue. Untuk source code, dapat diakses di URL berikut:

[https://github.com/fzl-22/firebase-vue-app](https://github.com/fzl-22/firebase-vue-app)

Terimakasih.