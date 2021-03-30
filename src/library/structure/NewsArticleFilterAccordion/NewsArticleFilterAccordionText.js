export const NewsArticleFilterFields = {
    search: {
        title: "Search articles",
        queryParamKey: "searchTerm"
    },
    services: {
        title: "Services",
        queryParamKey: "services"
    },
    articleType: {
        title: "Type of Article",
        queryParamKey: "articleType"
    },
    sortBy: {
        title: "Sort by",
        queryParamKey: "sortBy"
    },
    // what is included in the filter removal
    removeFiltersList: ['searchTerm', 'services', 'articleType']
}