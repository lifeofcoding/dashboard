import { Alt } from 'utils';

class JobActions {

	add(name) {
		return name;
	}

	clear() {
		return null;
	}

}

export default Alt.createActions(JobActions);
