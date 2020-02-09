 export default interface Project {
    timeSpent: number;
    progress: number;
    status: string;
    _id: string;
    title: string;
    company: string;
    cost: string;
    deadline: string;
    assigned: {
        position: string;
        description: string;
        phone: string;
        address: string;
        organization: string;
        _id: string;
        email: string;
        name: string;
    },
    created_at: string;
    updated_at: string;
}