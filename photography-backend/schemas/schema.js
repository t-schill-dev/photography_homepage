// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import weddings from './weddings';
import church from './subcategories/church'
import wedding_photoshooting from './subcategories/wedding-photoshooting'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        weddings,
        church,
        wedding_photoshooting
    ]),
})