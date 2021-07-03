import { publish, MessageContext } from 'lightning/messageService';
import BEAR_LIST_UPDATE_MESSAGE from '@salesforce/messageChannel/BearListUpdate__c';
import { NavigationMixin } from 'lightning/navigation';
import { LightningElement,wire  } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';
import searchBears from '@salesforce/apex/BearController.searchBears';
export default class BearList extends NavigationMixin(LightningElement) {
    searchTerm = '';
	bears;
	@wire(MessageContext) messageContext;
	@wire(searchBears, {searchTerm: '$searchTerm'})
	loadBears(result) {
	  this.bears = result;
	  if (result.data) {
		const message = {
		  bears: result.data
		};
		publish(this.messageContext, BEAR_LIST_UPDATE_MESSAGE, message);
	  }
	}

	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	};
	// connectedCallback() {
	// 	this.loadBears();
	// }
	// loadBears() {
	// 	getAllBears()
	// 		.then(result => {
	// 			this.bears = result;
	// 		})
	// 		.catch(error => {
	// 			this.error = error;
	// 		});
	// }

    handleSearchTermChange(event) {
		// Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.bears.data.length > 0);
	}

	handleBearView(event) {
		// Get bear record id from bearview event
		const bearId = event.detail;
		// Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: bearId,
				objectApiName: 'Bear__c',
				actionName: 'view',
			},
		});
	}
}