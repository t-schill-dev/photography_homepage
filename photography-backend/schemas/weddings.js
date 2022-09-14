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
                        name: 'category',
                        type: 'string',
                        title: 'Category',
                    },
                    {
                        name: 'featured',
                        type: 'boolean',
                        title: 'Featured'
                    }
                ],
            }, ]
        },
    ]
}