class UserGroupService {

    static AUTOCOMPLETE_PROJECTION = 'autocomplete';

    static BASE_URL = '/api/userGroups';
    static BASE_FETCH_HEADERS = {
        'Content-Type': 'application/json'
    };

    static getGroups() {
        const fetchUrl = `${UserGroupService.BASE_URL}?projection=${UserGroupService.AUTOCOMPLETE_PROJECTION}`;

        return fetch(
            fetchUrl,
            {
                method: 'GET',
                credentials: 'same-origin',
                headers: UserGroupService.BASE_FETCH_HEADERS
            }
        ).then(response => response.json());
    }

}

export default UserGroupService;