//CALL TYPE CONSTANTS
const INSERT="INSERT";
const FIND_ALL="FIND_ALL";
const FIND_ONE="FIND_ONE";
const UPDATE="UPDATE";
const DELETE="DELETE";
const MongoClient = require('mongodb').MongoClient;

exports.dbCall=(type, selectedCollection, newEntry={}, key={}, newValue={})=>{
	const url = "mongodb+srv://sciortinomrc:17081988@cluster0-dcqag.mongodb.net/test?retryWrites=true";
	const client = new MongoClient(url, { useNewUrlParser: true });
	client.connect(err => {
		console.log({err})
	  const collection = client.db("mappypals").collection(selectedCollection);
	let response={};
	  // perform actions on the collection object
		switch(type){
			case INSERT:{
				collection.insertMany([
					{[key]: newEntry}
					],
					(err,res)=> response={err,res}
				)
				return response;
			}
			case FIND_ONE:{
				collection.find({newEntry}, (err,res)=> response={err,res} )
				return response;
			}
			case FIND_ALL:{
				collection.find({}, (err,res)=> response= {err,res} )
				return response;
			}
			case UPDATE:{
				collection.updateOne(key, {$set:newValue}, (err,res)=> response= {err,res} );
				return response;
			}
			case DELETE: {
				collection.deleteOne(newEntry, (err,res)=> response= {err,res})
				return response;
			}
			case DEFAULT: {}
		}
		client.close();
	});
}

