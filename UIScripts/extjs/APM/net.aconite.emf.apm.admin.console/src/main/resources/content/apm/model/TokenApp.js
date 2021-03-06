Ext.define('Apm.model.TokenApp',
{
	extend	: 'Ext.data.Model',
	id		: 'idTokenAppModel',
	fields: 
			[
				{name: 'pinDeliveryMethod',			 mapping: 'pinDeliveryMethod',      type: 'int'},
				{name: 'pinPukFlag',			     mapping: 'pinPukFlag',             type: 'int',        useNull: true},
				{name: 'sequenceNumber',			 mapping: 'sequenceNumber',         type: 'int'},
				{name: 'panId',			             mapping: 'panId',                  type: 'int',        useNull: true},
                //{name: 'panEncrypted',               mapping: 'panEncrypted' ,          type: 'bool',               convert: function(v){return (v === "on" || v === true) ? true : false;}},
				{name: 'pan', 						 mapping: 'pan',                                        useNull: true},
				{name: 'panSeqNumber',	  		     mapping: 'panSeqNumber',           type: 'int',        useNull: true},
				{name: 'panExpiryDate',	  		     mapping: 'panExpiryDate',          type: 'date',       dateFormat: 'Y-m-d',    useNull: true},
				{name: 'pinId',	                     mapping: 'pinId', 	                type: 'int'	,       useNull: true},
                {name: 'issuerPinId',		 	     mapping: 'issuerPinId', 			type: 'int'	,       useNull: true},
				{name: 'pukId', 	 	             mapping: 'pukId', 		            type: 'int'	,       useNull: true},
				{name: 'issuerPukId', 	             mapping: 'issuerPukId', 	        type: 'int'	,       useNull: true},
				{name: 'prevPanId', 	 	         mapping: 'prevPanId', 		        type: 'int'	,       useNull: true},
				{name: 'prevPan', 		             mapping: 'prevPan', 		                            useNull: true},
                //{name: 'prevPanEncrypted',           mapping: 'prevPanEncrypted' ,      type: 'bool',               convert: function(v){return (v === "on" || v === true) ? true : false;}},
                {name: 'prevPanSequenceNumber', 	 mapping: 'prevPanSequenceNumber',  type: 'int',        useNull: true},
				{name: 'prevPanExpiryDate', 	     mapping: 'prevPanExpiryDate', 		type: 'date',       dateFormat: 'Y-m-d',    useNull: true},
				{name: 'mailingCode', 		         mapping: 'mailingCode', 		    type: 'int',        useNull: true},
				{name: 'priority', 		             mapping: 'priority', 		                            useNull: true},
				{name: 'mailerlanguageCode', 		 mapping: 'mailerlanguageCode', 		                useNull: true},
				{name: 'companyName', 		         mapping: 'companyName', 		                        useNull: true},
				{name: 'companyContact', 		     mapping: 'companyContact', 		                    useNull: true},
				{name: 'mailerPassThroughData',      mapping: 'mailerPassThroughData',                      useNull: true},
				{name: 'title', 		             mapping: 'title', 		                                useNull: true},
				{name: 'firstName', 		         mapping: 'firstName', 		                            useNull: true},
				{name: 'middleName', 		         mapping: 'middleName', 		                        useNull: true},
				{name: 'lastName', 		             mapping: 'lastName', 		                            useNull: true},
				{name: 'holderAddressLine1', 		 mapping: 'holderAddressLine1', 		                useNull: true},
				{name: 'holderAddressLine2', 		 mapping: 'holderAddressLine2', 		                useNull: true},
				{name: 'holderAddressLine3', 		 mapping: 'holderAddressLine3', 		                useNull: true},
				{name: 'holderAddressLine4', 		 mapping: 'holderAddressLine4', 		                useNull: true},
				{name: 'holderAddressLine5', 		 mapping: 'holderAddressLine5', 		                useNull: true},
				{name: 'holderAddressLine6', 		 mapping: 'holderAddressLine6', 		                useNull: true},
				{name: 'holderTown', 		         mapping: 'holderTown', 		                        useNull: true},
				{name: 'holderPostCode', 		     mapping: 'holderPostCode', 		                    useNull: true},
				{name: 'holderCountry', 		     mapping: 'holderCountry', 		                        useNull: true},
				{name: 'branchCode', 		         mapping: 'branchCode', 		                        useNull: true},
				{name: 'branchName', 		         mapping: 'branchName', 		                        useNull: true},
				{name: 'issuerAddressLine1', 		 mapping: 'issuerAddressLine1', 		                useNull: true},
				{name: 'issuerAddressLine2', 		 mapping: 'issuerAddressLine2', 		                useNull: true},
				{name: 'issuerAddressLine3', 		 mapping: 'issuerAddressLine3', 		                useNull: true},
				{name: 'issuerAddressLine4', 		 mapping: 'issuerAddressLine4', 		                useNull: true},
				{name: 'issuerAddressLine5', 		 mapping: 'issuerAddressLine5', 		                useNull: true},
				{name: 'issuerAddressLine6', 		 mapping: 'issuerAddressLine6', 		                useNull: true},
				{name: 'issuerTown', 		         mapping: 'issuerTown', 		                        useNull: true},
				{name: 'issuerPostCode', 		     mapping: 'issuerPostCode', 		                    useNull: true},
				{name: 'issuerCountry', 		     mapping: 'issuerCountry', 		                        useNull: true},
				{name: 'mobilePhoneNumber', 		 mapping: 'mobilePhoneNumber', 		type: 'int',        useNull: true},
				{name: 'smsLanguageCode', 		     mapping: 'smsLanguageCode', 		                    useNull: true},
				{name: 'smsPassThroughData', 		 mapping: 'smsPassThroughData', 		                useNull: true},
				{name: 'customerCode', 		         mapping: 'customerCode', 		                        useNull: true},
				{name: 'webPassThroughData', 		 mapping: 'webPassThroughData', 		                useNull: true},
			]
});	
