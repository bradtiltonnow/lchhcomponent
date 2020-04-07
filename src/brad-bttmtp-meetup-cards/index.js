import '../brad-bttmtp-meetup-group';
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import {GROUPS} from '../constants';

const view = (state, {updateState}) => {
	return (
		<div class="panel panel-default">
			<h1>Meetup Groups</h1>
			<p>There are {GROUPS.length} meetup groups</p>
			<ul>
				{GROUPS.map(group => (
					<li>
						<brad-bttmtp-meetup-group group={group} />
					</li>
				))}
			</ul>
		</div>
	);
};

createCustomElement('brad-bttmtp-meetup-cards', {
	renderer: {type: snabbdom},
	view,
	styles
});