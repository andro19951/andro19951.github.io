var app = angular.module('minmax', ['ngMap'
]);
app.controller('map', function($scope,$http){

$scope.and=20;
$scope.nad=20;
$scope.zoom=2;
  $scope.meme = function(event,id){
    markerPosObj = {
                   pos: [this.getPosition().lat(), this.getPosition().lng()]
               };
               markerPos = [];
               markerPos.push(markerPosObj);
               // console.log(this.position.lat());
               // console.log(this.position.lng());
				$scope.and=this.position.lat();
				$scope.nad=this.position.lng();
				$scope.zoom=8;
			   console.log($scope.getById(id));
               console.log('this marker', markerPos);
             $scope.chatynuli = true;
             $scope.chatynuliserti = $scope.getById(id);

  }

$scope.report=[];
$http.get("http://localhost:8080/api/disasters")
   .then(function(response) {
       $scope.poits = response.data;
       console.log($scope.poits);
   });
  $scope.stuffs=[
		{
			"id": 0,
		  	"user_id": 0,
			"disaster_id": 0,
			"supply_type": "blankets",
			"needed_amount": 10000,
			"current_amount": 2000,
			"unconfirmed_amount": 3000,
			"unit": "pcs"
		},
		{
			"id": 1,
		  	"user_id": 0,
			"disaster_id": 0,
			"supply_type": "water",
			"needed_amount": 40000,
			"current_amount": 2000,
			"unconfirmed_amount": 13000,
			"unit": "l"
		},
		{
			"id": 2,
		  	"user_id": 0,
			"disaster_id": 0,
			"supply_type": "big tents",
			"needed_amount": 1300,
			"current_amount": 120,
			"unconfirmed_amount": 10,
			"unit": "pcs"
		},
    {
			"id": 3,
		  	"user_id": 0,
			"disaster_id": 1,
			"supply_type": "warm clothes",
			"needed_amount": 9000,
			"current_amount": 3200,
			"unconfirmed_amount": 1200,
			"unit": "pcs"
		},
		{
			"id": 4,
		  	"user_id": 0,
			"disaster_id": 1,
			"supply_type": "Waterproof equipment",
			"needed_amount": 7000,
			"current_amount": 4300,
			"unconfirmed_amount": 130,
			"unit": "pair"
		}
	];
  console.log($scope.points);
  $scope.ands=[
    {
      "latitude":18.971187
    },{
      "latitude": 25.03428

    }
  ]
  $scope.points =[
		{
			"id": 0,
			"nature": "Earthquake",
			"coordinates": "18.971187, -72.285215",
		    "latitude":18.971187,
		    "longitude":-72.285215,
			"affectedCount": 3000000,
			"injuredCount": 1000000,
			"fatalityCount": 160000,
			"description": "The earthquake caused major damage in Port-au-Prince, Jacmel and other cities in the region. Many buildings are significantly damaged or destroyed."
		},
		{
			"id": 1,
			"nature": "Hurricane",
      "coordinates": "18.971187, -72.285215",
			"latitude": 25.03428,
       "longitude":-77.39627999999999,
			"affectedCount": 10000000,
			"injuredCount": 7500,
			"fatalityCount": 1500,
			"description": "The storm has caused severe destruction along the Gulf coast from central Florida to Texas, much of it due to the storm surge and levee failure. Severe property damage has occurred in coastal areas, such as Mississippi beachfront towns; over 90 percent of these are flooded."
		}
	];

$scope.andro = function(id){
  $scope.a=id;

}
$scope.getById = function(id){
	var rss={};
	for(var i=0;i<$scope.points.length;i++){
		if($scope.points[i].id==id){
			rss=$scope.points[i];
		}
	}
	return rss;
}
console.log($scope.a);

  $scope.customIcon = {
      "scaledSize": [32, 32],
      "url": "../icon3.png"
  };

});
