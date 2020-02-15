class API {
    static async getProject() {
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token
            }
        });
        return await response.json();
    }
    static async addProject(body) {
        let info = {
            'title': body.title,
            'company': body.company,
            'cost': body.cost,
            'deadline': body.deadline,
            'assigned': body.assigned,
        };
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token': localStorage.token
            },
            body: JSON.stringify(info)
        });
        return await response.json();
    }
    static async updateProject(body) {
        let info = {
            'cost': body.cost,
            'status': body.status
        };
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/` + body.id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token': localStorage.token
            },
            body: JSON.stringify(info)
        });
        return await response.json();
    }
    static async deleteProject(body) {
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/` + body.id, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token': localStorage.token
            }
        });
        return await response.json();
    }
    static async login(body) {
        let info = {
            'email': body.email,
            'password': body.pass
        };
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify(info)
        });
        const json = await response.json();
        return {'response': response, 'json': json};
    }
}

export default API
