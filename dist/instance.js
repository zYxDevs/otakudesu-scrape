"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtakudesuInstance = void 0;
const hanif_tiny_http_1 = require("hanif-tiny-http");
const constants_1 = require("./constants");
const scraper_1 = require("./scraper");
const listOngoing_1 = require("./scraper/listOngoing");
const util_1 = require("./util");
/**
 * @description - Otakudesu Instance, here you go.
 */
class OtakudesuInstance {
    /**
       *
       * @param {String} baseUrl - Base URL For Otakudesu site
       */
    constructor(baseUrl = constants_1.baseURL) {
        this.baseUrl = baseUrl;
        this.request = new hanif_tiny_http_1.TinyHttpClient({
            baseURL: this.baseUrl,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
        if (!util_1.OtakUtil.validateURL(baseUrl)) {
            throw new TypeError('Invalid Base URL URL');
        }
    }
    ;
    /**
     * @description You can use this method for getting genre list.
     * @return {Genre[]}
     */
    listGenre() {
        return (0, scraper_1.getGenreList)(this.request);
    }
    /**
     * @description You can use this method for getting ongoing anime list.
     * @return {OngoingAnime[]}
     */
    listOngoing() {
        return (0, listOngoing_1.getOngoingList)(this.request);
    }
    /**
     * @description You can use this method for getting anime information.
     * @param {String} anime - Fill this parameter with anime name. (Eg. Boruto)
     * @return {Anime[]}
     */
    getAnime(anime) {
        return (0, scraper_1.getAnime)(this.request, anime);
    }
}
exports.OtakudesuInstance = OtakudesuInstance;