export default {
    name: 'church-gallery',
    type: 'document',
    title: 'Church-Gallery',
    fields: [{
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
    }, ],

}