'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('hewans', [ //bulkInsert artinya ingin memasukkan banyak data, yg didalam kurung itu nama table, liat di migrations
      {
        nama: "a",
        namaSpesies: "kucing",
        umur: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "si kucing",
        namaSpesies: "kucing",
        umur: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "dodo",
        namaSpesies: "kelinci",
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "rere",
        namaSpesies: "kucing",
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
     ]) 
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hewans', null, {});
  }
};