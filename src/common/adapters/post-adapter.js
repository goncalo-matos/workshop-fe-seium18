/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} [content]
 */

/**
 * adapts posts to our domain model
 *
 * @param {Object} post
 * @returns {Post}
 */
function adaptPost(post) {
    return {
        id: post.id,
        title: post.title,
        subtitle: post.subtitle,
        content: post.body
    };
}

export { adaptPost };
