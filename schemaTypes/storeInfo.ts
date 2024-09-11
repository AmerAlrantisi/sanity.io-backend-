import { defineField, defineType } from 'sanity';

export const storeInfo = defineType({
  name: 'storeInfo',
  title: 'storeInfo',
  type: 'object',
  fields: [
    {
      name: 'StoreFullName',
      title: 'Store Full Name',
      type: 'string',
    },
  

    {
      name: 'phoneNumber',
      title: 'phone Number',
      type: 'string',
    },

    {
      name: 'phoneNumber2',
      title: 'phone Number 2',
      type: 'string',
    },


    {
      name: 'location',
      title: 'location',
      type: 'string',
    },

    {
      name: 'time',
      title: 'time',
      type: 'string',
    },



    {
      name: 'locationFullName',
      title: 'location Name',
      type: 'string',
    },

    


   


  ],
});
