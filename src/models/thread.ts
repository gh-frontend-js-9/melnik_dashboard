export default interface Thread {
    users:{
        _id:string,
        name:string
    },
    _id:string,
    created_at:string,
    updated_at:string,
    message:{
        _id:string,
        thread:string,
        body:string
    }
}