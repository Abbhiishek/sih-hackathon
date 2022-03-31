// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import comments from './comments'
import post from './post'
import like from './like'
import postedBy from './postedBy'
import developer from "./developer";
import testimonial from "./testimonials";
import scholarship from "./scholarship";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    user,post,like,postedBy,
    comments , developer,testimonial,scholarship
  ]),
})
