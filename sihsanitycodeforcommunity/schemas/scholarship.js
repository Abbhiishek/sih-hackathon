export default {
    name: 'scholarship',
    title: 'Scholarship',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options:{
            hotspot: true,
        },
      },
      {
        name: 'about',
        title: 'About',
        type: 'string',
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      {
        name: 'eligibility',
        title: 'eligibility',
        type: 'string',
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'string',
      },
    ],
  };