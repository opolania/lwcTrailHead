import { LightningElement,api,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
  { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
  { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
  { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
  columns = COLUMNS;

  // @wire(getAccounts)
  // accounts;

  accountlist;

  @wire(getAccounts)
  wiredAccount(response) {
    if (response.data) {
     console.log('ebcontre data');
     this.accountlist = response;
      console.log(`asigno respuesta `);
    } else if (response.error) {
      this.error = response.error;
      this.record = undefined;
    }
  }
}