class UserService {

    static BASE_URL = '/api/users';
    static BASE_FETCH_HEADERS = {
        'Content-Type': 'application/json'
    };

    getUsers(page, size) {

        const fetchUrl = `${UserService.BASE_URL}?page=${page}&size=${size}`;

        return fetch(
            fetchUrl,
            {
                method: 'GET',
                headers: UserService.BASE_FETCH_HEADERS
            }
        ).then(response => response.json());
    }

    getById(id) {

    }


}

export default new UserService();