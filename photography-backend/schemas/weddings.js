export default {
    name: 'wedding',
    type: 'document',
    title: 'Wedding',
    fields: [{
            name: 'client',
            type: 'string',
            title: 'Client',

        },
        {
            name: 'date',
            type: 'date',
            title: 'Date'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },

        {
            name: 'category',
            type: 'object',
            fields: [{
                    title: 'Church',
                    name: 'church',
                    type: 'church-gallery',


                },

                {
                    title: 'Wedding_photoshooting',
                    name: 'wedding_photoshooting',
                    type: 'wedding_photoshooting',


                },
            ]

        },

        // {
        //     name: 'category',
        //     type: 'object',
        //     title: 'Category',


        //     fields: [{
        //             name: 'name',
        //             type: 'string',
        //             title: 'Name'
        //         },
        //         {
        //             name: 'images',
        //             type: 'array',
        //             title: 'Images',
        //             of: [{
        //                 name: 'image',
        //                 type: 'image',
        //                 title: 'Image',
        //                 fields: [{
        //                         name: 'caption',
        //                         type: 'string',
        //                         title: 'Caption',
        //                     },
        //                     {
        //                         name: 'featured',
        //                         type: 'boolean',
        //                         title: 'Featured'
        //                     }
        //                 ],
        //             }, ]
        //         },
        //     ],

        // },

    ]


}

// export default {
//     name: 'weddings',
//     type: 'object',
//     title: 'Weddings',
//     fields: [{
//             name: 'images',
//             type: 'array',
//             title: 'Images',
//             of: [{
//                 name: 'image',
//                 type: 'image',
//                 title: 'Image',
//                 fields: [{
//                     name: 'alt',
//                     type: 'string',
//                     title: 'Alternative text',
//                 }, ],
//             }, ],
//             options: {
//                 layout: 'grid',
//             },
//         },
//         {
//             name: 'display',
//             type: 'string',
//             title: 'Display as',
//             description: 'How should we display these images?',
//             options: {
//                 list: [
//                     { title: 'Stacked on top of eachother', value: 'stacked' },
//                     { title: 'In-line', value: 'inline' },
//                     { title: 'Carousel', value: 'carousel' },
//                 ],
//                 layout: 'radio', // <-- defaults to 'dropdown'
//             },
//         },
//         {
//             name: 'zoom',
//             type: 'boolean',
//             title: 'Zoom enabled',
//             description: 'Should we enable zooming of images?',
//         },
//     ],
//     // preview: {
//     //     select: {
//     //         images: 'images',
//     //         image: 'images.0',
//     //     },
//     //     prepare(selection) {
//     //         const { images, image } = selection;

//     //         return {
//     //             title: `Gallery block of ${Object.keys(images).length} images`,
//     //             subtitle: `Alt text: ${image.alt}`,
//     //             media: image,
//     //         };
//     //     },
//     // },
// };