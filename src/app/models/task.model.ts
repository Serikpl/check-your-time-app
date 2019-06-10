export class Task{
	task_id: number = null;
	name: string = null;
	description: string = null;
	created_date: string = null;
	duration: number = null; // seconds 
	is_active: boolean = false;

	constructor(fields?: any) {
		if(fields) Object.assign(this, fields);
	}
}