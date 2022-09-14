import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')
const client = sanityClient({
        projectId: 'vud7tmek',
        dataset: 'production',
        apiVersion: '2022-09-01', // use current UTC date - see "specifying API version"!
        // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
        useCdn: true, // `false` if you want to ensure fresh data
    })
    // Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source)
}

export default urlFor;