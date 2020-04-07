import "@servicenow/now-highlighted-value";
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './styles.scss';

const view = (state, {updateState}) => {
	var meetupState = {display: 'Active', status: 'positive'};
	if (!state.group.active) {
		meetupState = {display: 'Inactive', status: 'critical'};
	}
	return (
		<div>
			<a href={state.group.url}>{state.group.name}</a>
			<now-highlighted-value showIcon={true} label={meetupState.display} status={meetupState.status}></now-highlighted-value>
		</div>
	);
};

createCustomElement('brad-bttmtp-meetup-group', {
	renderer: {type: snabbdom},
	properties : {
		group: {default: {}}
	},
	transformState : ({properties}) => properties,
	view,
	styles: style
});
