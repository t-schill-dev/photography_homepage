export default {
    name: 'wedding_photoshooting',
    type: 'document',
    title: 'Wedding_photoshooting',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{
                name: 'image',
                type: 'image',
                title: 'Image',
                fields: [{
                        name: 'caption',
                        type: 'string',
                        title: 'Caption',
                    },
                    {
                        name: 'featured',
                        type: 'boolean',
                        title: 'Featured'
                    }
                ],
            }, ]
        },
    ],

}