import { defineField, defineType } from 'sanity';

export const details = defineType({
  name: 'details',
  title: 'details',
  type: 'object',
  fields: [


  

    {
      name: 'ServiceStoreFullName',
      title: 'Store Full Name',
      type: 'string',
    },


    {
      name: 'ServicePhoneNumber',
      title: 'phone Number',
      type: 'string',
    },


    


    {
      name: 'ServiceLocation',
      title: 'location',
      type: 'string',
    },
   


   


  ],
});
