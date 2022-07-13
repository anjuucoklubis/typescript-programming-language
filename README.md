Belajar TYPESCIRPT - 01

1. Instalasi
    - npm install -g typescript (global)
    - npm install typescript --save-dev 

2. Create tsconfig.json (buat file tsconfig untuk membuat outdir, nyimpan file js nya)
    - tsc -init
   Ubah outdir 
    - outdir = "./dist",
    - run 'tsc'

3. tsc run typescript (biar langsung excute file ts , dan tidak lagi excute js)
    - npm install -g ts-node
   Depending on configuration
    - npm install -D tslib @types/node

4. RUN 
    - ts-node learn-ts.ts


Note:

1. Type primitive TS
    - any = izinkan apa saja
    - unknown = pastikan seseorang yang menggunakan tipe ini menyatakan apa tipenya
    - never = tidak mungkin tipe ini bisa terjadi
    - void = fungsi yang mengembalikan tidak terdefinisi atau tidak memiliki nilai kembali

2. tsc merupakan typescript compailer
    => Pertama kita harus mengambilnya melalui npm.
        -  npm install -g typescript
           => Ini menginstal Kompilator TypeScript tscsecara global. Anda dapat    
              menggunakan npx atau alat serupa jika Anda lebih suka menjalankan tscdari node_modulespaket lokal.

3. tsc --noEmitOnError hello.ts
   =>  Anda mungkin ingin sedikit lebih defensif terhadap kesalahan, dan membuat    
       TypeScript bertindak sedikit lebih ketat. Dalam hal ini, Anda dapat menggunakan noEmitOnErroropsi kompiler. Coba ubah hello.tsfile Anda dan jalankan tscdengan flag itu:
