import { api, LightningElement, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts';

export default class WireApexProperty extends LightningElement {
	@api recordId;
	@wire (getRelatedContacts,{accountId:'$recordId'})
	contacts;

	handleClick(){
		getRelatedContacts({accountId:this.recordId}
        ).then(contacts =>{

		}).catch(error => {

		})
	}
}