export interface TaskDTO{
    taskId:string,
    title:string,
    description:string,
    priority:string,
    status:string,
    dueDate:Date,
    createdAt:Date,
    userEmail:string;
}