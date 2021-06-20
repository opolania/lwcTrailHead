public with sharing class AccountController {
	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts() {
		return [
				SELECT Name, AnnualRevenue, Industry
				FROM Account
				WHERE AnnualRevenue > 0
				WITH SECURITY_ENFORCED
				ORDER BY Name
		];
	}
}