

const headers = {
    "Accept": "application/json"
};

export const getAll = (userName) =>
    fetch(`/api/books-data?userName=${userName}`, {headers})
        .then(res => res.json());

export const updateShelf = (book, shelf, userName) =>
    fetch(`/api/books/update-shelf/${book.isin}?userName=${userName}`, {
        method: "PUT",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({shelf})
    }).then(res => res.json());

export const updateReview = (book, review, userName) =>
    fetch(`/api/books/update-review/${book.isin}?userName=${userName}`, {
        method: "PUT",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({review})
}).then(res => res.json());    

