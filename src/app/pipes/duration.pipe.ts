import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'duration'
})
export class DurationPipe implements PipeTransform {

	transform(value: string): string {
		let duration = '00:00'; 
		if(value && Number(value)){
			if(Number(value) < 3600){	
				duration = moment(Number(value) * 1000).format('mm:ss');
			}
			else{
				duration = moment(Number(value) * 1000).format('HH:mm:ss');
			}
		}

		return duration;
	}

}