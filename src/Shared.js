import axios from 'axios';

const baseapi = axios.create({
    baseURL: 'https://api.lstankov.me/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
});
const githubapi = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});
// API

export default {
    public_data: {
        articles_data: function () {
            var article_data = [];
            baseapi.get('articles').then(({data}) => {
                data.forEach(article => {
                    article_data.push(article);
                });
            })

            return article_data;
        },
        get_categories: function () {
            var categories_data = [];
            baseapi.get('categories').then(({data}) => {
               data.forEach(category => {
                   categories_data.push(category);
               })
            });
            return categories_data;
        },
        get_github_projects:  function() {
            var github_data = [];

            githubapi.get('users/hex2binbg/repos').then(({data}) => {
               data.forEach(repo => {
                   github_data.push(repo);
               })
            });
            return github_data;
        },
        get_latest_articles: function() {
            var latest_data = [];

            baseapi.get('articles/last').then(({data}) => {
                data.forEach(article => {
                    latest_data.push(article);
                })
            });
            return latest_data;
        },
        export_baseapi: function() {
            return baseapi;
        }
    }
}