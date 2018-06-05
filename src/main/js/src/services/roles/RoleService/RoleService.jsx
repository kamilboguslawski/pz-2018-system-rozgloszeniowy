class RoleService {
    static AUTOCOMPLETE_PROJECTION = 'autocomplete';

    static BASE_URL = '/api/roles';
    static BASE_FETCH_HEADERS = {
        'Content-Type': 'application/json'
    };

    static getRoles() {
        const fetchUrl = `${RoleService.BASE_URL}?projection=${RoleService.AUTOCOMPLETE_PROJECTION}`;

        return fetch(
            fetchUrl,
            {
                method: 'GET',
                credentials: 'same-origin',
                headers: RoleService.BASE_FETCH_HEADERS
            }
        ).then(response => response.json());
    }

}

export default RoleService;