export default {
    name: 'developer',
    title: 'Developer',
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
        name: 'experience',
        title: 'Experience',
        type: 'string',
      },
      {
        name: 'social',
        title: 'Social',
        type: 'string',
      },
    ],
  };