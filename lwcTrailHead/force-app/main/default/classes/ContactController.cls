
public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getRelatedContacts(Id accountId){
        try {
            return [
				SELECT  Name, Title, Email, Phone
					FROM Contact
					WHERE AccountId = :accountId
					WITH SECURITY_ENFORCED
			];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
