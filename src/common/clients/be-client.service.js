/**
 * @typedef {Object} Endpoints
 * @property {string} endpoint.posts
 * @property {string} endpoint.post
 */

class BEClient {
    /**
     * @param {angular.IHttpService} $http
     * @param {Endpoints} endpoints
     */
    constructor($http, endpoints) {
        this.$http = $http;
        this.endpoints = endpoints;
    }

    /**
     * gets posts
     * @returns {Promise<Array<Object>>}
     */
    fetchPosts() {
        return this.$http.get(this.endpoints.posts).then(({ data }) => data);
    }

    /**
     * gets a post
     * @param {number} id
     * @returns {Promise<Object>}
     */
    fetchPost(id) {
        return this.$http.get(`${this.endpoints.post}/${id}`).then(({ data }) => data);
    }
}

class BEClientProvider {
    constructor() {
        this.$get.$inject = ['$http'];
    }

    /**
     * sets clients endpoints
     * @param {Endpoints} endpoints
     */
    setEndpoints(endpoints) {
        this.endpoints = endpoints;
    }

    $get($http) {
        return new BEClient($http, this.endpoints);
    }
}

export { BEClient, BEClientProvider };
