__import JobActions from 'actions/JobActions';
import { Alt, Storage } from 'utils';
import _ from 'lodash';

@Storage
class JobStore {

	constructor() {
		this.jobs = this.get('jobs') || [];

		this.bindListeners({
			onAdd: JobActions.ADD,
			onClear: JobActions.CLEAR
		});
	}

	onAdd = (job) => {
		if (job && _.isObject(job) && !_.isEmpty(job)) {
			const jobs = [...this.jobs, job];
			this.jobs = jobs;
			this.set('jobs', jobs);
		} else if (job && _.isArray(job)) {
			const jobs = job;
			this.jobs = jobs;
			this.set('jobs', jobs);
		}
	};

	onClear() {
		this.jobs = [];
		this.del('jobs');
	};

}

export default Alt.createStore(JobStore, 'JobStore');
