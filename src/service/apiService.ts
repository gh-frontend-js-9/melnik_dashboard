class API {
    static async getProject() {
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            }
        });
        return await response.json();
    }
    static async postProject(body) {
        let info = {
            'title': body.title,
            'company': body.company,
            'cost': body.cost,
            'deadline': body.deadline,
            'assigned': body.assigned,
        }
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            },
            body: JSON.stringify(info)
        });
        return await response.json();
    }
}

export default API
